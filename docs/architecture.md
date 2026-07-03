# Aevenda — Architecture

## Foundation

- Locale-first routing (`/[locale]/…`)
- Local dictionaries + legacy content archive
- Shared UI primitives + design tokens
- Layout shell (header, footer)
- Optional Sanity CMS with local fallback
- SEO helpers (metadata, sitemap, robots, JSON-LD)

## Routes

| Path | Purpose |
| --- | --- |
| `/[locale]/` | Homepage |
| `/[locale]/about` | About |
| `/[locale]/services` | Services overview |
| `/[locale]/services/[slug]` | Service detail |
| `/[locale]/case-studies` | Case studies |
| `/[locale]/case-studies/[slug]` | Case study detail |
| `/[locale]/contact` | Contact |
| `/[locale]/blog` | Blog (empty state) |
| `/studio` | Sanity Studio |

## Content flow

```
legacy-site.ts / dictionaries.local.ts  →  getDictionary()  →  pages  →  sections/*.tsx
                        ↑
              Sanity UI Copy (optional override)
```

## Related

- `AGENTS.md` — agent conventions
- `README.md` — setup
