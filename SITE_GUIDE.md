# Site guide — Britesite (demo copy)

A single-page Danish marketing site for Britesite. Next.js 16 App Router, statically prerendered, Tailwind CSS v4, Motion.

## Where things live

| What | Where |
|---|---|
| All visible text (Danish) | `src/content/da.ts`. Edit words here, not in components. |
| Page order (sections) | `src/app/page.tsx` |
| Sections | `src/components/` (`Hero.tsx`, `AskMarquee.tsx`, `ProductDemo.tsx`, `QualityInspector.tsx`, `Sections.tsx` holds Ejet af dig / stats / To veje ind / Om os, `ClosingCta.tsx`, `Footer.tsx`) |
| Colours, fonts, spacing tokens | `src/app/globals.css` (`@theme`) |
| Images | `public/` |

Buttons are links styled with Tailwind classes; copy the classes from an existing button (e.g. the hero's "Kom i gang") to keep new buttons on-brand. The contact address is `CONTACT_HREF` in `src/content/da.ts`.

## Checks

`npm run lint` and `npm run build`. There is no `npm run check`.
