import type { SeoMeta } from "@/types/seo";

export interface SiteConfigShape {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappMessage: string;
  address: {
    city: string;
    country: string;
    countryName: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    x: string;
  };
  logo?: string;
  favicon?: string;
  googleMapsUrl?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  defaultKeywords?: string[];
  defaultSeoByLocale?: { locale?: string; title?: string; description?: string }[];
  defaultOgImage?: string;
  brandColors?: { accent?: string; primary?: string };
  defaultSeo?: SeoMeta;
  footerExploreLinks?: { label: string; href: string }[];
}

let cachedSiteConfig: SiteConfigShape | null = null;

export function setSiteConfig(config: SiteConfigShape): void {
  cachedSiteConfig = config;
}

export function getSiteConfig(): SiteConfigShape {
  if (cachedSiteConfig) return cachedSiteConfig;

  return {
    name: "Aevenda",
    legalName: "Aevenda MBE",
    tagline: "From Concept to Creation",
    description:
      "Media, branding, and events company — events, branding, media, AV, registration, and exhibition booths.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aevenda.com",
    locale: "en_SA",
    email: "inquiry@aevenda.com",
    phone: "+966543937900",
    phoneDisplay: "+966 54 393 7900",
    whatsappMessage: "Hi Aevenda! I'd like to get in touch.",
    address: {
      city: "Riyadh",
      country: "SA",
      countryName: "Saudi Arabia",
    },
    social: {
      facebook: "https://www.facebook.com/people/Aevenda/61581525729154/",
      instagram: "",
      linkedin: "https://www.linkedin.com/company/aevenda-mbe/posts/?feedView=all",
      x: "https://x.com/aevendaofficial",
    },
    logo: "/brand/logo.svg",
    favicon: "/favicon.png",
  };
}

export function getWhatsAppUrl(message?: string): string {
  const config = getSiteConfig();
  const phone = config.phone.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message ?? config.whatsappMessage)}`;
}

export function getMailtoUrl(
  options: {
    email?: string;
    subject?: string;
    body?: string;
  } = {},
): string {
  const config = getSiteConfig();
  const { email = config.email, subject, body } = options;
  const parts: string[] = [];

  if (subject) {
    parts.push(`subject=${encodeURIComponent(subject)}`);
  }
  if (body) {
    parts.push(`body=${encodeURIComponent(body.replace(/\n/g, "\r\n"))}`);
  }

  const query = parts.join("&");
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}
