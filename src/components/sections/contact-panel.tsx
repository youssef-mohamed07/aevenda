import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/button";
import { IconWhatsApp } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary } from "@/content/dictionaries";
import { getLegacyContent, legacySite } from "@/content/legacy-site";
import { getMailtoUrl, getSiteConfig, getWhatsAppUrl } from "@/lib/site-config";
import { getUiLabels } from "@/lib/ui-labels";
import type { Locale } from "@/lib/i18n";

export async function ContactPanel({ locale }: { locale: Locale }) {
  const { contact } = getLegacyContent(locale);
  const dict = await getDictionary(locale);
  const siteConfig = getSiteConfig();
  const labels = getUiLabels(locale);

  const mailto = getMailtoUrl({
    subject: dict.home.contact.emailSubject,
    body: dict.home.contact.messageIntro,
  });

  const channels = [
    { label: labels.emailUs, href: mailto, value: siteConfig.email },
    {
      label: labels.callUs,
      href: `tel:${siteConfig.phone}`,
      value: siteConfig.phoneDisplay || siteConfig.phone,
    },
  ];

  return (
    <section className="border-t border-border/60 pb-20 pt-6 md:pb-28 md:pt-8">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-paper/55 shadow-[0_16px_48px_rgba(0,0,0,0.04)] md:rounded-[2rem]">
            <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr] xl:grid-cols-[minmax(0,26rem)_1fr]">
              <aside className="border-b border-border/60 bg-canvas/35 p-8 md:p-10 lg:border-b-0 lg:border-e lg:border-border/60">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {contact.reachUs.eyebrow}
                </p>
                <h2 className="display mt-4 text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.1] text-ink">
                  {labels.formHeadline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  {contact.reachUs.intro}
                </p>

                <ul className="mt-10 space-y-7">
                  {channels.map((channel) => (
                    <li key={channel.label}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                        {channel.label}
                      </p>
                      <a
                        href={channel.href}
                        className="mt-1.5 inline-block text-base font-semibold text-ink transition hover:text-accent"
                      >
                        {channel.value}
                      </a>
                    </li>
                  ))}

                  <li>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      {labels.whatsapp}
                    </p>
                    <CtaLink href={getWhatsAppUrl()} variant="outline" size="sm" className="mt-2.5">
                      <IconWhatsApp className="size-4" />
                      {labels.whatsapp}
                    </CtaLink>
                  </li>
                </ul>

                <div className="mt-10 border-t border-border/60 pt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                    {labels.offices}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {legacySite.company.offices.map((office) => (
                      <li key={office.city} className="text-sm md:text-base">
                        <span className="font-semibold text-ink">{office.city}</span>
                        <span className="text-ink-muted"> — {office.country}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <div className="p-8 md:p-10">
                <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent lg:hidden">
                  {labels.formTitle}
                </p>
                <ContactForm locale={locale} topics={contact.formTopics} />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
