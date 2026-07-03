import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CtaLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { localizePath, type Locale } from "@/lib/i18n";

export function CtaBand({ locale }: { locale: Locale }) {
  const { cta } = getLegacyContent(locale);

  return (
    <Section className="border-t border-border/60 !py-16 md:!py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {locale === "ar" ? "لنبدأ" : "Let's start"}
              </p>
              <h2 className="display mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.08] text-ink">
                {cta.title}
              </h2>
            </div>
            <CtaLink
              href={localizePath("/contact", locale)}
              variant="primary"
              size="lg"
              withArrow
              className="shrink-0 self-start md:self-auto"
            >
              {cta.button}
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
