"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CtaLink } from "@/components/ui/button";
import { IconClose, IconMenu, IconWhatsApp } from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import type { LayoutDictionary } from "@/content/dictionaries";
import { localizePath, switchLocalePath, type Locale } from "@/lib/i18n";
import { getMailtoUrl, getSiteConfig, getWhatsAppUrl } from "@/lib/site-config";
import { getUiLabels } from "@/lib/ui-labels";
import { cn } from "@/lib/utils";

export function MobileNav({
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
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const localizedNav = dictionary.nav.items.map((item) => ({
    ...item,
    href: localizePath(item.href, locale),
  }));

  const uiLabels = getUiLabels(locale);
  const labels = {
    language: locale === "ar" ? "اللغة" : "Language",
    contact: locale === "ar" ? "تواصل سريع" : "Quick contact",
    close: locale === "ar" ? "إغلاق" : "Close menu",
    open: locale === "ar" ? "فتح القائمة" : "Open menu",
    english: "English",
    arabic: "العربية",
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.insetInline = "0";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.insetInline = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const panel =
    mounted && open
      ? createPortal(
          <div
            id="mobile-nav-overlay"
            className="mobile-nav-overlay fixed inset-0 z-[9999] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={labels.open}
          >
            <div className="flex h-full flex-col overflow-hidden bg-canvas">
              <div className="flex shrink-0 items-center justify-between border-b border-border/60 px-5 py-4">
                <SiteImage
                  brand
                  src={logoSrc}
                  alt={siteConfig.name}
                  width={357}
                  height={94}
                  className="h-7 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-full border border-border/70 bg-paper text-ink/70 transition hover:text-ink"
                  aria-label={labels.close}
                >
                  <IconClose className="size-5" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <nav className="px-3 py-4" aria-label="Mobile">
                  <ul className="flex flex-col gap-0.5">
                    {localizedNav.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "display block rounded-xl px-4 py-3 text-[1.25rem] leading-tight transition",
                              active
                                ? "bg-accent/10 text-ink"
                                : "text-ink/55 active:bg-canvas",
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="space-y-5 border-t border-border/60 px-5 py-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      {labels.language}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <LocaleOption
                        href={switchLocalePath(pathname, "en")}
                        active={locale === "en"}
                        flag="/lang_switch/gb.svg"
                        label={labels.english}
                        onSelect={() => setOpen(false)}
                      />
                      <LocaleOption
                        href={switchLocalePath(pathname, "ar")}
                        active={locale === "ar"}
                        flag="/lang_switch/sa.svg"
                        label={labels.arabic}
                        onSelect={() => setOpen(false)}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      {labels.contact}
                    </p>
                    <div className="mt-3 space-y-2">
                      {dictionary.nav.cta.trim() ? (
                        <CtaLink
                          href={localizePath("/contact", locale)}
                          variant="primary"
                          size="md"
                          className="w-full justify-center"
                          onClick={() => setOpen(false)}
                        >
                          {dictionary.nav.cta}
                        </CtaLink>
                      ) : null}
                      <a
                        href={getWhatsAppUrl()}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-border/80 bg-paper px-5 py-2.5 text-sm font-medium text-ink"
                      >
                        <IconWhatsApp className="size-4" />
                        {uiLabels.whatsapp}
                      </a>
                      <a
                        href={getMailtoUrl({ subject: siteConfig.name })}
                        className="block pt-1 text-center text-sm font-medium text-ink-muted"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={cn(
          "relative z-[1] grid size-9 shrink-0 place-items-center rounded-full transition lg:hidden",
          open
            ? "bg-ink text-white"
            : "border border-border/70 bg-paper text-ink/70",
        )}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-overlay"
        aria-label={open ? labels.close : labels.open}
      >
        {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
      </button>
      {panel}
    </>
  );
}

function LocaleOption({
  href,
  active,
  flag,
  label,
  onSelect,
}: {
  href: string;
  active: boolean;
  flag: string;
  label: string;
  onSelect: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onSelect}
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition",
        active
          ? "border-accent bg-accent text-white"
          : "border-border/80 bg-paper text-ink/70",
      )}
      aria-current={active ? "page" : undefined}
      lang={label === "English" ? "en" : "ar"}
    >
      <SiteImage
        brand
        src={flag}
        alt=""
        width={640}
        height={480}
        className="h-3.5 w-5 rounded-[2px] object-cover"
      />
      {label}
    </a>
  );
}
