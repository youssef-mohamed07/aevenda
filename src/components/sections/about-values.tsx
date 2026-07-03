import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ValuesScrollList } from "@/components/sections/values-scroll-list";
import { getLegacyContent } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function AboutValues({ locale }: { locale: Locale }) {
  const { about, aboutPage } = getLegacyContent(locale);

  return (
    <Section className="border-t border-border/60">
      <Container>
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {about.values.title}
          </p>
          <h2 className="display mt-4 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-ink">
            {aboutPage.valuesHeadline}
          </h2>
        </Reveal>

        <ValuesScrollList items={about.values.items} />
      </Container>
    </Section>
  );
}
