import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTheme = "light" | "dark";
type SectionBackdrop = "none" | "aurora" | "grid-floor";
type SectionRhythm = "default" | "compact" | "loose";

const themes: Record<SectionTheme, string> = {
  light: "site-light-section bg-transparent text-zinc-900",
  dark: "surface-dark text-zinc-100",
};

const rhythms: Record<SectionRhythm, string> = {
  compact: "py-16 md:py-20",
  default: "py-24 md:py-32",
  loose: "py-28 md:py-40",
};

interface SectionProps {
  children: ReactNode;
  /** Anchor target for in-page navigation + scroll-margin. */
  id?: string;
  className?: string;
  theme?: SectionTheme;
  rhythm?: SectionRhythm;
  /** Decorative backdrop layer rendered behind the content. */
  backdrop?: SectionBackdrop;
}

/**
 * Page section primitive: owns vertical rhythm, light/dark theming, scroll
 * anchoring, and optional decorative backdrops (aurora for dark, grid-floor
 * for light). Content sits above the backdrop via relative stacking.
 *
 * Homepage sections below the hero: use `theme="light"` inside `SiteLightBand`.
 * See AGENTS.md → Homepage section conventions.
 */
export function Section({
  children,
  id,
  className,
  theme = "light",
  rhythm = "default",
  backdrop = "none",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        themes[theme],
        rhythms[rhythm],
        id && "scroll-mt-28",
        className,
      )}
    >
      {backdrop === "aurora" && <div className="aurora" aria-hidden />}
      {backdrop === "grid-floor" && (
        <div
          className="grid-floor pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
          aria-hidden
        />
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
