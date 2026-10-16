"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { CONTACT_HREF, closing } from "@/content/da";

export function ClosingCta() {
  const ref = useRef<HTMLElement>(null);
  // Glow moves against the scroll (−18 % of the section's distance from viewport centre), so it sits further back.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, (p) => {
    const el = ref.current;
    if (!el) return 0;
    const travel = window.innerHeight + el.offsetHeight;
    // p = 0: section top at viewport bottom; p = 1: section bottom at viewport top.
    const centreOffset = travel * (0.5 - p);
    return centreOffset * -0.18;
  });

  return (
    <section ref={ref} className="relative overflow-hidden px-[clamp(20px,4vw,48px)] py-[clamp(96px,12vw,180px)]">
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ y: glowY }}>
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[min(1100px,140vw)] -translate-x-1/2 -translate-y-1/2">
          <div
            className="h-full w-full animate-glow"
            style={{
              background: "radial-gradient(closest-side, rgba(240,154,108,.40), rgba(246,214,190,.25) 55%, rgba(0,0,0,0))",
            }}
          />
        </div>
      </motion.div>
      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center text-center">
        <Reveal as="h2" className="m-0 text-balance text-[clamp(38px,5.44vw,87px)] font-semibold leading-[.92] tracking-[-.05em]">
          {closing.title}
        </Reveal>
        <p className="mb-0 mt-6 text-[clamp(18px,1.6vw,22px)] text-muted">{closing.lede}</p>
        <a
          href={CONTACT_HREF}
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-[18px] text-[17px] font-semibold leading-[1.2] text-white transition-colors hover:bg-clay"
        >
          <span>{closing.cta}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
