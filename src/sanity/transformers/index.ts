import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/dictionaries";
import { getDictionaryLocal } from "@/content/dictionaries.local";
import type { SiteConfigShape } from "@/lib/site-config";
import { sanitizeBrandColors } from "@/lib/sanitize-css-color";
import { toImageSrc, toSeoMeta } from "@/sanity/transformers/shared";

type SanitySiteSettings = {
  companyName?: string;
  legalName?: string;
  tagline?: string;
  description?: string;
  logo?: { asset?: unknown; alt?: string };
  favicon?: { asset?: unknown; alt?: string };
  email?: string;
  phone?: string;
  phoneDisplay?: string;
  whatsappMessage?: string;
  addressCity?: string;
  addressCountry?: string;
  addressCountryName?: string;
  googleMapsUrl?: string;
  socialLinks?: { platform?: string; url?: string }[];
  brandColors?: { accent?: string; primary?: string };
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  defaultSeo?: Parameters<typeof toSeoMeta>[0];
  defaultKeywords?: string[];
  defaultSeoByLocale?: { locale?: string; title?: string; description?: string }[];
  ogImage?: { asset?: unknown; alt?: string };
  footerExploreLinks?: { label?: string; href?: string }[];
};

export function toSiteConfig(
  data: SanitySiteSettings | null | undefined,
): SiteConfigShape | null {
  if (!data?.companyName) return null;

  const instagram = data.socialLinks?.find((link) => link.platform === "instagram")?.url;
  const facebook = data.socialLinks?.find((link) => link.platform === "facebook")?.url;
  const linkedin = data.socialLinks?.find((link) => link.platform === "linkedin")?.url;
  const x = data.socialLinks?.find((link) => link.platform === "x")?.url;

  return {
    name: data.companyName,
    legalName: data.legalName ?? data.companyName,
    tagline: data.tagline ?? "",
    description: data.description ?? "",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aevenda.com",
    locale: "en_SA",
    email: data.email ?? "",
    phone: data.phone ?? "",
    phoneDisplay: data.phoneDisplay ?? data.phone ?? "",
    whatsappMessage: data.whatsappMessage ?? "",
    address: {
      city: data.addressCity ?? "",
      country: data.addressCountry ?? "SA",
      countryName: data.addressCountryName ?? "Saudi Arabia",
    },
    social: {
      facebook: facebook ?? "",
      instagram: instagram ?? "",
      linkedin: linkedin ?? "",
      x: x ?? "",
    },
    logo: toImageSrc(data.logo),
    favicon: toImageSrc(data.favicon),
    googleMapsUrl: data.googleMapsUrl,
    googleAnalyticsId: data.googleAnalyticsId,
    googleTagManagerId: data.googleTagManagerId,
    defaultKeywords: data.defaultKeywords,
    defaultSeoByLocale: data.defaultSeoByLocale,
    defaultOgImage: toImageSrc(data.ogImage),
    brandColors: sanitizeBrandColors(data.brandColors),
    defaultSeo: toSeoMeta(data.defaultSeo),
    footerExploreLinks: data.footerExploreLinks
      ?.filter((link) => link.label && link.href)
      .map((link) => ({ label: link.label!, href: link.href! })),
  };
}

type SanityDictionary = {
  content?: string;
  siteNav?: {
    ctaLabel?: string;
    items?: { label?: string; href?: string }[];
  };
  siteFooter?: {
    description?: string;
    explore?: string;
    contact?: string;
    getInTouch?: string;
    rights?: string;
  };
  homeContact?: {
    emailSubject?: string;
    messageIntro?: string;
  };
};

export function toDictionary(
  data: SanityDictionary | null | undefined,
  locale: Locale,
): Dictionary | null {
  const base = getDictionaryLocal(locale);
  if (!data) return null;

  let merged: Dictionary = base;

  if (data.content) {
    try {
      merged = { ...base, ...JSON.parse(data.content) };
    } catch {
      merged = base;
    }
  }

  return {
    ...merged,
    nav: {
      cta: data.siteNav?.ctaLabel ?? merged.nav.cta,
      items:
        data.siteNav?.items
          ?.filter((item) => item.label && item.href)
          .map((item) => ({ label: item.label!, href: item.href! })) ??
        merged.nav.items,
    },
    footer: {
      ...merged.footer,
      description: data.siteFooter?.description ?? merged.footer.description,
      explore: data.siteFooter?.explore ?? merged.footer.explore,
      contact: data.siteFooter?.contact ?? merged.footer.contact,
      getInTouch: data.siteFooter?.getInTouch ?? merged.footer.getInTouch,
      rights: data.siteFooter?.rights ?? merged.footer.rights,
    },
    home: {
      ...merged.home,
      contact: {
        ...merged.home.contact,
        emailSubject: data.homeContact?.emailSubject ?? merged.home.contact.emailSubject,
        messageIntro: data.homeContact?.messageIntro ?? merged.home.contact.messageIntro,
      },
    },
  };
}
