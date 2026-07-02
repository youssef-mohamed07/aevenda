"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CtaLink } from "@/components/ui/button";
import { IconClose, IconMenu } from "@/components/ui/icons";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SiteImage } from "@/components/ui/site-image";
import type { LayoutDictionary } from "@/content/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";
import { getMailtoUrl, getSiteConfig } from "@/lib/site-config";

export function MobileNav({
  locale,
  dictionary,
  logoSrc = "/logo.png",
}: {
  locale: Locale;
  dictionary: LayoutDictionary;
  logoSrc?: string;
}) {
  const siteConfig = getSiteConfig();
  const [open, setOpen] = useState(false);
  const localizedNav = dictionary.nav.items.map((item) => ({
    ...item,
    href: localizePath(item.href, locale),
  }));
  const hasNav = localizedNav.length > 0;
  const hasCta = dictionary.nav.cta.trim().length > 0;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const overlay =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] bg-[#05070d]/95 backdrop-blur-xl lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex h-full flex-col px-6 pb-8 pt-24">
                  <div className="flex items-center justify-between">
                    <SiteImage
                      brand
                      src={logoSrc}
                      alt={siteConfig.name}
                      width={357}
                      height={94}
                      placeholderWidth={357}
                      placeholderHeight={94}
                      className="h-8 w-auto"
                    />
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="grid size-10 place-items-center rounded-full border border-white/15 text-white"
                      aria-label="Close menu"
                    >
                      <IconClose className="size-5" />
                    </button>
                  </div>

                  {hasNav ? (
                    <nav className="mt-12 flex flex-col gap-2" aria-label="Mobile">
                      {localizedNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="rounded-card border border-white/10 px-5 py-4 text-lg font-medium text-white transition hover:bg-white/5"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  ) : null}

                  <div className="mt-auto flex flex-col gap-4">
                    <LanguageSwitcher activeLocale={locale} />
                    {hasCta ? (
                      <CtaLink
                        href={getMailtoUrl({
                          subject: dictionary.home.contact.emailSubject,
                          body: dictionary.home.contact.messageIntro,
                        })}
                        variant="primary"
                        size="lg"
                        className="w-full"
                        onClick={() => setOpen(false)}
                      >
                        {dictionary.nav.cta}
                      </CtaLink>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="grid size-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Open menu"
      >
        <IconMenu className="size-5" />
      </button>
      {overlay}
    </>
  );
}
