import type { Locale } from "@/lib/i18n";
import { getLegacyContent, legacySite } from "@/content/legacy-site";

export interface NavItem {
  label: string;
  href: string;
}

export interface HomeContactContent {
  emailSubject: string;
  messageIntro: string;
}

export interface Dictionary {
  site: {
    home: string;
  };
  nav: {
    cta: string;
    items: readonly NavItem[];
  };
  footer: {
    description: string;
    explore: string;
    contact: string;
    getInTouch: string;
    rights: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
      x: string;
    };
  };
  home: {
    brand: string;
    comingSoon: string;
    contact: HomeContactContent;
  };
}

function buildDictionary(locale: Locale): Dictionary {
  const legacy = getLegacyContent(locale);
  const { company } = legacySite;

  return {
    site: {
      home: locale === "ar" ? "العودة للرئيسية" : "Back to home",
    },
    nav: {
      cta: locale === "ar" ? "تواصل معنا" : "Contact us",
      items: legacy.nav.map(({ label, href }) => ({ label, href })),
    },
    footer: {
      description: legacy.about.intro,
      explore: legacy.footer.pagesTitle,
      contact: legacy.footer.contactTitle,
      getInTouch: locale === "ar" ? "تواصل معنا" : "Get in touch",
      rights: legacy.footer.rights,
      social: {
        facebook: "Facebook",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        x: "X",
      },
    },
    home: {
      brand: company.name,
      comingSoon: "Coming Soon",
      contact: {
        emailSubject: locale === "ar" ? "استفسار — Aevenda" : "Inquiry — Aevenda",
        messageIntro:
          locale === "ar"
            ? "مرحباً Aevenda،\n\nأود مناقشة مشروع.\n\n"
            : "Hi Aevenda,\n\nI'd like to discuss a project.\n\n",
      },
    },
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en: buildDictionary("en"),
  ar: buildDictionary("ar"),
};

export function getDictionaryLocal(locale: Locale): Dictionary {
  return dictionaries[locale];
}
