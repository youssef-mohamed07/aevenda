import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function ServicesTimeline({ locale }: { locale: Locale }) {
  const { servicesPage } = getLegacyContent(locale);
  const { process } = servicesPage;

  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {process.eyebrow}
                </p>
                <h2 className="display mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] text-ink">
                  {process.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">{process.intro}</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ol className="space-y-0">
              {process.steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <li className="flex gap-5 border-t border-border/60 py-8 first:border-t-0 first:pt-0 md:gap-6 md:py-10">
                    <span className="display w-10 shrink-0 text-[1.75rem] leading-none text-accent/35 md:w-12 md:text-[2rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
