"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageSlot } from "./ImageSlot";
import { CONTACT_HREF, hero } from "@/content/da";

const EASE = [0.2, 0.7, 0.2, 1] as const;
const enter = (delay: number, duration = 0.8) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, ease: EASE, delay },
});

export function Hero() {
  // The glow drifts down at a third of scroll speed, so it reads as further back than the content.
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 1200], [0, 420], { clamp: true });

  // The video frame grows from 92 % to full size as it scrolls into view.
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoIn } = useScroll({ target: videoRef, offset: ["start end", "start 30%"] });
  const videoScale = useTransform(videoIn, [0, 1], [0.92, 1]);

  return (
    <section className="relative px-[clamp(20px,4vw,48px)] pb-[clamp(48px,6vw,80px)] pt-[clamp(72px,10vw,150px)]">
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ y: glowY }}>
        <div className="absolute left-1/2 top-[-80px] h-[640px] w-[min(1000px,130vw)] -translate-x-1/2">
          <div
            className="h-full w-full animate-glow"
            style={{
              background:
                "radial-gradient(closest-side, rgba(240,154,108,.38), rgba(246,214,190,.25) 50%, rgba(0,0,0,0))",
            }}
          />
        </div>
      </motion.div>

      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center text-center">
        <motion.p
          {...enter(0)}
          className="mb-7 rounded-full border border-ink/[.09] bg-white/70 px-4 py-2 text-[14.5px] font-medium text-ink"
        >
          {hero.notice}
        </motion.p>

        <motion.h1
          {...enter(0.08)}
          className="m-0 max-w-[15ch] text-balance text-[clamp(37px,5.17vw,79px)] font-semibold leading-[.95] tracking-[-.045em]"
        >
          {hero.titleLead}{" "}
          <em className="font-serif text-[1.08em] font-normal italic tracking-[-.015em] text-clay-bright">
            {hero.titleAccent}
          </em>
        </motion.h1>

        <motion.p
          {...enter(0.18)}
          className="mt-7 max-w-[50ch] text-pretty text-[clamp(17px,1.45vw,20px)] leading-[1.55] text-muted"
        >
          {hero.lede}
        </motion.p>

        <motion.div
          {...enter(0.28)}
          className="mt-[clamp(32px,3.5vw,44px)] flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[16.5px] font-semibold leading-[1.2] text-white transition-colors hover:bg-clay"
          >
            <span>{hero.cta}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#byg"
            className="inline-flex items-center gap-2 text-[15.5px] font-medium text-muted transition-colors hover:text-ink"
          >
            <span>{hero.secondary}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        <motion.div {...enter(0.38, 1)} className="relative mt-[clamp(56px,7vw,96px)] w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[4%] bottom-[-8%] top-[10%] blur-[30px]"
            style={{ background: "radial-gradient(closest-side, rgba(240,154,108,.22), rgba(0,0,0,0))" }}
          />
          <motion.div
            ref={videoRef}
            style={{ scale: videoScale, transformOrigin: "50% 0" }}
            className="relative aspect-video overflow-hidden rounded-[clamp(18px,2.4vw,32px)] border border-ink/[.09] bg-white shadow-[0_0_0_8px_rgba(20,18,15,.022)] will-change-transform"
          >
            <ImageSlot placeholder={hero.videoPlaceholder} sizes="(min-width: 1180px) 1180px, 100vw" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
