import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CtaLink } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import { SectionHeader, homepageSectionHeader } from "@/components/ui/section-header";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { getServiceImage } from "@/lib/legacy-media";
import { localizePath, type Locale } from "@/lib/i18n";
import { getUiLabels } from "@/lib/ui-labels";
import { cn } from "@/lib/utils";

function ServiceRow({
  href,
  index,
  category,
  title,
  intro,
  readMore,
}: {
  href: string;
  index: number;
  category: string;
  title: string;
  intro: string;
  readMore: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-start gap-5 border-b border-border/60 py-7 transition-colors hover:border-accent/25 md:gap-8 md:py-8"
      >
        <span className="display w-10 shrink-0 text-[1.75rem] leading-none text-ink/15 transition-colors group-hover:text-accent/35 md:w-12 md:text-[2rem]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0 flex-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {category}
          </span>
          <span className="mt-1.5 block text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-ink md:text-xl">
            {title}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-ink-muted md:max-w-xl">
            {intro}
          </span>
        </span>

        <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink-muted transition-colors group-hover:text-accent">
          <span className="hidden sm:inline">{readMore}</span>
          <IconArrowRight className="rtl-flip size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </li>
  );
}

export function HomeServices({ locale }: { locale: Locale }) {
  const content = getLegacyContent(locale);
  const { home, services, servicesOverview } = content;
  const labels = getUiLabels(locale);
  const [featured, ...rest] = services;
  const featuredImage = featured ? getServiceImage(featured.slug) : undefined;

  return (
    <Section id="services">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              {...homepageSectionHeader}
              eyebrow={locale === "ar" ? "ما نقدمه" : "What We Do"}
              headline={home.services.title}
              subtitle={home.services.intro}
              className="mb-0 md:mb-0"
            />

            <div className="mt-8 hidden lg:block">
              <CtaLink href={localizePath("/services", locale)} variant="outline" withArrow>
                {home.services.viewAll}
              </CtaLink>
            </div>
          </div>

          <div className="lg:col-span-8">
            {featured ? (
              <Reveal>
                <Link
                  href={localizePath(`/services/${featured.slug}`, locale)}
                  className="group grid overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/55 shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_56px_rgba(0,0,0,0.08)] md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
                >
                  <div className="relative min-h-[14rem] bg-canvas md:min-h-[18rem]">
                    {featuredImage ? (
                      <SiteImage
                        src={featuredImage}
                        alt={featured.title}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/35 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-noir/10" />
                  </div>

                  <div className="flex flex-col justify-center p-7 md:p-9">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {servicesOverview.categories[0]}
                    </p>
                    <h3 className="display mt-3 text-[clamp(1.5rem,3vw,2rem)] leading-[1.08] text-ink">
                      {featured.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                      {featured.intro}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                      {labels.readMore}
                      <IconArrowRight className="rtl-flip size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ) : null}

            <Reveal delay={0.06}>
              <ul className={cn(featured && "mt-3 border-t border-border/60")}>
                {rest.map((service, index) => (
                  <ServiceRow
                    key={service.slug}
                    href={localizePath(`/services/${service.slug}`, locale)}
                    index={index + 1}
                    category={servicesOverview.categories[index + 1] ?? service.title}
                    title={service.title}
                    intro={service.intro}
                    readMore={labels.readMore}
                  />
                ))}
              </ul>
            </Reveal>

            <div className="mt-10 lg:hidden">
              <CtaLink href={localizePath("/services", locale)} variant="outline" withArrow>
                {home.services.viewAll}
              </CtaLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
