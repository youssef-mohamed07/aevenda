import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/components/ui/icons";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  // Signature gradient pill (lifted from the CyberStage hero CTA)
  primary:
    "overflow-hidden bg-accent-gradient text-white shadow-glow ring-1 ring-white/10 hover:shadow-glow-lg hover:ring-white/20",
  // Glass pill — sits on dark surfaces
  secondary:
    "glass-pill text-white hover:border-white/20 hover:bg-white/[0.07]",
  // Bordered pill — light-band sections
  outline:
    "border border-zinc-200/90 bg-white text-zinc-900 shadow-sm shadow-zinc-900/[0.03] hover:border-accent/25 hover:bg-zinc-50/90",
  // Minimal text button
  ghost: "text-zinc-700 hover:text-accent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

/** Shared inner content: optional shimmer (primary) + label + optional arrow. */
function Content({
  variant,
  withArrow,
  children,
}: {
  variant: ButtonVariant;
  withArrow?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
      <span className="relative">{children}</span>
      {withArrow && (
        <IconArrowRight className="rtl-flip relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
};

/** `<button>` element styled with the design system. */
export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      <Content variant={variant} withArrow={withArrow}>
        {children}
      </Content>
    </button>
  );
}

type CtaLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
};

/**
 * Link styled as a button. Uses next/link for internal routes and a plain
 * anchor for external/hash links. Server-component friendly; analytics
 * tracking can be layered on by wrapping this in a thin client component.
 */
export function CtaLink({
  href,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...props
}: CtaLinkProps) {
  const classes = buttonClasses(variant, size, className);
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...props}>
        <Content variant={variant} withArrow={withArrow}>
          {children}
        </Content>
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      <Content variant={variant} withArrow={withArrow}>
        {children}
      </Content>
    </a>
  );
}
