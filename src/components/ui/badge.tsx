import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /** Show the live pulsing dot before the label. */
  pulse?: boolean;
  theme?: "light" | "dark";
}

/** Small status / category pill. */
export function Badge({ children, className, pulse, theme = "dark" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]",
        theme === "dark"
          ? "glass-pill text-zinc-200"
          : "border border-accent/15 bg-accent/5 text-accent",
        className,
      )}
    >
      {pulse && <span className="pulse-dot" aria-hidden />}
      {children}
    </span>
  );
}
