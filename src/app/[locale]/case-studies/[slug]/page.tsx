import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyBody } from "@/components/sections/case-study-body";
import { CaseStudyClosing } from "@/components/sections/case-study-closing";
import { CaseStudyHero } from "@/components/sections/case-study-hero";
import { Container } from "@/components/ui/container";
import { StatsGridCase } from "@/components/ui/stats-grid";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { getCaseStudyImage } from "@/lib/legacy-media";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getLegacyContent(locale).caseStudies.map((study) => ({ locale, slug: study.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();

  const study = getLegacyContent(localeParam).caseStudies.find((item) => item.slug === slug);
  if (!study) return {};

  return buildPageMetadata({
    path: `/case-studies/${slug}`,
    locale: localeParam,
    fallbackTitle: study.title,
    fallbackDescription: study.about ?? study.title,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const study = getLegacyContent(locale).caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const image = getCaseStudyImage(study.slug);

  return (
    <main className="site-main">
      <CaseStudyHero study={study} image={image} />

      {"stats" in study && study.stats?.length ? (
        <section className="border-t border-border/60 py-12 md:py-14">
          <Container>
            <Reveal>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border/60">
                <StatsGridCase stats={study.stats} locale={locale} />
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <CaseStudyBody study={study} locale={locale} />
      <CaseStudyClosing locale={locale} />
    </main>
  );
}
