import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudiesClosing } from "@/components/sections/case-studies-closing";
import { CaseStudiesIntro } from "@/components/sections/case-studies-intro";
import { CaseStudiesList } from "@/components/sections/case-studies-list";
import { getLegacyContent } from "@/content/legacy-site";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();
  const { home } = getLegacyContent(localeParam);

  return buildPageMetadata({
    path: "/case-studies",
    locale: localeParam,
    fallbackTitle: home.caseStudies.title,
    fallbackDescription: home.caseStudies.subtitle,
  });
}

export default async function CaseStudiesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return (
    <main className="site-main">
      <CaseStudiesIntro locale={locale} />
      <CaseStudiesList locale={locale} />
      <CaseStudiesClosing locale={locale} />
    </main>
  );
}
