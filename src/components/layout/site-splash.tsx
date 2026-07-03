"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { legacyAssets } from "@/content/legacy-assets";
import { getUiLabels } from "@/lib/ui-labels";
import type { Locale } from "@/lib/i18n";

const STORAGE_KEY = "aevenda-splash-seen";

function isHomePath(pathname: string) {
  return pathname === "/en" || pathname === "/ar" || pathname === "/";
}

export function SiteSplash({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const labels = getUiLabels(locale);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
      document.documentElement.style.overflow = "";
    }
    setExiting(true);
    window.setTimeout(() => setVisible(false), 480);
  }, []);

  useEffect(() => {
    if (!isHomePath(pathname)) return;

    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    setVisible(true);
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [pathname]);

  useEffect(() => {
    if (!visible || exiting) return;

    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => dismiss());
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("canplay", play, { once: true });
      return () => video.removeEventListener("canplay", play);
    }
  }, [visible, exiting, dismiss]);

  if (!visible) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={labels.splashSkip}
      className="fixed inset-0 z-[100] bg-noir"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        onEnded={dismiss}
      >
        <source
          src={legacyAssets.splash.vertical}
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source
          src={legacyAssets.splash.landscape}
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <source src={legacyAssets.splash.landscape} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/35 via-transparent to-noir/15" />

      <button
        type="button"
        onClick={dismiss}
        className="absolute end-4 top-4 z-10 rounded-full border border-white/25 bg-noir/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm transition hover:border-white/45 hover:bg-noir/50 sm:end-6 sm:top-6"
      >
        {labels.splashSkip}
      </button>
    </motion.div>
  );
}
