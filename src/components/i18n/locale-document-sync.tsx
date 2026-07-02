"use client";

import { useEffect } from "react";
import { getDirection, type Locale } from "@/lib/i18n";

/**
 * Keeps document-level locale attributes correct after client transitions or
 * browser restoration. The server layout sets these initially; this is a small
 * safety net for the App Router shell.
 */
export function LocaleDocumentSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = getDirection(locale);
    root.classList.toggle("lang-ar", locale === "ar");
  }, [locale]);

  return null;
}
