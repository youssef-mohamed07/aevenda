import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Eyebrow / overtitle text. */
  eyebrow: string;
  headline?: ReactNode;
  subtitle?: ReactNode;
  align?: "start" | "center";
  /** "dark" = on a dark surface (light text); "light" = on a light surface. */
  theme?: "light" | "dark";
  className?: string;
}

/** Centered featured eyebrow on white — matches `clients-marquee`. */
export const homepageSectionHeader = {
  theme: "light",
  align: "center",
} as const satisfies Pick<SectionHeaderProps, "theme" | "align">;

/**
 * Central section heading primitive. Pairs the shared Eyebrow with a display
 * headline and optional subtitle.
 *
 * Homepage body sections: spread `homepageSectionHeader` (centered featured
 * eyebrow on white, same as clients marquee). See AGENTS.md.
 */
export function SectionHeader({
  eyebrow,
  headline,
  subtitle,
  align = "start",
  theme = "dark",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn(
        "mb-16 max-w-4xl",
        isCenter ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      <Eyebrow align={align} theme={theme}>{eyebrow}</Eyebrow>

      {headline && (
        <h2
          className={cn(
            "display-headline mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            isCenter ? "text-center" : "text-start",
            isDark ? "text-white" : "text-zinc-900",
          )}
        >
          {headline}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            "mt-6 text-lg",
            isCenter ? "mx-auto text-center" : "text-start",
            isDark ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
