"use client";

import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { CtaLink } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import type { LayoutDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMailtoUrl, getSiteConfig } from "@/lib/site-config";

const pillStyle: CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(12, 16, 28, 0.78) 0%, rgba(8, 12, 22, 0.7) 100%)",
  backdropFilter: "blur(24px) saturate(1.8)",
  WebkitBackdropFilter: "blur(24px) saturate(1.8)",
};

const linkClass =
  "rounded-full px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white";

export function Header({
  locale,
  dictionary,
  logoSrc = "/logo.png",
}: {
  locale: Locale;
  dictionary: LayoutDictionary;
  logoSrc?: string;
}) {
  const siteConfig = getSiteConfig();
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const localizedNav = dictionary.nav.items.map((item) => ({
    ...item,
    href: localizePath(item.href, locale),
  }));
  const hasNav = localizedNav.length > 0;
  const hasCta = dictionary.nav.cta.trim().length > 0;
  const showMobileNav = hasNav || hasCta;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;
    if (latest < 120) {
      setHidden(false);
      return;
    }
    setHidden(latest > previous && latest > 150);
  });

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <motion.div
        className="pointer-events-auto mx-auto max-w-6xl"
        style={pillStyle}
        initial={false}
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-4 rounded-pill border border-white/10 px-4 py-2.5 shadow-glass-dark md:px-5 md:py-3">
          <Link
            href={localizePath("/", locale)}
            className="shrink-0"
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
              className="h-8 w-auto md:h-9"
            />
          </Link>

          {hasNav ? (
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {localizedNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher activeLocale={locale} />
            {hasCta ? (
              <CtaLink
                href={getMailtoUrl({
                  subject: dictionary.home.contact.emailSubject,
                  body: dictionary.home.contact.messageIntro,
                })}
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                {dictionary.nav.cta}
              </CtaLink>
            ) : null}
            {showMobileNav ? (
              <MobileNav locale={locale} dictionary={dictionary} logoSrc={logoSrc} />
            ) : null}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
