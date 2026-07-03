/**
 * Media URLs from the legacy WordPress site (aevenda.com).
 * Local copies live under /public/brand when downloaded.
 */
export const legacyAssets = {
  brand: {
    logoSvg: "https://aevenda.com/wp-content/themes/Avenda/assets/images/logo.svg",
    logoLocal: "/brand/logo.svg",
    favicon32: "https://aevenda.com/wp-content/uploads/2025/08/cropped-fav-32x32.png",
    favicon192: "https://aevenda.com/wp-content/uploads/2025/08/cropped-fav-192x192.png",
    faviconLocal: "/favicon.png",
  },
  caseStudies: {
    makmleenSawa: "https://aevenda.com/wp-content/themes/Avenda/assets/images/DSC09227.jpg",
    tawuniyaBooth:
      "https://aevenda.com/wp-content/themes/Avenda/assets/images/WhatsApp Image 2025-10-09 at 7.28.02 PM.jpeg",
    riyadhBankHilal:
      "https://aevenda.com/wp-content/themes/Avenda/assets/images/WhatsApp Image 2025-08-31 at 01.39.59 (2).jpeg",
  },
  /** Partner/client logos — see src/content/partners.ts for the full list */
  clientsDir: "/clients",
} as const;

/** Map old WordPress paths → suggested new routes */
export const legacyRouteMap = {
  "/": "/",
  "/about-us/": "/about",
  "/our-service/": "/services",
  "/event-managment/": "/services/event-management",
  "/branding/": "/services/branding",
  "/content-production/": "/services/content-production",
  "/technical-production/": "/services/technical-production",
  "/crowd-management/": "/services/crowd-management",
  "/exhibition-booths/": "/services/exhibition-booths",
  "/case-study/": "/case-studies",
  "/case-study-info/": "/case-studies",
  "/blog/": "/blog",
  "/contact-us/": "/contact",
} as const;
