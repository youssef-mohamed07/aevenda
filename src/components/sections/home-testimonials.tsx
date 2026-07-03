import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialsShowcase } from "@/components/sections/testimonials-carousel";
import { getLegacyContent } from "@/content/legacy-site";
import type { Locale } from "@/lib/i18n";

export function HomeTestimonials({ locale }: { locale: Locale }) {
  const { home, testimonials } = getLegacyContent(locale);

  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" className="border-t border-border/60">
      <Container>
        <Reveal delay={0.06}>
          <TestimonialsShowcase
            items={testimonials}
            locale={locale}
            eyebrow={locale === "ar" ? "شهادات العملاء" : "Testimonials"}
            headline={home.testimonials.title}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
