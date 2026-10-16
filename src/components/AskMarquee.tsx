import { asks } from "@/content/da";

const half = Math.ceil(asks.items.length / 2);
const rows = [asks.items.slice(0, half), asks.items.slice(half)];

/**
 * Example requests as the messages an owner would actually send, in two rows drifting in opposite
 * directions. Hovering a row pauses it. Capped to the content width so it doesn't run edge to edge.
 */
export function AskMarquee() {
  return (
    <section aria-label="Eksempler på rettelser" className="px-[clamp(20px,4vw,48px)] pb-[clamp(64px,8vw,112px)] pt-[clamp(24px,3vw,40px)]">
      <p className="mb-[22px] text-center font-mono text-xs font-medium uppercase tracking-[.16em] text-subtle">
        {asks.label}
      </p>
      <ul className="sr-only">
        {asks.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="fade-x mx-auto grid max-w-[1280px] gap-3 overflow-hidden">
        {rows.map((row, r) => (
          <ul
            key={r}
            className="marquee-track m-0 flex w-max animate-marquee list-none gap-3 p-0 py-1"
            style={{ animationDuration: r ? "52s" : "44s", animationDirection: r ? "reverse" : "normal" }}
          >
            {[...row, ...row].map((item, i) => (
              <li
                key={i}
                className="whitespace-nowrap rounded-[18px_18px_4px_18px] border border-ink/[.08] bg-white px-[18px] py-3 text-[15.5px] leading-[1.35] text-ink-soft shadow-[0_10px_24px_-18px_rgba(20,18,15,.35)] transition-[border-color,color,transform] duration-[250ms] hover:-translate-y-0.5 hover:border-clay/60 hover:text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
