import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutClosing } from "@/components/sections/about-closing";
import { AboutIntro } from "@/components/sections/about-intro";
import { AboutPillars } from "@/components/sections/about-pillars";
import { AboutPortrait } from "@/components/sections/about-portrait";
import { AboutPresence } from "@/components/sections/about-presence";
import { AboutValues } from "@/components/sections/about-values";
import { getLegacyContent } from "@/content/legacy-site";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();
  const { about } = getLegacyContent(localeParam);

  return buildPageMetadata({
    path: "/about",
    locale: localeParam,
    fallbackTitle: about.title,
    fallbackDescription: about.intro,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return (
    <main className="site-main">
      <AboutIntro locale={locale} />
      <AboutPortrait locale={locale} />
      <AboutPillars locale={locale} />
      <AboutValues locale={locale} />
      <AboutPresence locale={locale} />
      <AboutClosing locale={locale} />
    </main>
  );
}
