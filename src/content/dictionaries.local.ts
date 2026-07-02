import type { Locale } from "@/lib/i18n";

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

const emptyDictionary = {
  site: { home: "" },
  nav: {
    cta: "",
    items: [],
  },
  footer: {
    description: "",
    explore: "",
    contact: "",
    getInTouch: "",
    rights: "",
    social: {
      instagram: "",
      linkedin: "",
      x: "",
    },
  },
  home: {
    brand: "Aevenda",
    comingSoon: "Coming Soon",
    contact: {
      emailSubject: "",
      messageIntro: "",
    },
  },
} satisfies Dictionary;

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    ...emptyDictionary,
    site: { home: "Back to home" },
    home: {
      brand: "Aevenda",
      comingSoon: "Coming Soon",
      contact: emptyDictionary.home.contact,
    },
    footer: {
      ...emptyDictionary.footer,
      rights: "All rights reserved.",
    },
  },
  ar: {
    ...emptyDictionary,
    site: { home: "العودة للرئيسية" },
    home: {
      brand: "Aevenda",
      comingSoon: "Coming Soon",
      contact: emptyDictionary.home.contact,
    },
    footer: {
      ...emptyDictionary.footer,
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

export function getDictionaryLocal(locale: Locale): Dictionary {
  return dictionaries[locale];
}
