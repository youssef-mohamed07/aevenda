"use client";

import { useSyncExternalStore } from "react";
import { SiteImage } from "@/components/ui/site-image";
import { switchLocalePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  activeLocale,
  compact = false,
}: {
  activeLocale: Locale;
  compact?: boolean;
}) {
  const pathname = useBrowserPathname(activeLocale);

  return (
    <div className={cn("flex items-center", compact ? "gap-0.5" : "gap-2")}>
      <FlagLink
        locale="en"
        activeLocale={activeLocale}
        href={switchLocalePath(pathname, "en")}
        src="/lang_switch/gb.svg"
        label="English"
        compact={compact}
      />
      <FlagLink
        locale="ar"
        activeLocale={activeLocale}
        href={switchLocalePath(pathname, "ar")}
        src="/lang_switch/sa.svg"
        label="العربية"
        compact={compact}
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
  compact,
}: {
  locale: Locale;
  activeLocale: Locale;
  href: string;
  src: string;
  label: string;
  compact?: boolean;
}) {
  const active = locale === activeLocale;

  return (
    <a
      href={href}
      className={cn(
        "grid place-items-center rounded-full transition-all duration-200",
        compact ? "size-8" : "h-8 w-9",
        active ? "bg-white/70 opacity-100 ring-1 ring-ink/12" : "opacity-50 hover:opacity-80",
      )}
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
        className={cn(
          "rounded-[2px] object-cover",
          compact ? "h-3 w-[0.875rem]" : "h-3.5 w-[1.125rem]",
        )}
      />
    </a>
  );
}
