import { legacyAssets } from "@/content/legacy-assets";

const caseStudyImages: Record<string, string> = {
  "makmleen-sawa-al-tawuniya": legacyAssets.caseStudies.makmleenSawa,
  "tawuniya-interactive-booth": legacyAssets.caseStudies.tawuniyaBooth,
  "tawuniya-construction-insurance-booth": legacyAssets.caseStudies.tawuniyaBooth,
  "riyadh-bank-al-hilal": legacyAssets.caseStudies.riyadhBankHilal,
};

const serviceImages: Record<string, string> = {
  "event-management": legacyAssets.caseStudies.makmleenSawa,
  branding: legacyAssets.caseStudies.riyadhBankHilal,
  "content-production": legacyAssets.caseStudies.makmleenSawa,
  "technical-production": legacyAssets.caseStudies.tawuniyaBooth,
  "crowd-management": legacyAssets.caseStudies.tawuniyaBooth,
  "exhibition-booths": legacyAssets.caseStudies.tawuniyaBooth,
};

const blogImages: Record<string, string> = {
  "experiential-marketing-saudi-arabia": legacyAssets.caseStudies.makmleenSawa,
  "exhibition-booth-design-essentials": legacyAssets.caseStudies.tawuniyaBooth,
  "event-planning-brief-to-launch": legacyAssets.caseStudies.riyadhBankHilal,
  "brand-activations-lasting-impact": legacyAssets.caseStudies.makmleenSawa,
  "av-technical-production-guide": legacyAssets.caseStudies.tawuniyaBooth,
  "storytelling-events-build-trust": legacyAssets.caseStudies.riyadhBankHilal,
};

export function getBlogImage(slug: string): string | undefined {
  return blogImages[slug];
}

export function getCaseStudyImage(slug: string): string | undefined {
  return caseStudyImages[slug];
}

export function getServiceImage(slug: string): string | undefined {
  return serviceImages[slug];
}
