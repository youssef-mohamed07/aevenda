import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type EyebrowVariant = "default" | "featured" | "minimal";
export type EyebrowAlign = "start" | "center";
export type EyebrowTheme = "light" | "dark";

export interface EyebrowProps {
  children: ReactNode;
  className?: string;
  align?: EyebrowAlign;
  /**
   * `default` — accent rule + glow dot + label (page heroes, left-aligned headers).
   * `featured` — flanking gradient rules + dots (centered section intros).
   * `minimal` — label only (footer columns, compact panels).
   */
  variant?: EyebrowVariant;
  /** Surface the eyebrow sits on. Dark bumps label brightness slightly. */
  theme?: EyebrowTheme;
  /** @deprecated Prefer `variant="minimal"`. */
  line?: boolean;
}

function EyebrowDot({ theme }: { theme: EyebrowTheme }) {
  return (
    <span
      className={cn(
        "size-1 shrink-0 rounded-full",
        theme === "dark"
          ? "bg-accent-bright shadow-[0_0_10px_rgba(91,163,212,0.75)]"
          : "bg-accent shadow-[0_0_8px_rgba(42,118,166,0.45)]",
      )}
      aria-hidden
    />
  );
}

function EyebrowLabel({
  children,
  theme,
  className,
}: {
  children: ReactNode;
  theme: EyebrowTheme;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[10px] font-bold uppercase tracking-[0.32em] sm:text-[11px]",
        theme === "dark" ? "text-accent-bright" : "text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Shared section overline — gradient rule, glow dot, and uppercase label.
 * Use `featured` for centered bands; `minimal` in tight columns.
 */
export function Eyebrow({
  children,
  className,
  align = "start",
  variant,
  theme = "light",
  line,
}: EyebrowProps) {
  const resolvedVariant: EyebrowVariant =
    line === false
      ? "minimal"
      : (variant ?? (align === "center" ? "featured" : "default"));

  if (resolvedVariant === "minimal") {
    return (
      <div className={cn("flex items-center", className)}>
        <EyebrowLabel theme={theme}>{children}</EyebrowLabel>
      </div>
    );
  }

  if (resolvedVariant === "featured") {
    if (align === "start") {
      return (
        <div className={cn("flex items-center gap-3 sm:gap-4", className)}>
          <span
            className={cn(
              "h-px w-10 shrink-0 sm:w-12",
              theme === "dark"
                ? "bg-linear-to-r from-accent-bright via-accent to-accent/20"
                : "bg-linear-to-r from-accent via-accent-bright to-accent/25",
            )}
            aria-hidden
          />
          <EyebrowDot theme={theme} />
          <EyebrowLabel theme={theme}>{children}</EyebrowLabel>
          <EyebrowDot theme={theme} />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "flex w-full max-w-4xl items-center gap-3 sm:gap-4",
          align === "center" ? "mx-auto justify-center" : "justify-start",
          className,
        )}
      >
        <span
          className="h-px min-w-8 flex-1 max-w-20 bg-linear-to-r from-transparent via-accent/50 to-accent sm:max-w-28"
          aria-hidden
        />
        <EyebrowDot theme={theme} />
        <EyebrowLabel theme={theme} className="shrink-0 text-center">
          {children}
        </EyebrowLabel>
        <EyebrowDot theme={theme} />
        <span
          className="h-px min-w-8 flex-1 max-w-20 bg-linear-to-l from-transparent via-accent/50 to-accent sm:max-w-28"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 sm:gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-10 shrink-0 sm:w-12",
          theme === "dark"
            ? "bg-linear-to-r from-accent-bright via-accent to-accent/20"
            : "bg-linear-to-r from-accent via-accent-bright to-accent/25",
        )}
        aria-hidden
      />
      <EyebrowDot theme={theme} />
      <EyebrowLabel theme={theme}>{children}</EyebrowLabel>
    </div>
  );
}
