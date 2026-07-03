"use client";

import type { LegacyStat } from "@/content/legacy/types";
import { CountUp } from "@/components/ui/count-up";
import type { Locale } from "@/lib/i18n";

const valueClass = {
  home: "display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none text-ink",
  proof: "display text-[clamp(2rem,4vw,3rem)] leading-none text-ink",
  presence: "display text-[clamp(2rem,4vw,3rem)] leading-none text-ink",
  case: "display text-3xl text-ink",
} as const;

const labelClass = {
  home: "mt-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-muted",
  proof: "mt-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-muted",
  presence: "mt-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-muted",
  case: "mt-1 text-sm text-ink-muted",
} as const;

export function StatsGridHome({ stats, locale }: { stats: LegacyStat[]; locale: Locale }) {
  return (
    <>
      {stats.map((stat, index) => (
        <div key={stat.label} className="px-6 py-8 md:px-8 md:py-10">
          <p className={valueClass.home}>
            <CountUp
              value={stat.value}
              locale={locale}
              suffix={<span className="text-accent">+</span>}
              delay={index * 120}
            />
          </p>
          <p className={labelClass.home}>{stat.label}</p>
        </div>
      ))}
    </>
  );
}

export function StatsGridProof({ stats, locale }: { stats: LegacyStat[]; locale: Locale }) {
  return (
    <>
      {stats.map((stat, index) => (
        <div key={stat.label} className="md:px-8 md:first:ps-0 md:last:pe-0">
          <dt className={valueClass.proof}>
            <CountUp
              value={stat.value}
              locale={locale}
              suffix={<span className="text-accent">+</span>}
              delay={index * 120}
            />
          </dt>
          <dd className={labelClass.proof}>{stat.label}</dd>
        </div>
      ))}
    </>
  );
}

export function StatsGridPresence({ stats, locale }: { stats: LegacyStat[]; locale: Locale }) {
  return (
    <>
      {stats.map((stat, index) => (
        <div key={stat.label}>
          <dt className={valueClass.presence}>
            <CountUp
              value={stat.value}
              locale={locale}
              suffix={<span className="text-accent">+</span>}
              delay={index * 120}
            />
          </dt>
          <dd className={labelClass.presence}>{stat.label}</dd>
        </div>
      ))}
    </>
  );
}

export function StatsGridCase({ stats, locale }: { stats: LegacyStat[]; locale: Locale }) {
  return (
    <>
      {stats.map((stat, index) => (
        <div key={stat.label}>
          <p className={valueClass.case}>
            <CountUp value={stat.value} locale={locale} suffix="+" delay={index * 120} />
          </p>
          <p className={labelClass.case}>{stat.label}</p>
        </div>
      ))}
    </>
  );
}
