"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import type { LayoutDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { getSiteConfig } from "@/lib/site-config";

export function Header({
  locale,
  dictionary,
  logoSrc = "/brand/logo.svg",
}: {
  locale: Locale;
  dictionary: LayoutDictionary;
  logoSrc?: string;
}) {
  const siteConfig = getSiteConfig();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const localizedNav = dictionary.nav.items.map((item) => ({
    ...item,
    href: localizePath(item.href, locale),
  }));
  const hasNav = localizedNav.length > 0;
  const hasCta = dictionary.nav.cta.trim().length > 0;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-3 md:pt-5">
        <div
          className={cn(
            "site-header-bar relative flex min-w-0 items-center gap-2 px-3 md:gap-6 md:px-6",
            scrolled && "is-scrolled",
          )}
        >
          <Link
            href={localizePath("/", locale)}
            className="relative z-10 shrink-0 py-0.5"
            aria-label={`${siteConfig.name} home`}
          >
            <SiteImage
              brand
              src={logoSrc}
              alt={siteConfig.name}
              width={357}
              height={94}
              priority
              className="h-6 w-auto md:h-8"
            />
          </Link>

          {hasNav ? (
            <nav
              className="absolute inset-x-0 hidden items-center justify-center lg:flex"
              aria-label="Main"
            >
              <ul className="flex items-center gap-0.5">
                {localizedNav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn("site-header-link", active && "is-active")}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}

          <div className="relative z-10 ms-auto flex shrink-0 items-center gap-1.5 md:gap-3.5">
            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitcher activeLocale={locale} />
              {hasCta ? (
                <CtaLink href={localizePath("/contact", locale)} variant="primary" size="md">
                  {dictionary.nav.cta}
                </CtaLink>
              ) : null}
            </div>
            {hasNav || hasCta ? (
              <MobileNav locale={locale} dictionary={dictionary} logoSrc={logoSrc} />
            ) : null}
          </div>
        </div>
      </Container>
    </header>
  );
}
