import { Container } from "@/components/ui/container";
import { IconCheck } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import type { LegacyCaseStudy } from "@/content/legacy/types";
import { getUiLabels } from "@/lib/ui-labels";
import type { Locale } from "@/lib/i18n";

export function CaseStudyBody({ study, locale }: { study: LegacyCaseStudy; locale: Locale }) {
  const labels = getUiLabels(locale);

  return (
    <section className="border-t border-border/60 py-16 md:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {labels.aboutProject}
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
              {study.about ?? ""}
            </p>
          </Reveal>

          {study.scope?.length ? (
            <Reveal delay={0.06} className="lg:col-span-5">
              <div className="rounded-[1.5rem] border border-border/70 bg-paper/55 p-7 md:p-8">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
                  {labels.scope}
                </h2>
                <ul className="mt-5 space-y-4">
                  {study.scope.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                      <IconCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
