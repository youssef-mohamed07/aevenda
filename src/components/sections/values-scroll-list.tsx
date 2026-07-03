"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ValueItem = { title: string; body: string };

export function ValuesScrollList({ items }: { items: ValueItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState<Set<number>>(() => new Set());
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!rows.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setRevealed(new Set(items.map((_, i) => i)));
    }

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isNaN(idx)) return;
          setRevealed((prev) => {
            if (prev.has(idx)) return prev;
            const next = new Set(prev);
            next.add(idx);
            return next;
          });
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    rows.forEach((row) => {
      spyObserver.observe(row);
      if (!reducedMotion) revealObserver.observe(row);
    });

    return () => {
      spyObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [items]);

  return (
    <ul className="mt-12 divide-y divide-border/60 border-t border-border/60">
      {items.map((value, index) => {
        const isActive = activeIndex === index;
        const isRevealed = revealed.has(index);

        return (
          <li
            key={value.title}
            ref={(el) => {
              rowRefs.current[index] = el;
            }}
            data-index={index}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "value-row grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10",
              isRevealed && "value-row--revealed",
              isActive && "value-row--active",
            )}
          >
            <span
              className={cn(
                "value-row-number display text-[1.75rem] leading-none transition-colors duration-500 md:col-span-2 md:text-[2rem]",
                isActive ? "text-accent" : "text-ink/15",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="md:col-span-4">
              <h3
                className={cn(
                  "value-row-title text-lg transition-colors duration-500 md:text-xl",
                  isActive ? "font-semibold text-ink" : "font-medium text-ink/45",
                )}
              >
                {value.title}
              </h3>
            </div>
            <p
              className={cn(
                "value-row-body text-sm leading-relaxed transition-colors duration-500 md:col-span-6 md:text-base",
                isActive ? "text-ink-muted" : "text-ink/35",
              )}
            >
              {value.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
