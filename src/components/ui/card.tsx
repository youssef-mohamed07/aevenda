import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  href?: string;
}

export function Card({
  children,
  className,
  as: Tag = "div",
  ...props
}: CardProps & Record<string, unknown>) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-border bg-paper p-6 md:p-7",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
