import { getSiteConfig } from "@/lib/site-config";
import { placeholderUrl } from "@/lib/placeholders";

const LOGO_FALLBACK = "";
const FAVICON_FALLBACK = "/favicon.ico";
const OG_FALLBACK = placeholderUrl(1200, 630);

export function getSiteLogo(): string {
  return getSiteConfig().logo || LOGO_FALLBACK;
}

export function getSiteFavicon(): string {
  return getSiteConfig().favicon || FAVICON_FALLBACK;
}

export function getDefaultOgImage(): string {
  return getSiteConfig().defaultOgImage || OG_FALLBACK;
}
