import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconArrowRight } from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import type { LayoutDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMailtoUrl, getSiteConfig } from "@/lib/site-config";

const linkClass = "text-sm text-zinc-400 transition-colors hover:text-white sm:text-[0.9375rem]";

export function Footer({
  locale,
  dictionary,
  logoSrc = "/logo.png",
}: {
  locale: Locale;
  dictionary: LayoutDictionary;
  logoSrc?: string;
}) {
  const year = new Date().getFullYear();
  const { footer, home } = dictionary;
  const siteConfig = getSiteConfig();
  const footerLinksSource =
    siteConfig.footerExploreLinks && siteConfig.footerExploreLinks.length > 0
      ? siteConfig.footerExploreLinks
      : dictionary.nav.items;
  const localizedLinks = footerLinksSource.map((item) => ({
    label: item.label,
    href: localizePath(item.href, locale),
  }));
  const location = [siteConfig.address.city, siteConfig.address.countryName]
    .filter(Boolean)
    .join(", ");
  const mapsUrl = siteConfig.googleMapsUrl;
  const socialLinks = [
    { href: siteConfig.social.instagram, label: footer.social.instagram },
    { href: siteConfig.social.linkedin, label: footer.social.linkedin },
    { href: siteConfig.social.x, label: footer.social.x },
  ].filter((item) => item.href && item.label);

  const hasDescription = footer.description.trim().length > 0;
  const hasGetInTouch = footer.getInTouch.trim().length > 0 && Boolean(siteConfig.email);
  const hasLinks = localizedLinks.length > 0 && footer.explore.trim().length > 0;
  const hasContact =
    footer.contact.trim().length > 0 &&
    Boolean(siteConfig.email || siteConfig.phone || location);
  const hasSocial = socialLinks.length > 0;
  const hasBody = hasDescription || hasGetInTouch || hasLinks || hasContact;

  return (
    <footer className="px-4 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16">
      <Container>
        <div className="glass-shell relative overflow-hidden rounded-panel border border-white/15 text-zinc-100 shadow-[0_8px_32px_rgba(0,0,0,0.25),0_0_40px_-20px_rgba(80,160,230,0.4)] ring-1 ring-black/5">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(80,160,230,0.14),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(42,118,166,0.12),transparent_38%)]"
            aria-hidden
          />

          {hasBody ? (
            <div className="relative grid grid-cols-1 gap-12 p-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12 lg:grid-cols-3 lg:gap-16 lg:p-14">
              {hasDescription || hasGetInTouch ? (
                <div className="max-w-md sm:col-span-2 lg:col-span-1">
                  <Link
                    href={localizePath("/", locale)}
                    className="inline-flex"
                    aria-label={`${siteConfig.name} home`}
                  >
                    <SiteImage
                      brand
                      src={logoSrc}
                      alt={siteConfig.name}
                      width={357}
                      height={94}
                      placeholderWidth={357}
                      placeholderHeight={94}
                      className="h-9 w-auto md:h-10"
                    />
                  </Link>
                  {hasDescription ? (
                    <p className="mt-6 text-sm leading-[1.8] text-zinc-400 sm:text-[0.9375rem]">
                      {footer.description}
                    </p>
                  ) : null}
                  {hasGetInTouch ? (
                    <a
                      href={getMailtoUrl({
                        subject: home.contact.emailSubject,
                        body: home.contact.messageIntro,
                      })}
                      className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-3 ps-6 pe-2.5 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.07] sm:text-[0.9375rem]"
                    >
                      {footer.getInTouch}
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-gradient shadow-lg shadow-accent/20 ring-1 ring-white/10">
                        <IconArrowRight className="rtl-flip size-4" />
                      </span>
                    </a>
                  ) : null}
                </div>
              ) : null}

              {hasLinks ? (
                <nav aria-label="Footer navigation">
                  <Eyebrow variant="minimal" theme="dark">
                    {footer.explore}
                  </Eyebrow>
                  <ul className="mt-6 space-y-3.5">
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

              {hasContact ? (
                <div>
                  <Eyebrow variant="minimal" theme="dark">
                    {footer.contact}
                  </Eyebrow>
                  <ul className="mt-6 space-y-3.5">
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
                        {mapsUrl ? (
                          <a
                            href={mapsUrl}
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
          ) : null}

          <div
            className={`relative flex flex-col gap-5 border-t border-white/10 px-10 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-[0.8125rem] lg:px-14 lg:py-7 ${hasBody ? "" : "border-t-0"}`}
          >
            <p>
              &copy; {year} {siteConfig.legalName || siteConfig.name}
              {footer.rights ? `. ${footer.rights}` : ""}
            </p>
            {hasSocial ? (
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
        </div>
      </Container>
    </footer>
  );
}
