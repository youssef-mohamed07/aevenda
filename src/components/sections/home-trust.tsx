import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { getCaseStudyImage } from "@/lib/legacy-media";
import type { Locale } from "@/lib/i18n";

export function HomeTrust({ locale }: { locale: Locale }) {
  const { home, caseStudies } = getLegacyContent(locale);
  const image = caseStudies[1] ? getCaseStudyImage(caseStudies[1].slug) : undefined;

  return (
    <Section id="trust">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {image ? (
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-canvas">
                <SiteImage src={image} alt="" fill className="object-cover" />
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={0.08}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {locale === "ar" ? "لماذا نحن" : "Why Aevenda"}
            </p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-ink">
              {home.trust.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
              {home.trust.subtitle}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
