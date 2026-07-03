"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconClose,
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconWhatsApp,
  IconX,
} from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import { getUiLabels } from "@/lib/ui-labels";
import { getSiteConfig, getWhatsAppUrl } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type FloatingAgentProps = {
  locale: Locale;
  logoSrc?: string;
};

export function FloatingAgent({ locale, logoSrc = "/brand/logo.svg" }: FloatingAgentProps) {
  const labels = getUiLabels(locale);
  const [open, setOpen] = useState(false);
  const siteConfig = getSiteConfig();

  const socialLinks = useMemo(
    () =>
      [
        { href: siteConfig.social.facebook, label: "Facebook", icon: IconFacebook },
        { href: siteConfig.social.instagram, label: "Instagram", icon: IconInstagram },
        { href: siteConfig.social.linkedin, label: "LinkedIn", icon: IconLinkedIn },
        { href: siteConfig.social.x, label: "X", icon: IconX },
        {
          href: getWhatsAppUrl(siteConfig.whatsappMessage),
          label: labels.whatsapp,
          icon: IconWhatsApp,
        },
      ].filter((item) => item.href),
    [labels.whatsapp, siteConfig.social, siteConfig.whatsappMessage],
  );

  return (
    <div className="pointer-events-none fixed bottom-4 end-4 z-40 sm:bottom-6 sm:end-6">
      <div className="pointer-events-auto relative">
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-full end-0 z-10 mb-3 w-56 origin-bottom-end overflow-hidden rounded-2xl border border-border/70 bg-paper shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
                  {labels.socialFabTitle}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid size-8 place-items-center rounded-full text-ink/50 transition hover:bg-canvas hover:text-ink"
                  aria-label={labels.close}
                >
                  <IconClose className="size-4" />
                </button>
              </div>

              <ul className="space-y-1 p-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition hover:bg-canvas"
                    >
                      <span className="grid size-9 place-items-center rounded-full bg-canvas text-accent">
                        <link.icon className="size-4" />
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.96 }}
          className={cn(
            "rounded-full bg-white p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-border/60 transition",
            open && "ring-accent/30",
          )}
          aria-expanded={open}
          aria-label={labels.socialFabToggle}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid size-11 place-items-center"
              >
                <IconClose className="size-5 text-ink/70" />
              </motion.span>
            ) : (
              <motion.span
                key="logo"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid size-11 place-items-center rounded-full bg-canvas px-2"
              >
                <SiteImage
                  brand
                  src={logoSrc}
                  alt={siteConfig.name}
                  width={357}
                  height={94}
                  className="h-6 w-auto"
                />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
