import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function AboutPillars({ locale }: { locale: Locale }) {
  const { about } = getLegacyContent(locale);
  const pillars = [about.mission, about.vision];

  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <article className="border-t border-border/60 pt-8 md:pt-10">
                <span className="display text-[2.5rem] leading-none text-accent/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-xl font-semibold text-ink md:text-2xl">{pillar.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
