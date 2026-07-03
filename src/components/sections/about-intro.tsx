import { Container } from "@/components/ui/container";
import { PageIntroHero } from "@/components/ui/page-intro-hero";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent, legacySite } from "@/content/legacy-site";
import { getUiLabels } from "@/lib/ui-labels";
import type { Locale } from "@/lib/i18n";

export function AboutIntro({ locale }: { locale: Locale }) {
  const { about, aboutPage } = getLegacyContent(locale);
  const labels = getUiLabels(locale);

  return (
    <PageIntroHero size="default">
      <Container className="relative z-[1] mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {labels.founded} {legacySite.company.founded}
          </p>
          <h1 className="display mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[0.98] text-ink">
            {about.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {about.intro}
          </p>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
            {aboutPage.scrollHint}
          </p>
        </Reveal>
      </Container>
    </PageIntroHero>
  );
}
