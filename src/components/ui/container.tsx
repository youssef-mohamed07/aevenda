import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "default" | "wide" | "narrow";

const widths: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-[100rem]",
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: ElementType;
}

/** Centered max-width wrapper with the house horizontal padding. */
export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6", widths[size], className)}>
      {children}
    </Tag>
  );
}
