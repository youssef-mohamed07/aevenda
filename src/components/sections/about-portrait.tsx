import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent, legacySite } from "@/content/legacy-site";
import { getCaseStudyImage } from "@/lib/legacy-media";
import type { Locale } from "@/lib/i18n";

export function AboutPortrait({ locale }: { locale: Locale }) {
  const { about, aboutPage, caseStudies, home } = getLegacyContent(locale);
  const image = caseStudies[2] ? getCaseStudyImage(caseStudies[2].slug) : undefined;

  return (
    <section className="border-t border-border/60 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {image ? (
            <Reveal className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-canvas md:rounded-[2rem]">
                <SiteImage src={image} alt={about.title} fill className="object-cover" />
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={0.06} className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {legacySite.company.tagline}
            </p>
            <p className="display mt-6 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] text-ink">
              {aboutPage.portrait.headline}
            </p>
            <span className="accent-dash mt-8" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              {home.trust.subtitle}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
