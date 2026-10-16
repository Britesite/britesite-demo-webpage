# Britesite homepage

Production build of the Claude Design prototype `project/Britesite Homepage v12.dc.html`.

**Stack:** Next.js 16 (App Router, statically prerendered) · React 19 · TypeScript · Tailwind CSS v4 · Motion (`motion/react`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/content/da.ts` | All Danish copy. Edit text here, not in components. |
| `src/app/globals.css` | Design tokens (`@theme`: colours, fonts, easings, keyframes), grain texture, reduced-motion rule. |
| `src/app/layout.tsx` | Fonts (Geist, Geist Mono, Instrument Serif via `next/font`), metadata, `MotionConfig`. |
| `src/components/Hero.tsx` | Headline, typewriter prompt (mode pill slides between chips), scroll parallax glow, video frame that grows into view. |
| `src/components/ProductDemo.tsx` | The Café Lærke demo window: chat + live preview. |
| `src/components/useDemoTimeline.ts` | rAF clock that drives the demo; pauses off-screen and on hover. Scene timings in `TIMING`. |
| `src/components/QualityOrbit.tsx` | Six orbiting quality bubbles that open on hover/focus. |
| `src/components/Sections.tsx` | Ejet af dig, stats, To veje ind, Om os. |
| `src/components/Reveal.tsx` | Fade-up-on-scroll wrapper used for headings, cards, list rows. |
| `src/components/ImageSlot.tsx` | Placeholder until a real image is supplied (`src`). |

## Still to supply

- **Hero video** – the frame in `Hero.tsx` shows a placeholder. Swap `ImageSlot` for a `<video>` once the screen recording exists.
- **Portraits** – put photos in `public/` and set `photo` for Marc and Amanda in `src/content/da.ts`.
- **Legal links** – Privatlivspolitik, Handelsbetingelser and Cookies point to `#`.

## Animation

Motion handles the hero entrance, the sliding mode pill, scroll-linked parallax (`useScroll`/`useTransform`), chat messages (`AnimatePresence` + layout), preview changes, reveals and the card hover springs. The ambient loops (glows, drift, marquee, orbit) are plain CSS keyframes. All motion respects `prefers-reduced-motion`.
