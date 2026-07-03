import { CtaLink } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { getCaseStudyImage } from "@/lib/legacy-media";
import { localizePath, type Locale } from "@/lib/i18n";

export function HomeHero({ locale }: { locale: Locale }) {
  const { home, caseStudies } = getLegacyContent(locale);
  const { hero } = home;
  const heroImage = caseStudies[0] ? getCaseStudyImage(caseStudies[0].slug) : undefined;

  return (
    <section className="home-hero overflow-hidden lg:min-h-[100svh]">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,44%)]">
        <div className="flex flex-col px-6 pb-5 pt-[calc(var(--site-header-height)+1.25rem)] sm:pb-8 sm:pt-[var(--site-hero-pad-top)] lg:justify-center lg:pb-16 lg:pe-8 lg:ps-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Aevenda MBE
            </p>
            <h1 className="display mt-4 max-w-[14ch] text-[clamp(2rem,8vw,2.875rem)] leading-[0.98] text-ink sm:mt-5 lg:max-w-[12ch] lg:text-[clamp(2.75rem,6.5vw,5.25rem)] lg:leading-[0.94]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-muted sm:mt-6 sm:text-base md:max-w-lg md:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <CtaLink
                href={localizePath("/case-studies", locale)}
                variant="primary"
                size="md"
                withArrow
                className="w-full justify-center sm:w-auto lg:px-8 lg:py-3.5 lg:text-[0.9375rem]"
              >
                {hero.cta}
              </CtaLink>
              <CtaLink
                href={localizePath("/services", locale)}
                variant="outline"
                size="md"
                className="w-full justify-center sm:w-auto lg:px-8 lg:py-3.5 lg:text-[0.9375rem]"
              >
                {locale === "ar" ? "خدماتنا" : "Our services"}
              </CtaLink>
            </div>
          </Reveal>
        </div>

        {heroImage ? (
          <Reveal
            delay={0.08}
            className="relative mx-5 mb-8 aspect-[5/4] overflow-hidden rounded-[1.25rem] shadow-[0_16px_40px_rgba(0,0,0,0.07)] sm:mx-6 sm:aspect-[4/3] lg:mx-0 lg:mb-0 lg:min-h-full lg:rounded-none lg:shadow-none"
          >
            <SiteImage
              src={heroImage}
              alt={caseStudies[0]?.title ?? "Aevenda portfolio"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-canvas lg:via-canvas/30 lg:to-transparent" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
