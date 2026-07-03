import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { getServiceImage } from "@/lib/legacy-media";
import { localizePath, type Locale } from "@/lib/i18n";
import { getUiLabels } from "@/lib/ui-labels";
import { cn } from "@/lib/utils";

export function ServicesChapters({ locale }: { locale: Locale }) {
  const { services, servicesOverview } = getLegacyContent(locale);
  const labels = getUiLabels(locale);

  return (
    <div>
      {services.map((service, index) => {
        const image = getServiceImage(service.slug);
        const reversed = index % 2 === 1;

        return (
          <section
            key={service.slug}
            id={`service-${service.slug}`}
            className="scroll-mt-32 border-t border-border/60 py-16 md:py-24"
          >
            <Container>
              <Reveal>
                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
                    reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
                  )}
                >
                  <div className="relative lg:col-span-5">
                    <span
                      className="pointer-events-none absolute -top-4 start-0 select-none display text-[clamp(4rem,12vw,7rem)] leading-none text-ink/[0.06]"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="relative text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {servicesOverview.categories[index]}
                    </p>
                    <h2 className="relative display mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.08] text-ink">
                      {service.title}
                    </h2>
                    <p className="relative mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
                      {service.intro}
                    </p>
                    <Link
                      href={localizePath(`/services/${service.slug}`, locale)}
                      className="group relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {labels.readMore}
                      <IconArrowRight className="rtl-flip size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  {image ? (
                    <div className="lg:col-span-7">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-canvas shadow-[0_16px_48px_rgba(0,0,0,0.08)] md:rounded-[1.75rem]">
                        <SiteImage src={image} alt={service.title} fill className="object-cover" />
                      </div>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
