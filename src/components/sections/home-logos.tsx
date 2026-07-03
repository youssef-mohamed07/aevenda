import { Marquee } from "@/components/ui/marquee";
import { SiteImage } from "@/components/ui/site-image";
import { getClientLogos } from "@/content/partners";
import { getUiLabels } from "@/lib/ui-labels";
import type { Locale } from "@/lib/i18n";

type HomeLogosProps = {
  locale: Locale;
};

function LogoStrip({ reverse = false }: { reverse?: boolean }) {
  const logos = getClientLogos();
  const half = Math.ceil(logos.length / 2);
  const slice = reverse ? logos.slice(half) : logos.slice(0, half);

  return (
    <Marquee speed="slow" reverse={reverse} className={reverse ? "mt-6 md:mt-8" : undefined}>
      {slice.map((logo) => (
        <div
          key={logo.name}
          className="flex h-[5.5rem] w-[11rem] shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-white px-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:h-24 md:w-[12.5rem] md:px-6"
        >
          <SiteImage
            brand
            src={logo.src}
            alt={logo.name}
            width={200}
            height={80}
            className="max-h-12 w-auto max-w-[9.5rem] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 md:max-h-14 md:max-w-[10.5rem]"
          />
        </div>
      ))}
    </Marquee>
  );
}

export function HomeLogos({ locale }: HomeLogosProps) {
  const labels = getUiLabels(locale);

  return (
    <section className="overflow-hidden py-14 pb-20 md:py-16 md:pb-24">
      <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/45 md:mb-12">
        {labels.partnersEyebrow}
      </p>

      <LogoStrip />
      <LogoStrip reverse />
    </section>
  );
}
