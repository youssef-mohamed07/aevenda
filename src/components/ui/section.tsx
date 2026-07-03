import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTone = "light" | "paper" | "dark";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: SectionTone;
  rhythm?: "default" | "compact" | "loose";
}

export function Section({
  children,
  id,
  className,
  tone = "light",
  rhythm = "default",
}: SectionProps) {
  const rhythmClass =
    rhythm === "compact"
      ? "py-16 md:py-20"
      : rhythm === "loose"
        ? "py-24 md:py-32"
        : "py-20 md:py-28";

  const toneClass =
    tone === "dark"
      ? "bg-noir text-white"
      : "bg-transparent text-ink";

  return (
    <section
      id={id}
      className={cn(toneClass, rhythmClass, id && "scroll-mt-24", className)}
    >
      {children}
    </section>
  );
}
