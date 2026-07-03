import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { getUiLabels } from "@/lib/ui-labels";
import type { Locale } from "@/lib/i18n";

export function ServicesQuote({ locale }: { locale: Locale }) {
  const { servicesPage, testimonials } = getLegacyContent(locale);
  const labels = getUiLabels(locale);
  const quote = testimonials[0];
  if (!quote) return null;

  return (
    <section className="border-t border-border/60 py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {servicesPage.quote.eyebrow}
              </p>
              <span className="accent-dash mt-6" aria-hidden />
              <p className="mt-6 text-sm font-semibold text-ink">{quote.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{labels.testimonialClient}</p>
            </div>

            <blockquote className="display lg:col-span-8 text-[clamp(1.375rem,2.8vw,2rem)] leading-[1.35] text-ink">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
