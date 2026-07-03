import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StatsGridProof } from "@/components/ui/stats-grid";
import { getLegacyContent, getLegacyStats } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function ServicesProof({ locale }: { locale: Locale }) {
  const { servicesPage } = getLegacyContent(locale);
  const stats = getLegacyStats(locale);

  return (
    <section className="border-t border-border/60 py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {servicesPage.proof.eyebrow}
          </p>
          <h2 className="display mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.08] text-ink">
            {servicesPage.proof.title}
          </h2>

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border/60 pt-12 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border/60">
            <StatsGridProof stats={stats} locale={locale} />
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
