"use client";

import { Carousel } from "@/components/ui/carousel";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { localizePath, type Locale } from "@/lib/i18n";
import { getCaseStudyImage } from "@/lib/legacy-media";
import { getUiLabels } from "@/lib/ui-labels";
import type { LegacyCaseStudy } from "@/content/legacy/types";

type CaseStudiesCarouselProps = {
  studies: LegacyCaseStudy[];
  locale: Locale;
};

export function CaseStudiesCarousel({ studies, locale }: CaseStudiesCarouselProps) {
  const labels = getUiLabels(locale);

  const slides = studies.map((study) => (
    <CaseStudyCard
      key={study.id}
      href={localizePath(`/case-studies/${study.slug}`, locale)}
      title={study.title}
      category={study.category}
      image={getCaseStudyImage(study.slug)}
      label={labels.viewCaseStudy}
      featured
    />
  ));

  return <Carousel items={slides} autoPlayMs={6500} />;
}
