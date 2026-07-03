import { Container } from "@/components/ui/container";
import { PageIntroHero } from "@/components/ui/page-intro-hero";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function ContactIntro({ locale }: { locale: Locale }) {
  const { contact } = getLegacyContent(locale);

  return (
    <PageIntroHero size="compact">
      <Container className="relative z-[1] mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {locale === "ar" ? "تواصل معنا" : "Contact"}
          </p>
          <h1 className="display mx-auto mt-5 max-w-3xl text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.02] text-ink">
            {contact.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {contact.subtitle}
          </p>
        </Reveal>
      </Container>
    </PageIntroHero>
  );
}
