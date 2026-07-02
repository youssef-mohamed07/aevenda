import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";
import { getSiteConfig } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();
  return buildPageMetadata({
    path: "/",
    locale: localeParam,
    fallbackTitle: getSiteConfig().name,
    fallbackDescription: "Coming Soon",
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const dict = await getDictionary(localeParam);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="display-headline text-5xl tracking-[0.08em] sm:text-7xl">
        {dict.home.brand}
      </h1>
      <p className="mt-5 text-sm font-medium uppercase tracking-[0.35em] text-white/55 sm:text-base">
        {dict.home.comingSoon}
      </p>
    </main>
  );
}
