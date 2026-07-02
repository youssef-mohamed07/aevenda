import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** "pill" leans into the premium dark glass treatment. */
  variant?: "card" | "pill";
}

/** Frosted-glass surface for overlays, callouts, and floating UI. */
export function GlassPanel({
  children,
  className,
  as: Tag = "div",
  variant = "card",
}: GlassPanelProps) {
  return (
    <Tag
      className={cn(
        variant === "pill" ? "glass-pill rounded-pill" : "glass-card rounded-card",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
