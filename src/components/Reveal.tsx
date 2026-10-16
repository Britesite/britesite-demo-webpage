"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const tags = {
  div: motion.div,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
  p: motion.p,
} as const;

type Tag = keyof typeof tags;

type RevealProps = HTMLMotionProps<"div"> & { as?: Tag };

/**
 * Fades an element up into place the first time it scrolls into view.
 * Pass `whileHover` etc. as usual: hover and reveal both drive Motion's `y`, so they never fight.
 */
export function Reveal({ as = "div", transition, ...props }: RevealProps) {
  const Component = tags[as] as typeof motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{
        opacity: { duration: 0.7, ease: "easeOut" },
        y: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
        ...transition,
      }}
      {...props}
    />
  );
}
