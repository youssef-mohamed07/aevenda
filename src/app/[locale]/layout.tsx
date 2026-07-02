import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { LocaleDocumentSync } from "@/components/i18n/locale-document-sync";
import { ensureSiteConfig } from "@/sanity/load-site-config";
import { getDirection, isLocale, locales } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  themeColor: "#0a0e14",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  await ensureSiteConfig();
  return buildMetadata({ locale });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const dir = getDirection(localeParam);

  return (
    <div
      className={cn(localeParam === "ar" && "lang-ar", "min-h-screen bg-[#0a0e14] text-white")}
      lang={localeParam}
      dir={dir}
    >
      <LocaleDocumentSync locale={localeParam} />
      {children}
    </div>
  );
}
