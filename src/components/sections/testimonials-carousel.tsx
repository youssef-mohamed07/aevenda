"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LegacyTestimonial } from "@/content/legacy/types";
import type { Locale } from "@/lib/i18n";
import { getUiLabels } from "@/lib/ui-labels";
import { cn } from "@/lib/utils";

const AUTO_PLAY_MS = 8000;

type TestimonialsShowcaseProps = {
  items: LegacyTestimonial[];
  locale: Locale;
  eyebrow: string;
  headline: string;
};

export function TestimonialsShowcase({
  items,
  locale,
  eyebrow,
  headline,
}: TestimonialsShowcaseProps) {
  const labels = getUiLabels(locale);
  const [index, setIndex] = useState(0);
  const count = items.length;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex((next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1) return;
    const timer = window.setInterval(() => goTo(index + 1), AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [count, goTo, index]);

  if (count === 0) return null;

  const active = items[index];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
      <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-ink">
          {headline}
        </h2>

        <ul className="mt-10 hidden space-y-0 border-t border-border/60 lg:block">
          {items.map((item, i) => (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "group flex w-full items-center gap-5 border-b border-border/60 py-5 text-start transition-colors",
                  i === index ? "border-s-2 border-s-accent ps-4" : "hover:border-border-strong",
                )}
                aria-current={i === index ? "true" : undefined}
              >
                <span
                  className={cn(
                    "display w-10 shrink-0 text-[1.75rem] leading-none transition-colors",
                    i === index ? "text-accent/50" : "text-ink/12 group-hover:text-ink/25",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-base font-semibold transition-colors",
                    i === index ? "text-ink" : "text-ink-muted group-hover:text-ink",
                  )}
                >
                  {item.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative lg:col-span-8">
        <div
          className="pointer-events-none absolute -top-6 start-0 select-none display text-[clamp(5rem,14vw,9rem)] leading-none text-accent/[0.07]"
          aria-hidden
        >
          &ldquo;
        </div>

        <div className="relative min-h-[14rem] rounded-[1.75rem] border border-border/70 bg-white/50 px-7 py-10 backdrop-blur-sm md:min-h-[16rem] md:px-10 md:py-12 lg:px-12 lg:py-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="display text-[clamp(1.375rem,2.8vw,2.125rem)] leading-[1.35] text-ink">
                {active.quote}
              </blockquote>

              <footer className="mt-8 flex items-center gap-4 border-t border-border/50 pt-8 md:mt-10">
                <span className="accent-dash shrink-0" aria-hidden />
                <div>
                  <p className="text-base font-semibold text-ink md:text-lg">{active.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">{labels.testimonialClient}</p>
                </div>
              </footer>
            </motion.div>
          </AnimatePresence>

          {count > 1 ? (
            <div className="mt-8 h-px overflow-hidden bg-border/50 md:mt-10">
              <motion.div
                key={`progress-${index}`}
                className="h-full origin-start bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: AUTO_PLAY_MS / 1000, ease: "linear" }}
              />
            </div>
          ) : null}
        </div>

        {count > 1 ? (
          <div className="mt-6 flex items-center gap-5 lg:hidden">
            {items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "display text-[1.75rem] leading-none transition-colors",
                  i === index ? "text-accent" : "text-ink/20",
                )}
                aria-label={item.name}
                aria-current={i === index ? "true" : undefined}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
