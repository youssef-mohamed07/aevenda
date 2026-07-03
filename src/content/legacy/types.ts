export interface LegacyStat {
  value: number;
  label: string;
}

export interface LegacyNavItem {
  label: string;
  /** Suggested path in the new App Router site */
  href: string;
  /** Original WordPress path on aevenda.com */
  legacyPath: string;
}

export interface LegacyBlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  paragraphs: string[];
}

export interface LegacyCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  legacyPath: string;
  stats?: { value: number; label: string }[];
  about?: string;
  scope?: string[];
}

export interface LegacyTestimonial {
  name: string;
  quote: string;
}

export interface LegacyServicePage {
  slug: string;
  legacyPath: string;
  title: string;
  intro: string;
  sections?: { title: string; body: string }[];
}

export interface LegacyOffice {
  city: string;
  country: string;
}

export interface LegacyLocaleContent {
  nav: LegacyNavItem[];
  home: {
    hero: { title: string; subtitle: string; cta: string };
    trust: { title: string; subtitle: string };
    services: { title: string; intro: string; viewAll: string };
    caseStudies: { title: string; subtitle: string; viewAll: string };
    testimonials: { title: string };
    newsletter: string;
  };
  about: {
    title: string;
    intro: string;
    mission: { title: string; body: string };
    vision: { title: string; body: string };
    values: { title: string; items: { title: string; body: string }[] };
    cta: { title: string; button: string };
  };
  aboutPage: {
    scrollHint: string;
    portrait: { headline: string };
    valuesHeadline: string;
    presence: { eyebrow: string; title: string };
    closing: { body: string };
  };
  contact: {
    title: string;
    subtitle: string;
    formTopics: string[];
    reachUs: { eyebrow: string; intro: string };
  };
  servicesOverview: {
    title: string;
    intro: string;
    categories: string[];
  };
  servicesPage: {
    intro: {
      eyebrow: string;
      scrollHint: string;
    };
    process: {
      eyebrow: string;
      title: string;
      intro: string;
      steps: { title: string; body: string }[];
    };
    proof: {
      eyebrow: string;
      title: string;
    };
    spotlight: {
      eyebrow: string;
      cta: string;
    };
    quote: {
      eyebrow: string;
    };
    closing: {
      title: string;
      body: string;
      button: string;
    };
  };
  caseStudiesPage: {
    intro: { eyebrow: string; scrollHint: string };
    featured: { eyebrow: string };
    closing: { title: string; body: string; button: string };
  };
  blogPage: {
    intro: { eyebrow: string; subtitle: string; scrollHint: string };
    featured: { eyebrow: string };
  };
  blogPosts: LegacyBlogPost[];
  services: LegacyServicePage[];
  caseStudies: LegacyCaseStudy[];
  testimonials: LegacyTestimonial[];
  footer: {
    contactTitle: string;
    pagesTitle: string;
    servicesTitle: string;
    blogTitle: string;
    rights: string;
  };
  cta: { title: string; button: string };
}

export interface LegacySiteArchive {
  meta: {
    source: string;
    scrapedAt: string;
    note: string;
  };
  company: {
    name: string;
    legalName: string;
    tagline: string;
    founded: number;
    email: string;
    phone: string;
    phoneDisplay: string;
    offices: LegacyOffice[];
    social: {
      facebook: string;
      linkedin: string;
      x: string;
    };
    stats: LegacyStat[];
  };
  en: LegacyLocaleContent;
  ar: LegacyLocaleContent;
}
