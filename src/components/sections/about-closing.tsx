import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { localizePath, type Locale } from "@/lib/i18n";

export function AboutClosing({ locale }: { locale: Locale }) {
  const { about, aboutPage } = getLegacyContent(locale);

  return (
    <section className="border-t border-border/60 pb-20 pt-16 md:pb-28 md:pt-20">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-ink">
            {about.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {aboutPage.closing.body}
          </p>
          <div className="mt-10 flex justify-center">
            <CtaLink href={localizePath("/contact", locale)} variant="primary" size="lg" withArrow>
              {about.cta.button}
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
