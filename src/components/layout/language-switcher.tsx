"use client";

import { useSyncExternalStore } from "react";
import { SiteImage } from "@/components/ui/site-image";
import { switchLocalePath, type Locale } from "@/lib/i18n";

/**
 * Locale switcher styled to match the floating glass nav. Uses real SVG flag
 * assets (640x480, rendered at 14x10.5) so Windows never falls back to text.
 */
export function LanguageSwitcher({ activeLocale }: { activeLocale: Locale }) {
  const pathname = useBrowserPathname(activeLocale);

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 p-0.5 leading-none">
      <FlagLink
        locale="en"
        activeLocale={activeLocale}
        href={switchLocalePath(pathname, "en")}
        src="/lang_switch/gb.svg"
        label="English"
      />
      <FlagLink
        locale="ar"
        activeLocale={activeLocale}
        href={switchLocalePath(pathname, "ar")}
        src="/lang_switch/sa.svg"
        label="العربية"
      />
    </div>
  );
}

function useBrowserPathname(activeLocale: Locale) {
  return useSyncExternalStore(
    () => () => undefined,
    () => `${window.location.pathname}${window.location.hash}` || `/${activeLocale}`,
    () => `/${activeLocale}`,
  );
}

function FlagLink({
  locale,
  activeLocale,
  href,
  src,
  label,
}: {
  locale: Locale;
  activeLocale: Locale;
  href: string;
  src: string;
  label: string;
}) {
  const active = locale === activeLocale;

  return (
    <a
      href={href}
      className={[
        "grid h-6 w-7 place-items-center rounded-full transition",
        active ? "bg-white/15" : "opacity-65 hover:bg-white/10 hover:opacity-100",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      aria-label={label}
      title={label}
    >
      <SiteImage
        brand
        src={src}
        alt=""
        width={640}
        height={480}
        placeholderWidth={640}
        placeholderHeight={480}
        className="h-[10.5px] w-3.5 rounded-[1.5px] object-cover"
      />
    </a>
  );
}
