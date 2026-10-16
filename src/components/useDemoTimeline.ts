"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/** Timings for one scene of the product demo, in ms from the scene's start. */
export const TIMING = {
  duration: 8200,
  typeStart: 250,
  send: 1700,
  think: 2000,
  reply: 3300,
  fadeIn: 350,
  fadeOut: 450,
} as const;

export type DemoClock = { scene: number; elapsed: number };

type Options<T> = {
  scenes: number;
  /** Section that must be at least 35 % visible for the demo to run. */
  section: RefObject<HTMLElement | null>;
  /** Derive what the UI shows from the clock. The component only re-renders when this changes. */
  derive: (clock: DemoClock) => T;
  /** Comparable key for a derived frame. */
  keyOf: (frame: T) => string;
};

/**
 * Drives the demo on requestAnimationFrame. Time only advances while the section is in view and the
 * pointer is not over the demo, and the first time the section appears the demo starts from the top.
 */
export function useDemoTimeline<T>({ scenes, section, derive, keyOf }: Options<T>) {
  const clock = useRef<DemoClock>({ scene: 0, elapsed: 0 });
  const held = useRef(false);
  const inView = useRef(false);
  const deriveRef = useRef(derive);
  const keyOfRef = useRef(keyOf);
  const [frame, setFrame] = useState(() => derive({ scene: 0, elapsed: 0 }));
  const lastKey = useRef(keyOf(frame));

  useEffect(() => {
    deriveRef.current = derive;
    keyOfRef.current = keyOf;
  });

  useEffect(() => {
    const el = section.current;
    if (!el) return;
    let seen = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        if (entry.isIntersecting && !seen) {
          seen = true;
          clock.current = { scene: 0, elapsed: 0 };
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(200, now - last);
      last = now;
      if (inView.current && !held.current) {
        let { scene, elapsed } = clock.current;
        elapsed += dt;
        if (elapsed >= TIMING.duration) {
          scene = (scene + 1) % scenes;
          elapsed = 0;
        }
        clock.current = { scene, elapsed };
        const next = deriveRef.current(clock.current);
        const key = keyOfRef.current(next);
        if (key !== lastKey.current) {
          lastKey.current = key;
          setFrame(next);
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [scenes, section]);

  return {
    frame,
    hold: () => {
      held.current = true;
    },
    release: () => {
      held.current = false;
    },
  };
}
