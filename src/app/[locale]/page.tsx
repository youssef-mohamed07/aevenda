import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeLogos } from "@/components/sections/home-logos";
import { HomeStats } from "@/components/sections/home-stats";
import { HomeTrust } from "@/components/sections/home-trust";
import { HomeServices } from "@/components/sections/home-services";
import { HomeCaseStudies } from "@/components/sections/home-case-studies";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { getLegacyContent } from "@/content/legacy-site";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";
import { getSiteConfig } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();
  const config = getSiteConfig();
  const { home } = getLegacyContent(localeParam);

  return buildPageMetadata({
    path: "/",
    locale: localeParam,
    fallbackTitle: `${config.name} | ${home.hero.title}`,
    fallbackDescription: home.hero.subtitle,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return (
    <main className="site-main">
      <HomeHero locale={locale} />
      <HomeStats locale={locale} />
      <HomeTrust locale={locale} />
      <HomeLogos locale={locale} />
      <HomeServices locale={locale} />
      <HomeCaseStudies locale={locale} />
      <HomeTestimonials locale={locale} />
      <CtaBand locale={locale} />
    </main>
  );
}
