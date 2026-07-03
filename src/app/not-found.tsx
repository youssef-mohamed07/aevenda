import Link from "next/link";
import { headers } from "next/headers";
import { Container } from "@/components/ui/container";
import { getDictionaryLocal } from "@/content/dictionaries.local";
import {
  defaultLocale,
  getLocaleFromPathname,
  isLocale,
  localizePath,
  type Locale,
} from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { sanityFetch } from "@/sanity/fetch";
import { NOT_FOUND_QUERY } from "@/sanity/queries";

async function resolveLocale(): Promise<Locale> {
  const headerStore = await headers();
  const fromHeader = headerStore.get("x-site-locale");
  if (fromHeader && isLocale(fromHeader)) return fromHeader;

  const referer = headerStore.get("referer");
  if (referer) {
    try {
      const pathname = new URL(referer).pathname;
      return getLocaleFromPathname(pathname);
    } catch {
      /* ignore invalid referer */
    }
  }

  return defaultLocale;
}

export async function generateMetadata() {
  const locale = await resolveLocale();
  const cms = await sanityFetch<{ title?: string; description?: string }>({
    query: NOT_FOUND_QUERY,
    params: { locale },
    tags: ["notFoundPage", `notFoundPage-${locale}`],
  });

  return buildMetadata({
    title: cms?.title ?? "404",
    description: cms?.description ?? "",
    path: "/404",
    locale,
    noIndex: true,
  });
}

export default async function NotFound() {
  const locale = await resolveLocale();
  const cms = await sanityFetch<{
    headline?: string;
    ctaLabel?: string;
    ctaHref?: string;
  }>({
    query: NOT_FOUND_QUERY,
    params: { locale },
    tags: ["notFoundPage", `notFoundPage-${locale}`],
  });

  const dict = getDictionaryLocal(locale);
  const headline = cms?.headline ?? "404";
  const ctaLabel = cms?.ctaLabel ?? dict.site.home;
  const ctaHref = cms?.ctaHref ?? localizePath("/", locale);

  return (
    <main className="flex min-h-[60vh] items-center py-24" lang={locale}>
      <Container>
        <h1 className="headline text-4xl md:text-5xl">{headline}</h1>
        {ctaLabel ? (
          <Link
            href={ctaHref}
            className="mt-8 inline-flex text-sm font-semibold text-accent hover:underline"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </Container>
    </main>
  );
}
