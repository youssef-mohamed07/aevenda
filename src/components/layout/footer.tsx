import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import type { LayoutDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMailtoUrl, getSiteConfig } from "@/lib/site-config";

const linkClass = "text-sm text-white/55 transition-colors duration-200 hover:text-white";

export function Footer({
  locale,
  dictionary,
  logoSrc = "/brand/logo.svg",
}: {
  locale: Locale;
  dictionary: LayoutDictionary;
  logoSrc?: string;
}) {
  const year = new Date().getFullYear();
  const { footer, home } = dictionary;
  const siteConfig = getSiteConfig();
  const localizedLinks = (
    siteConfig.footerExploreLinks?.length
      ? siteConfig.footerExploreLinks
      : dictionary.nav.items
  ).map((item) => ({
    label: item.label,
    href: localizePath(item.href, locale),
  }));
  const location = [siteConfig.address.city, siteConfig.address.countryName]
    .filter(Boolean)
    .join(", ");
  const socialLinks = [
    { href: siteConfig.social.facebook, label: footer.social.facebook },
    { href: siteConfig.social.instagram, label: footer.social.instagram },
    { href: siteConfig.social.linkedin, label: footer.social.linkedin },
    { href: siteConfig.social.x, label: footer.social.x },
  ].filter((item) => item.href && item.label);

  return (
    <footer className="mt-auto border-t border-white/10 bg-noir text-white/60">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href={localizePath("/", locale)}
              className="inline-flex rounded-2xl bg-white px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              aria-label={`${siteConfig.name} home`}
            >
              <SiteImage
                brand
                src={logoSrc}
                alt={siteConfig.name}
                width={357}
                height={94}
                className="h-8 w-auto md:h-9"
              />
            </Link>
            {footer.description.trim() ? (
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
                {footer.description}
              </p>
            ) : null}
            {footer.getInTouch.trim() && siteConfig.email ? (
              <a
                href={getMailtoUrl({
                  subject: home.contact.emailSubject,
                  body: home.contact.messageIntro,
                })}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-white"
              >
                {footer.getInTouch}
                <IconArrowRight className="rtl-flip size-3.5" />
              </a>
            ) : null}
          </div>

          {localizedLinks.length > 0 && footer.explore.trim() ? (
            <nav className="lg:col-span-3" aria-label="Footer navigation">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                {footer.explore}
              </p>
              <ul className="mt-5 space-y-2.5">
                {localizedLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          {footer.contact.trim() ? (
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                {footer.contact}
              </p>
              <ul className="mt-5 space-y-2.5">
                {siteConfig.email ? (
                  <li>
                    <a
                      href={getMailtoUrl({
                        subject: home.contact.emailSubject,
                        body: home.contact.messageIntro,
                      })}
                      className={linkClass}
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                ) : null}
                {siteConfig.phone ? (
                  <li>
                    <a href={`tel:${siteConfig.phone}`} className={linkClass}>
                      {siteConfig.phoneDisplay || siteConfig.phone}
                    </a>
                  </li>
                ) : null}
                {location ? (
                  <li>
                    {siteConfig.googleMapsUrl ? (
                      <a
                        href={siteConfig.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {location}
                      </a>
                    ) : (
                      <span className={linkClass}>{location}</span>
                    )}
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName || siteConfig.name}
            {footer.rights ? `. ${footer.rights}` : ""}
          </p>
          {socialLinks.length > 0 ? (
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
