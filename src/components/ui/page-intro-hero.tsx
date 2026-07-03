import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageIntroHeroProps = {
  children: ReactNode;
  className?: string;
  /** Vertical footprint — compact for pages with content directly below */
  size?: "compact" | "default" | "tall" | "fullscreen";
};

const sizeClass = {
  compact: "pb-10 md:pb-12",
  default: "pb-14 md:pb-16",
  tall: "pb-16 md:pb-20",
  fullscreen: "min-h-[100svh] justify-center py-16 md:py-20",
} as const;

export function PageIntroHero({
  children,
  className,
  size = "default",
}: PageIntroHeroProps) {
  const isFullscreen = size === "fullscreen";

  return (
    <section
      className={cn(
        "page-hero-bg relative flex flex-col",
        isFullscreen
          ? "justify-center pt-[var(--site-header-offset)]"
          : "justify-start pt-[var(--site-hero-pad-top)]",
        sizeClass[size],
        className,
      )}
    >
      {children}
    </section>
  );
}
