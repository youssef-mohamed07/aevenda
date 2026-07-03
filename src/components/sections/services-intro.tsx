import { Container } from "@/components/ui/container";
import { PageIntroHero } from "@/components/ui/page-intro-hero";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function ServicesIntro({ locale }: { locale: Locale }) {
  const { servicesOverview, servicesPage } = getLegacyContent(locale);

  return (
    <PageIntroHero size="tall">
      <Container className="relative z-[1] mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {servicesPage.intro.eyebrow}
          </p>
          <h1 className="display mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.98] text-ink">
            {servicesOverview.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {servicesOverview.intro}
          </p>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
            {servicesPage.intro.scrollHint}
          </p>
        </Reveal>
      </Container>
    </PageIntroHero>
  );
}
