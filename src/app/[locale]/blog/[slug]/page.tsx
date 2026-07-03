import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostBody, BlogPostClosing } from "@/components/sections/blog-post-body";
import { Container } from "@/components/ui/container";
import { SiteImage } from "@/components/ui/site-image";
import { PageIntroHero } from "@/components/ui/page-intro-hero";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { formatBlogDate } from "@/lib/format-date";
import { getBlogImage } from "@/lib/legacy-media";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/cms-seo";
import { ensureSiteConfig } from "@/sanity/load-site-config";
import { getUiLabels } from "@/lib/ui-labels";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getLegacyContent(locale).blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  await ensureSiteConfig();

  const post = getLegacyContent(localeParam).blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return buildPageMetadata({
    path: `/blog/${slug}`,
    locale: localeParam,
    fallbackTitle: post.title,
    fallbackDescription: post.excerpt,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const post = getLegacyContent(locale).blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const image = getBlogImage(post.slug);
  const labels = getUiLabels(locale);

  return (
    <main className="site-main">
      <PageIntroHero size="compact">
        <Container className="relative z-[1] max-w-4xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              {post.category}
            </p>
            <h1 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-ink">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-ink-muted md:text-base">
              {formatBlogDate(post.date, locale)} · {labels.minRead(post.readMinutes)}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {post.excerpt}
            </p>
          </Reveal>
        </Container>
      </PageIntroHero>

      {image ? (
        <div className="relative -mt-2 pb-10 md:-mt-4 md:pb-12">
          <Container>
            <Reveal delay={0.06}>
              <div className="relative aspect-[21/10] overflow-hidden rounded-[1.5rem] bg-canvas md:rounded-[1.75rem]">
                <SiteImage src={image} alt={post.title} fill priority className="object-cover" />
              </div>
            </Reveal>
          </Container>
        </div>
      ) : null}

      <BlogPostBody post={post} locale={locale} />
      <BlogPostClosing locale={locale} />
    </main>
  );
}
