"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ServicesChapterNavProps = {
  locale: Locale;
  items: { slug: string; label: string }[];
};

export function ServicesChapterNav({ locale, items }: ServicesChapterNavProps) {
  const [active, setActive] = useState(items[0]?.slug ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(`service-${item.slug}`))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id.replace("service-", ""));
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label={locale === "ar" ? "تنقل الخدمات" : "Services navigation"}
      className="sticky top-[5.5rem] z-30 border-y border-border/60 bg-canvas/95 backdrop-blur-md"
    >
      <Container>
        <ul className="scrollbar-hide flex gap-1 overflow-x-auto py-3 md:justify-center md:gap-2">
          {items.map((item) => {
            const isActive = active === item.slug;

            return (
              <li key={item.slug} className="shrink-0">
                <Link
                  href={`#service-${item.slug}`}
                  onClick={() => setActive(item.slug)}
                  className={cn(
                    "block whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-colors md:px-4 md:py-2",
                    isActive ? "text-accent" : "text-ink/45 hover:text-ink/75",
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
