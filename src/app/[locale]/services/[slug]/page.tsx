import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CtaLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { isLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";
import { getUiLabels } from "@/lib/ui-labels";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getLegacyContent(locale).services.map((service) => ({ locale, slug: service.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();

  const service = getLegacyContent(localeParam).services.find((item) => item.slug === slug);
  if (!service) return {};

  return buildPageMetadata({
    path: `/services/${slug}`,
    locale: localeParam,
    fallbackTitle: service.title,
    fallbackDescription: service.intro,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const service = getLegacyContent(locale).services.find((item) => item.slug === slug);
  if (!service) notFound();

  const labels = getUiLabels(locale);

  return (
    <main className="site-main">
      <PageHero title={service.title} subtitle={service.intro} />
      {"sections" in service && service.sections?.length ? (
        <Section>
          <Container>
            <div className="mx-auto max-w-3xl divide-y divide-border">
              {service.sections.map((block, index) => (
                <Reveal key={block.title} delay={index * 0.06}>
                  <article className="py-8 first:pt-0 last:pb-0 md:py-10">
                    <p className="text-sm font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 text-xl font-semibold text-ink md:text-2xl">{block.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
                      {block.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section rhythm="compact">
        <Container>
          <CtaLink href={localizePath("/services", locale)} variant="ghost">
            ← {labels.backToServices}
          </CtaLink>
        </Container>
      </Section>

      <CtaBand locale={locale} />
    </main>
  );
}
