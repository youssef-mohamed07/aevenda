# Aevenda

Bilingual marketing site for Aevenda MBE — events, branding, media, and exhibitions.

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

- Site: http://localhost:3000/en
- Studio: http://localhost:3000/studio (optional Sanity CMS)

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Locales: `/en`, `/ar`
- Optional Sanity CMS with local fallback

## Project layout

```
src/
  app/[locale]/          ← routes
  components/sections/   ← page sections
  components/ui/         ← design system
  content/               ← dictionaries + legacy copy
  lib/                   ← i18n, seo, site-config
```

See `AGENTS.md` for UI conventions.
