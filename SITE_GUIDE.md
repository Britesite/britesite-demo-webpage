# Site guide — Café Lærke

A single-page Danish website for a bakery and café in Aarhus C. Next.js 16 App Router, statically prerendered, Tailwind CSS v4.

## Where things live

| What | Where |
|---|---|
| All visible text (Danish), opening hours, menu and prices | `src/content/da.ts`. Edit words here, not in components. |
| Page order (sections) | `src/app/page.tsx` |
| Sections | `src/components/`: `Header.tsx`, `Hero.tsx` (the brown card at the top), `Visit.tsx` (Åbningstider and Find os), `Menu.tsx` (Fra disken), `About.tsx` (Om os), `Footer.tsx` |
| Colours and fonts | `src/app/globals.css` (`@theme`): coffee brown on warm paper, Fraunces for headings, DM Sans for text |

Buttons are links styled with Tailwind classes; copy the classes from an existing button (the header's "Book bord" for a solid one) to keep new buttons on-brand. Booking goes to `site.bookHref` in `src/content/da.ts`.

## Checks

`npm run lint` and `npm run build`. There is no `npm run check`.
