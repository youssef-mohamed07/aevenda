import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactIntro } from "@/components/sections/contact-intro";
import { ContactPanel } from "@/components/sections/contact-panel";
import { getLegacyContent } from "@/content/legacy-site";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();
  const { contact } = getLegacyContent(localeParam);

  return buildPageMetadata({
    path: "/contact",
    locale: localeParam,
    fallbackTitle: contact.title,
    fallbackDescription: contact.subtitle,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return (
    <main className="site-main">
      <ContactIntro locale={locale} />
      <ContactPanel locale={locale} />
    </main>
  );
}
