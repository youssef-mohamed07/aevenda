import Link from "next/link";
import { SiteImage } from "@/components/ui/site-image";
import { IconArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function CaseStudyCard({
  href,
  title,
  category,
  image,
  label,
  featured = false,
}: {
  href: string;
  title: string;
  category: string;
  image?: string;
  label: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={`${title} — ${label}`}
      className={cn(
        "glass-panel group flex h-full flex-col overflow-hidden rounded-[1.5rem] transition-shadow duration-300 hover:shadow-[0_24px_64px_rgba(0,0,0,0.08)]",
        featured && "lg:min-h-[28rem]",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-canvas",
          featured ? "min-h-[14rem] flex-1" : "aspect-[16/10]",
        )}
      >
        {image ? (
          <SiteImage src={image} alt={title} fill className="object-cover" />
        ) : null}
      </div>
      <div className={cn("flex flex-col p-6 md:p-7", featured && "md:p-8")}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
          {category}
        </p>
        <h3
          className={cn(
            "mt-2 font-semibold leading-snug text-ink",
            featured ? "display text-2xl md:text-[1.875rem]" : "text-lg",
          )}
        >
          {title}
        </h3>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-ink-muted transition-colors group-hover:text-accent">
          {label}
          <IconArrowRight className="rtl-flip size-3.5" />
        </span>
      </div>
    </Link>
  );
}
