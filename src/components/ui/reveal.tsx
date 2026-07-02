"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Render element tag. Defaults to a div. */
  as?: "div" | "li" | "section" | "article";
}

/**
 * Scroll-triggered entrance using the shared brand motion curve.
 * Respects prefers-reduced-motion (shows content immediately).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced-motion users are handled by the CSS media query in globals.css
    // (reveal-scroll is forced visible), so no synchronous state work here.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style =
    delay > 0
      ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
      : undefined;

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn("reveal-scroll", inView && "is-inview", className)}
    >
      {children}
    </Tag>
  );
}
