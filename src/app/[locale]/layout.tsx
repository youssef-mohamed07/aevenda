import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { SiteSplash } from "@/components/layout/site-splash";
import { LocaleDocumentSync } from "@/components/i18n/locale-document-sync";
import { FloatingAgent } from "@/components/layout/floating-agent";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopLoadingBar } from "@/components/navigation/top-loading-bar";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary, pickLayoutDictionary } from "@/content/dictionaries";
import { ensureSiteConfig } from "@/sanity/load-site-config";
import { getDirection, isLocale, locales } from "@/lib/i18n";
import { getSiteLogo } from "@/lib/site-assets";
import { buildMetadata, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  themeColor: "#fffcf7",
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

  await ensureSiteConfig();
  const dictionary = await getDictionary(localeParam);
  const layoutDictionary = pickLayoutDictionary(dictionary);
  const logoSrc = getSiteLogo();
  const dir = getDirection(localeParam);

  return (
    <div
      className={cn(localeParam === "ar" && "lang-ar", "site-shell flex min-h-screen flex-col text-ink")}
      lang={localeParam}
      dir={dir}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var e=document.documentElement;e.lang="${localeParam}";e.dir="${dir}";e.classList.toggle("lang-ar",${localeParam === "ar"});})();`,
        }}
      />
      <LocaleDocumentSync locale={localeParam} />
      <SiteSplash locale={localeParam} />
      <TopLoadingBar />
      <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
      <Header locale={localeParam} dictionary={layoutDictionary} logoSrc={logoSrc} />
      {children}
      <Footer locale={localeParam} dictionary={layoutDictionary} logoSrc={logoSrc} />
      <FloatingAgent locale={localeParam} logoSrc={logoSrc} />
    </div>
  );
}
