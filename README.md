# Aevenda

Structure-only Next.js scaffold — no content, just the foundation.

## What’s included

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shared UI primitives
- Bilingual routes: `/en`, `/ar`
- Layout shell (header, footer, main)
- Optional Sanity CMS (`/studio`)

## Quick start

```bash
cd /Users/youssef/Developer/aevenda
cp .env.example .env.local
npm install
npm run dev
```

- Site: http://localhost:3000/en
- Studio: http://localhost:3000/studio (after Sanity env vars are set)

## Project layout

```
src/
  app/[locale]/          ← routes (homepage is empty)
  components/
    sections/            ← add page sections here
    ui/                  ← design system
    layout/              ← header, footer
  content/
    dictionaries.local.ts ← UI strings (EN + AR)
  lib/                   ← i18n, seo, site-config
  sanity/                ← CMS fetch + transformers
```

## Build on top

1. Add sections under `src/components/sections/`
2. Add copy to `src/content/dictionaries.local.ts`
3. Wire sections in `src/app/[locale]/page.tsx`
4. Add nav links in `dictionaries.local.ts` → `nav.items`

See `AGENTS.md` for conventions.

## Sanity (optional)

Works offline with local dictionaries. To enable CMS:

1. Create a Sanity project
2. Fill `NEXT_PUBLIC_SANITY_*` in `.env.local`
3. Run `npm run setup:sanity` for webhook checklist
