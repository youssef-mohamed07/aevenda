import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
