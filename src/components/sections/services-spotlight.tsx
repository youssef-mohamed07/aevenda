import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { getCaseStudyImage } from "@/lib/legacy-media";
import { localizePath, type Locale } from "@/lib/i18n";

export function ServicesSpotlight({ locale }: { locale: Locale }) {
  const { servicesPage, caseStudies } = getLegacyContent(locale);
  const study = caseStudies[0];
  if (!study) return null;

  const image = getCaseStudyImage(study.slug);

  return (
    <section className="border-t border-border/60 py-16 md:py-20">
      <Container>
        <Reveal>
          <article className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/55 md:rounded-[2rem]">
            {image ? (
              <div className="relative aspect-[21/9] bg-canvas">
                <SiteImage src={image} alt={study.title} fill className="object-cover" />
              </div>
            ) : null}

            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:p-10 lg:p-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {servicesPage.spotlight.eyebrow}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  {study.category}
                </p>
                <h2 className="display mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] text-ink">
                  {study.title}
                </h2>
                {study.about ? (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
                    {study.about.slice(0, 220)}
                    {study.about.length > 220 ? "…" : ""}
                  </p>
                ) : null}
              </div>

              <Link
                href={localizePath(`/case-studies/${study.slug}`, locale)}
                className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-accent md:self-end"
              >
                {servicesPage.spotlight.cta}
                <IconArrowRight className="rtl-flip size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
