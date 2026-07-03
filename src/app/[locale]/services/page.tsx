import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesChapterNav } from "@/components/sections/services-chapter-nav";
import { ServicesChapters } from "@/components/sections/services-chapters";
import { ServicesClosing } from "@/components/sections/services-closing";
import { ServicesIntro } from "@/components/sections/services-intro";
import { ServicesProof } from "@/components/sections/services-proof";
import { ServicesQuote } from "@/components/sections/services-quote";
import { ServicesSpotlight } from "@/components/sections/services-spotlight";
import { ServicesTimeline } from "@/components/sections/services-timeline";
import { getLegacyContent } from "@/content/legacy-site";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();
  const { servicesOverview } = getLegacyContent(localeParam);

  return buildPageMetadata({
    path: "/services",
    locale: localeParam,
    fallbackTitle: servicesOverview.title,
    fallbackDescription: servicesOverview.intro,
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const { services, servicesOverview } = getLegacyContent(locale);

  const navItems = services.map((service, index) => ({
    slug: service.slug,
    label: servicesOverview.categories[index] ?? service.title,
  }));

  return (
    <main className="site-main">
      <ServicesIntro locale={locale} />
      <ServicesChapterNav locale={locale} items={navItems} />
      <ServicesChapters locale={locale} />
      <ServicesTimeline locale={locale} />
      <ServicesProof locale={locale} />
      <ServicesSpotlight locale={locale} />
      <ServicesQuote locale={locale} />
      <ServicesClosing locale={locale} />
    </main>
  );
}
