import type { Locale } from "@/lib/i18n";

export function formatBlogDate(date: string, locale: Locale) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(
    locale === "ar" ? "ar-SA" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );
}
