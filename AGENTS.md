<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

Read the relevant guide in `node_modules/next/dist/docs/` before writing routing or metadata code.
<!-- END:nextjs-agent-rules -->

## Visual language — elegant / premium

- **Display:** Cormorant Garamond (EN) · Cairo (AR) — class `.display`
- **Body:** Geist Sans
- **Noir** `#0A0A0A` · **Canvas** `#F5F1EA` · **Accent** `#EF363B` (logo red)

Homepage: full-viewport cinematic hero → dark stats band → ivory/paper body sections → noir footer.

Header: fixed, transparent over hero (scroll → frosted paper bar).

## Section shell

```tsx
<Section tone="light | paper | dark">
  <Container>
    <SectionHeader {...homepageSectionHeader} eyebrow={…} headline={…} subtitle={…} />
  </Container>
</Section>
```

Copy lives in `src/content/` — not inline in TSX.

## Rules

- `Reveal` for scroll motion; no hover scale on cards
- Buttons: rounded-full, uppercase tracking, `light` variant on dark surfaces
- Glassmorphism: use `.glass`, `.glass-panel`, `.glass-panel-solid`, `.glass-pill`, `.glass-chip` from `globals.css`
