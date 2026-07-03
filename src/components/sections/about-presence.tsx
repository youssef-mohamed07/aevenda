import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { StatsGridPresence } from "@/components/ui/stats-grid";
import { getLegacyContent, getLegacyStats, legacySite } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function AboutPresence({ locale }: { locale: Locale }) {
  const { aboutPage } = getLegacyContent(locale);
  const stats = getLegacyStats(locale);

  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {aboutPage.presence.eyebrow}
            </p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] text-ink">
              {aboutPage.presence.title}
            </h2>
            <ul className="mt-10 space-y-5">
              {legacySite.company.offices.map((office) => (
                <li
                  key={office.city}
                  className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-5"
                >
                  <span className="text-lg font-semibold text-ink md:text-xl">{office.city}</span>
                  <span className="text-sm text-ink-muted">{office.country}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border/60 pt-10 sm:grid-cols-2">
              <StatsGridPresence stats={stats} locale={locale} />
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
