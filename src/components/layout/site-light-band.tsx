import type { ReactNode } from "react";

/** One continuous white band + grid floor for all light body content. */
export function SiteLightBand({ children }: { children: ReactNode }) {
  return (
    <div className="site-light-band relative flex-1 bg-white">
      <div
        className="grid-floor pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </div>
  );
}
