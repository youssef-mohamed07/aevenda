# Aevenda — Architecture

Structure-only Next.js scaffold.

## Foundation

- Locale-first routing (`/[locale]/…`)
- Centralized dictionaries (EN + AR)
- Shared UI primitives + design tokens
- Layout shell with conditional header/footer blocks
- Optional Sanity CMS with local fallback
- SEO helpers (metadata, sitemap, robots, JSON-LD)

## Routes

| Path | Status |
| --- | --- |
| `/[locale]/` | Empty homepage |
| `/studio` | Sanity Studio (when configured) |

## Content flow

```
dictionaries.local.ts  →  getDictionary()  →  page.tsx  →  sections/*.tsx
        ↑
   Sanity UI Copy (optional override)
```

## Related

- `AGENTS.md` — agent conventions
- `README.md` — setup
