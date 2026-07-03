import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  speed = "normal",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
}) {
  const speedClass =
    speed === "slow" ? "marquee-track-slow" : speed === "fast" ? "marquee-track-fast" : "marquee-track";

  return (
    <div dir="ltr" className={cn("marquee-mask relative overflow-hidden", className)}>
      <div
        className={cn(
          "marquee-track flex w-max gap-5 md:gap-6",
          speedClass,
          reverse && "marquee-track-reverse",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
