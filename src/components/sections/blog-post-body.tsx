import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { LegacyBlogPost } from "@/content/legacy/types";
import { formatBlogDate } from "@/lib/format-date";
import { getUiLabels } from "@/lib/ui-labels";
import { localizePath, type Locale } from "@/lib/i18n";

export function BlogPostBody({ post, locale }: { post: LegacyBlogPost; locale: Locale }) {
  const labels = getUiLabels(locale);

  return (
    <section className="border-t border-border/60 py-16 md:py-20">
      <Container>
        <Reveal>
          <article className="mx-auto max-w-3xl">
            <p className="text-xs text-ink-muted">
              {formatBlogDate(post.date, locale)} · {labels.minRead(post.readMinutes)}
            </p>
            <div className="mt-8 space-y-6">
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}

export function BlogPostClosing({ locale }: { locale: Locale }) {
  const labels = getUiLabels(locale);

  return (
    <section className="border-t border-border/60 pb-20 pt-14 md:pb-28 md:pt-16">
      <Container>
        <Reveal>
          <CtaLink href={localizePath("/blog", locale)} variant="ghost">
            ← {labels.backToBlog}
          </CtaLink>
        </Reveal>
      </Container>
    </section>
  );
}
