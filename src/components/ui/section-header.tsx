import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow: string;
  headline?: ReactNode;
  subtitle?: ReactNode;
  align?: "start" | "center";
  dark?: boolean;
  className?: string;
}

export const homepageSectionHeader = {
  align: "start",
} as const satisfies Pick<SectionHeaderProps, "align">;

export function SectionHeader({
  eyebrow,
  headline,
  subtitle,
  align = "start",
  dark = false,
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl",
        className,
      )}
    >
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.2em]",
          dark ? "text-accent" : "text-accent",
        )}
      >
        {eyebrow}
      </p>

      {headline ? (
        <h2
          className={cn(
            "display mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-ink",
            dark && "text-white",
            isCenter && "text-center",
          )}
        >
          {headline}
        </h2>
      ) : null}

      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-lg text-base leading-relaxed",
            dark ? "text-white/60" : "text-ink-muted",
            isCenter && "mx-auto text-center",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
