import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StatsGridHome } from "@/components/ui/stats-grid";
import { getLegacyStats } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function HomeStats({
  locale,
  variant = "overlap",
}: {
  locale: Locale;
  variant?: "overlap" | "inline";
}) {
  const stats = getLegacyStats(locale);

  return (
    <section
      className={variant === "overlap" ? "relative z-10 -mt-14 md:-mt-20" : "relative z-10"}
    >
      <Container>
        <Reveal>
          <div className="glass-panel-solid overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem]">
            <div className="grid grid-cols-2 divide-x divide-y divide-border/50 md:grid-cols-4 md:divide-y-0">
              <StatsGridHome stats={stats} locale={locale} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
