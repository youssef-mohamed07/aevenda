import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIntro } from "@/components/sections/blog-intro";
import { BlogPostsList } from "@/components/sections/blog-posts-list";
import { getLegacyContent } from "@/content/legacy-site";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();
  const { footer, blogPage } = getLegacyContent(localeParam);

  return buildPageMetadata({
    path: "/blog",
    locale: localeParam,
    fallbackTitle: footer.blogTitle,
    fallbackDescription: blogPage.intro.subtitle,
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return (
    <main className="site-main">
      <BlogIntro locale={locale} />
      <BlogPostsList locale={locale} />
    </main>
  );
}
