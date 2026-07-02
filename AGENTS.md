<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

Read the relevant guide in `node_modules/next/dist/docs/` before writing routing or metadata code.
<!-- END:nextjs-agent-rules -->

## Status

Structure-only scaffold — routing, layout shell, design system, i18n, and optional Sanity. No pages, sections, or copy yet.

---

## Visual language (light body sections)

### Keep

- `Section theme="light"` inside `SiteLightBand`
- `SectionHeader {...homepageSectionHeader}` for centered eyebrow
- Copy in `src/content/dictionaries.local.ts` — never inline in TSX
- `Reveal` for motion; no scale/grow on hover

### Do not introduce on light bands

- Dark sections below hero (hero is the dark exception)
- Glassmorphism on body cards
- Hover scale on cards

---

## Section shell

```tsx
<Section theme="light" id="my-section">
  <Container>
    <SectionHeader
      {...homepageSectionHeader}
      eyebrow={eyebrow}
      headline={title}
      subtitle={subtitle}
      className="mb-8 sm:mb-10"
    />
    {/* content */}
  </Container>
</Section>
```

---

## Content

| Layer | Location |
| --- | --- |
| UI strings | `src/content/dictionaries.local.ts` |
| Site config defaults | `src/lib/site-config.ts` |
| CMS override | Sanity → Site Settings + UI Copy |

Header nav, footer blocks, and CTAs render only when dictionary or site config has values.

---

## Components

- Server Components by default
- `"use client"` only for interactivity (nav, Reveal, forms)
