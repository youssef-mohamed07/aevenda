import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /**
   * Adds the hover spotlight glow (the radial sheen on hover). Use for
   * interactive cards like services, case studies, FAQ items.
   */
  spotlight?: boolean;
  /** Glass surface variant for dark sections. */
  glass?: boolean;
}

/**
 * House card surface. Defaults to a clean light card with a subtle accent
 * ring; opt into `spotlight` for hover glow and `glass` for dark surfaces.
 */
export function Card({
  children,
  className,
  as: Tag = "div",
  spotlight,
  glass,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-card",
        glass
          ? "glass-card"
          : "border border-zinc-200/90 bg-white shadow-xl shadow-accent/[0.06] ring-1 ring-accent/10",
        spotlight && "spotlight-card",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
