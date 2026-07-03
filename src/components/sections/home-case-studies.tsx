import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CtaLink } from "@/components/ui/button";
import { SectionHeader, homepageSectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudiesCarousel } from "@/components/sections/case-studies-carousel";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { getLegacyContent } from "@/content/legacy-site";
import { getCaseStudyImage } from "@/lib/legacy-media";
import { localizePath, type Locale } from "@/lib/i18n";
import { getUiLabels } from "@/lib/ui-labels";

export function HomeCaseStudies({ locale }: { locale: Locale }) {
  const content = getLegacyContent(locale);
  const { home, caseStudies } = content;
  const labels = getUiLabels(locale);
  const [featured, ...rest] = caseStudies;

  return (
    <Section id="case-studies">
      <Container>
        <SectionHeader
          {...homepageSectionHeader}
          eyebrow={locale === "ar" ? "أعمالنا" : "Portfolio"}
          headline={home.caseStudies.title}
          subtitle={home.caseStudies.subtitle}
        />

        <div className="hidden gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2">
          {featured ? (
            <Reveal className="lg:row-span-2">
              <CaseStudyCard
                href={localizePath(`/case-studies/${featured.slug}`, locale)}
                title={featured.title}
                category={featured.category}
                image={getCaseStudyImage(featured.slug)}
                label={labels.viewCaseStudy}
                featured
              />
            </Reveal>
          ) : null}

          {rest.map((study, index) => (
            <Reveal key={study.id} delay={0.06 + index * 0.05}>
              <CaseStudyCard
                href={localizePath(`/case-studies/${study.slug}`, locale)}
                title={study.title}
                category={study.category}
                image={getCaseStudyImage(study.slug)}
                label={labels.viewCaseStudy}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:hidden">
          <CaseStudiesCarousel studies={caseStudies} locale={locale} />
        </Reveal>

        <div className="mt-14 text-center">
          <CtaLink href={localizePath("/case-studies", locale)} variant="outline" withArrow>
            {home.caseStudies.viewAll}
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}

export { CaseStudyCard } from "@/components/sections/case-study-card";
