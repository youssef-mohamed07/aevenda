import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { PageIntroHero } from "@/components/ui/page-intro-hero";
import { Reveal } from "@/components/ui/reveal";
import type { LegacyCaseStudy } from "@/content/legacy/types";

export function CaseStudyHero({
  study,
  image,
}: {
  study: LegacyCaseStudy;
  image?: string;
}) {
  return (
    <>
      <PageIntroHero size="compact">
        <Container className="relative z-[1] max-w-4xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {study.category}
            </p>
            <h1 className="display mt-4 text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.02] text-ink">
              {study.title}
            </h1>
          </Reveal>
        </Container>
      </PageIntroHero>

      {image ? (
        <div className="relative -mt-2 pb-10 md:-mt-4 md:pb-14">
          <Container>
            <Reveal delay={0.06}>
              <div className="relative aspect-[21/10] overflow-hidden rounded-[1.5rem] bg-canvas md:rounded-[1.75rem]">
                <SiteImage src={image} alt={study.title} fill priority className="object-cover" />
              </div>
            </Reveal>
          </Container>
        </div>
      ) : null}
    </>
  );
}
