"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type CarouselProps = {
  items: ReactNode[];
  autoPlayMs?: number;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
};

export function Carousel({
  items,
  autoPlayMs = 6000,
  className,
  showDots = true,
  showArrows = true,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex((next + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!autoPlayMs || count <= 1) return;
    const timer = window.setInterval(next, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, count, next]);

  if (count === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {showArrows && count > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="glass-chip grid size-10 place-items-center rounded-full text-ink transition"
            aria-label="Previous slide"
          >
            <IconChevronLeft className="rtl-flip size-4" />
          </button>

          {showDots ? (
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={cn(
                    "size-2 rounded-full transition-colors duration-300",
                    i === index ? "bg-accent" : "bg-ink/20 hover:bg-ink/35",
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          ) : null}

          <button
            type="button"
            onClick={next}
            className="glass-chip grid size-10 place-items-center rounded-full text-ink transition"
            aria-label="Next slide"
          >
            <IconChevronRight className="rtl-flip size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
