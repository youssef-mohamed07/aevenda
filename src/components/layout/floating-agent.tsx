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
import Image from "next/image";
import { getUiLabels } from "@/lib/ui-labels";
import { getSiteConfig, getWhatsAppUrl } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type FloatingAgentProps = {
  locale: Locale;
  logoSrc?: string;
};

const FAB_LOGO_WORDMARK = "/brand/logo-wordmark.svg";

function resolveFabLogo(logoSrc: string) {
  if (logoSrc.endsWith("/brand/logo.svg") || logoSrc === "/brand/logo.svg") {
    return FAB_LOGO_WORDMARK;
  }
  return logoSrc;
}

export function FloatingAgent({ locale, logoSrc = "/brand/logo.svg" }: FloatingAgentProps) {
  const labels = getUiLabels(locale);
  const [open, setOpen] = useState(false);
  const siteConfig = getSiteConfig();
  const fabLogo = resolveFabLogo(logoSrc);

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
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-full end-0 z-10 mb-3 w-56 origin-bottom-end overflow-hidden rounded-2xl border border-border/80 bg-paper shadow-[0_20px_50px_rgba(10,10,10,0.16)]"
            >
              <div className="border-b border-border/70 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {labels.socialFabTitle}
                </p>
              </div>

              <ul className="p-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition hover:bg-canvas"
                    >
                      <span className="grid size-9 place-items-center rounded-full bg-accent/10 text-accent">
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
          whileTap={{ scale: 0.98 }}
          className={cn(
            "rounded-2xl bg-noir p-0.5 shadow-[0_12px_40px_rgba(10,10,10,0.28)] transition hover:shadow-[0_16px_48px_rgba(10,10,10,0.34)]",
            open && "p-1",
          )}
          aria-expanded={open}
          aria-label={labels.socialFabToggle}
        >
          <span
            className={cn(
              "flex items-center justify-center rounded-[14px] bg-white",
              open ? "size-11" : "px-5 py-3",
            )}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="grid place-items-center"
                >
                  <IconClose className="size-5 text-ink/70" />
                </motion.span>
              ) : (
                <motion.span
                  key="logo"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                >
                  <Image
                    src={fabLogo}
                    alt={siteConfig.name}
                    width={111}
                    height={38}
                    unoptimized
                    className="h-7 w-auto sm:h-8"
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.button>
      </div>
    </div>
  );
}
