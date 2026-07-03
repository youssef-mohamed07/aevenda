#!/usr/bin/env tsx
/**
 * Re-scrape aevenda.com and print a summary.
 * Full content lives in src/content/legacy-site.ts (curated archive).
 *
 * Usage: npm run scrape:legacy
 */
const PAGES = [
  "https://aevenda.com/",
  "https://aevenda.com/about-us/",
  "https://aevenda.com/our-service/",
  "https://aevenda.com/contact-us/",
  "https://aevenda.com/case-study/",
  "https://aevenda.com/case-study-info/?id=3",
  "https://aevenda.com/case-study-info/?id=4",
  "https://aevenda.com/case-study-info/?id=5",
  "https://aevenda.com/event-managment/",
  "https://aevenda.com/branding/",
  "https://aevenda.com/content-production/",
  "https://aevenda.com/technical-production/",
  "https://aevenda.com/crowd-management/",
  "https://aevenda.com/exhibition-booths/",
  "https://aevenda.com/ar/",
  "https://aevenda.com/ar/about-us/",
];

async function fetchTitle(url: string): Promise<string> {
  const res = await fetch(url, { signal: AbortSignal.timeout(20_000) });
  const html = await res.text();
  const match = html.match(/<title>([^<]+)<\/title>/i);
  return match?.[1]?.trim() ?? "(no title)";
}

async function main() {
  console.log("Legacy site scrape summary\n");
  for (const url of PAGES) {
    try {
      const title = await fetchTitle(url);
      console.log(`✓ ${url}\n  → ${title}`);
    } catch (error) {
      console.log(`✗ ${url}\n  → ${error instanceof Error ? error.message : error}`);
    }
  }
  console.log("\nCurated archive: src/content/legacy-site.ts");
  console.log("Assets: src/content/legacy-assets.ts");
}

main();
