# Site guide — Café Lærke

A single-page Danish website for a bakery and café in Aarhus C. Next.js 16 App Router, statically prerendered, Tailwind CSS v4.

## Where things live

| What | Where |
|---|---|
| All visible text (Danish), opening hours, menu and prices | `src/content/da.ts`. Edit words here, not in components. |
| Page order (sections) | `src/app/page.tsx` |
| Sections | `src/components/`: `Header.tsx`, `Hero.tsx` (title beside the arched photograph), `Visit.tsx` (Åbningstider and Find os), `Menu.tsx` (Fra disken), `About.tsx` (Om os), `Footer.tsx` |
| Colours and fonts | `src/app/globals.css` (`@theme`): deep glaze blue with butter, Cormorant for headings, Jost for text. Photographs are in `public/images` |

The look is bread on hand-painted porcelain: large, light Cormorant headings, fine lines instead of boxes, photographs shaped like an oven's arch with a thin outline around them. Keep new sections and pages in it: no cards or rounded boxes, plenty of air, the same `max-w-[1240px] px-8` and the same headings (`font-serif font-normal leading-none tracking-[-.02em]`, at `text-[clamp(48px,5.6vw,76px)]`). A quote or a review is large Cormorant italic (`text-[clamp(36px,4vw,52px)]`) with the name in small text below it, not a card.

To make the site light, keep every colour's name and use these values: paper `#f7f6f1`, card `#ffffff`, ink `#1b2c52`, muted `#5d6a82`, line `#d9dde3`, accent `#1f3a7a`, accent-ink `#f7f6f1`.

Buttons are links styled with Tailwind classes; copy the classes from an existing button (the header's "Book bord" for a solid one) to keep new buttons on-brand. Booking goes to `site.bookHref` in `src/content/da.ts`.

## Checks

`npm run lint` and `npm run build`. There is no `npm run check`.
