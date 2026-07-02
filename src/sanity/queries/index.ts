export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  companyName,
  legalName,
  tagline,
  description,
  logo{ asset, alt },
  favicon{ asset, alt },
  email,
  phone,
  phoneDisplay,
  whatsappMessage,
  addressCity,
  addressCountry,
  addressCountryName,
  googleMapsUrl,
  socialLinks[]{ platform, url, label },
  brandColors,
  defaultSeo,
  defaultKeywords,
  defaultSeoByLocale,
  ogImage{ asset, alt },
  footerExploreLinks[]{ label, href }
}`;

export const DICTIONARY_QUERY = `*[_type == "dictionary" && locale == $locale][0]{
  content,
  siteNav{
    ctaLabel,
    items[]{ label, href }
  },
  siteFooter{
    description,
    explore,
    contact,
    getInTouch,
    rights
  },
  homeContact{
    emailSubject,
    messageIntro
  }
}`;

export const NOT_FOUND_QUERY = `*[_type == "notFoundPage" && locale == $locale][0]{
  title,
  description,
  headline,
  body,
  ctaLabel,
  ctaHref
}`;
