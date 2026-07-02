import { getSiteConfig } from "@/lib/site-config";
import { sanitizeBrandColors } from "@/lib/sanitize-css-color";

/** Injects CMS brand colors as CSS custom properties when configured. */
export function BrandTheme() {
  const brandColors = sanitizeBrandColors(getSiteConfig().brandColors);
  if (!brandColors?.accent && !brandColors?.primary) return null;

  const rules: string[] = [];
  if (brandColors.accent) {
    rules.push(`--color-accent: ${brandColors.accent};`);
  }
  if (brandColors.primary) {
    rules.push(`--color-primary: ${brandColors.primary};`);
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `:root { ${rules.join(" ")} }`,
      }}
    />
  );
}
