import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconArrowRight } from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { getLegacyContent } from "@/content/legacy-site";
import { formatBlogDate } from "@/lib/format-date";
import { getBlogImage } from "@/lib/legacy-media";
import { localizePath, type Locale } from "@/lib/i18n";
import { getUiLabels } from "@/lib/ui-labels";

export function BlogPostsList({ locale }: { locale: Locale }) {
  const { blogPosts, blogPage } = getLegacyContent(locale);
  const labels = getUiLabels(locale);
  const [featured, ...rest] = blogPosts;

  return (
    <section className="border-t border-border/60 pb-16 md:pb-24">
      <Container>
        {featured ? (
          <Reveal>
            <Link
              href={localizePath(`/blog/${featured.slug}`, locale)}
              className="group grid overflow-hidden rounded-[1.75rem] border border-border/70 bg-paper/55 md:grid-cols-2 md:rounded-[2rem]"
            >
              <div className="relative aspect-[4/3] bg-canvas md:aspect-auto md:min-h-[22rem]">
                {getBlogImage(featured.slug) ? (
                  <SiteImage
                    src={getBlogImage(featured.slug)!}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {blogPage.featured.eyebrow}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  {featured.category}
                </p>
                <h2 className="display mt-4 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] text-ink">
                  {featured.title}
                </h2>
                <p className="mt-3 text-xs text-ink-muted">
                  {formatBlogDate(featured.date, locale)} · {labels.minRead(featured.readMinutes)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {labels.readMore}
                  <IconArrowRight className="rtl-flip size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        {rest.length ? (
          <div className="mt-14 border-t border-border/60 md:mt-16">
            {rest.map((post, index) => {
              const image = getBlogImage(post.slug);
              const href = localizePath(`/blog/${post.slug}`, locale);

              return (
                <Reveal key={post.id} delay={index * 0.05}>
                  <Link
                    href={href}
                    className="group grid gap-6 border-b border-border/60 py-10 md:grid-cols-[minmax(0,17rem)_1fr_auto] md:items-center md:gap-10"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-canvas">
                      {image ? (
                        <SiteImage src={image} alt={post.title} fill className="object-cover" />
                      ) : null}
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                        {post.category}
                      </p>
                      <h3 className="display mt-2 text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.15] text-ink">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-ink-muted">
                        {formatBlogDate(post.date, locale)} · {labels.minRead(post.readMinutes)}
                      </p>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
                        {post.excerpt}
                      </p>
                    </div>

                    <IconArrowRight className="hidden size-5 shrink-0 text-ink/30 transition group-hover:text-accent md:block rtl-flip group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
