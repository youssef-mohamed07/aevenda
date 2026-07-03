import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { localizePath, type Locale } from "@/lib/i18n";
import { getUiLabels } from "@/lib/ui-labels";

export function CaseStudyClosing({ locale }: { locale: Locale }) {
  const { cta } = getLegacyContent(locale);
  const labels = getUiLabels(locale);

  return (
    <section className="border-t border-border/60 pb-20 pt-14 md:pb-28 md:pt-16">
      <Container>
        <Reveal>
          <CtaLink href={localizePath("/case-studies", locale)} variant="ghost" className="mb-12">
            ← {labels.backToCaseStudies}
          </CtaLink>

          <div className="max-w-3xl">
            <h2 className="display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.08] text-ink">
              {cta.title}
            </h2>
            <div className="mt-8">
              <CtaLink href={localizePath("/contact", locale)} variant="primary" size="lg" withArrow>
                {cta.button}
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
