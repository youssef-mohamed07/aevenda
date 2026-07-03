"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: number;
  locale?: Locale;
  className?: string;
  suffix?: React.ReactNode;
  duration?: number;
  delay?: number;
};

function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - 2 ** (-10 * t);
}

export function CountUp({
  value,
  locale = "en",
  className,
  suffix,
  duration = 2000,
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setCurrent(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now() + delay;

        function tick(now: number) {
          if (now < start) {
            requestAnimationFrame(tick);
            return;
          }

          const progress = Math.min((now - start) / duration, 1);
          setCurrent(Math.round(value * easeOutExpo(progress)));

          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, delay]);

  const formatted = current.toLocaleString(locale === "ar" ? "ar-EG" : "en-US");

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formatted}
      {suffix}
    </span>
  );
}
