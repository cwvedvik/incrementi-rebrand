# Incrementi — Rebrand & Repositioning

Rebrand and repositioning of **incrementi.no** — the AI transformation partner
for industrial, maritime and financial firms in the Nordics. A 99x company.

> **The compounding advantage** — the whole journey to AI-native.

## Live links

| What | URL |
|------|-----|
| **Website (production)** | https://incrementi-rebrand.vercel.app |
| **English** | https://incrementi-rebrand.vercel.app/en |
| **Brand & positioning strategy** | https://incrementi-rebrand.vercel.app/brand-strategy.html |
| Vercel project dashboard | https://vercel.com/cwv1/incrementi-rebrand |

Default language is **Norwegian**. Switch to English with the `NO | EN` control top-right. Every push to `main` deploys automatically via the Vercel GitHub integration.

## The web experience (V3 — production)

A Next.js app: the "living intelligence" homepage. A WebGL neural organism
(custom GLSL shaders, signal pulses, bloom) that visitors converse with —
pre-authored answers grounded in real offers, proposals and delivered client
work, streamed in sync with the brain's behaviour.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (deploys to Vercel with zero config)
```

### Structure

| Path | What it is |
|------|------------|
| `app/` | Next.js App Router: experience page, static SEO pages (`/journey`, `/work/[slug]`, `/about`, …), `/api/contact`, sitemap, robots, OG image, favicon |
| `components/brain/` | The WebGL organism: R3F scene, GLSL shaders, phase state machine, performance tiers |
| `components/chat/` | Conversation UI: stream, messages, dock, contact form |
| `components/sections/` | Top bar, hero, people grid, building blocks, case cards, logo strip, page shell |
| `lib/topics.tsx` | All authored content (typed) — edit answers here |
| `lib/cases.ts` | Client case studies (numbers-first) — **confirm metrics before launch** |
| `lib/clients.ts` | Client logo strip — **swap wordmarks for real logo files** |
| `lib/people.ts` | Partner/advisor profiles — **placeholders, swap before launch** |
| `lib/matching.ts` | Free-text question matching (EN + NO keywords, synonyms) |
| `lib/graph.ts` | Deterministic neural-graph generation |

### Before launch

- Replace placeholder profiles in `lib/people.ts` (names, roles, LinkedIn, photos)
- Confirm/extend case-study numbers in `lib/cases.ts` (metrics marked `confirm: true`)
- Add real client logo files and set `logoSrc` in `lib/clients.ts`
- Wire `/api/contact` to email/CRM (see comments in `app/api/contact/route.ts`)
- Replace the booking-call placeholder link in `components/chat/ContactForm.tsx`

### Brain behaviour

The organism has five phases — idle, listening, thinking, answering, docked —
driven by the conversation. Each answer fires a radial energy wave. Deep links:
`/?t=journey`, `/?t=proof`, etc. Falls back to a static poster for
`prefers-reduced-motion` / no WebGL.

## Reference documents

| File | What it is |
|------|------------|
| `Incrementi_Brand_Positioning_Strategy.html` | Source-of-truth brand & positioning strategy |
| `Incrementi_Web_Experience_Prototype.html` | The original v1 concept prototype (Canvas 2D) |
| `v1/` | Locked v1 snapshots (2026-07-01) |

## Visual system

- Canvas: near-black `#08090B` / deep navy `#0C1420`
- Text: warm off-white `#F4F2EE`
- Accent: metallic copper `#C98A5E`, secondary steel `#8FA3B8`
- Type: Fraunces (display serif) + DM Sans (body/UI), self-hosted via `next/font`
