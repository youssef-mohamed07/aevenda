import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/components/ui/icons";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-accent text-white shadow-[0_2px_12px_rgba(239,54,59,0.3)] hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(239,54,59,0.4)]",
  secondary: "rounded-full bg-ink text-white hover:bg-ink/85",
  outline:
    "rounded-full border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/[0.03]",
  ghost: "text-ink-muted hover:text-accent",
  light:
    "rounded-full bg-white text-noir uppercase tracking-[0.12em] hover:bg-white/92 shadow-[0_4px_24px_rgba(0,0,0,0.12)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[0.8125rem]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-[0.9375rem]",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

function Content({ withArrow, children }: { withArrow?: boolean; children: ReactNode }) {
  return (
    <>
      {children}
      {withArrow && (
        <IconArrowRight className="rtl-flip size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow,
    className,
    children,
    type = "button",
    ...rest
  } = props;

  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      <Content withArrow={withArrow}>{children}</Content>
    </button>
  );
}

type CtaLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
};

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
        <Content withArrow={withArrow}>{children}</Content>
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      <Content withArrow={withArrow}>{children}</Content>
    </a>
  );
}
