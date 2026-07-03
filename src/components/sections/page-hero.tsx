import { Container } from "@/components/ui/container";
import { PageIntroHero } from "@/components/ui/page-intro-hero";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <PageIntroHero size="compact" className={cn(className)}>
      <Container className="relative z-[1] max-w-3xl">
        <Reveal>
          {eyebrow ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] text-ink",
              eyebrow ? "mt-4" : "mt-0",
            )}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">{subtitle}</p>
          ) : null}
        </Reveal>
      </Container>
    </PageIntroHero>
  );
}
