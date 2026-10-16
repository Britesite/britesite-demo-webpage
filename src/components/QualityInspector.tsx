"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { quality } from "@/content/da";

const STEP_MS = 5200;
const LAST = quality.items.length - 1;
const DEVICES = ["Computer", "Tablet", "Mobil"] as const;

// Some checks play out in steps: [delay ms, phase] pairs, replayed on every activation.
// `still` is the one frame shown under reduced motion; `ms` overrides how long the check stays up.
const SEQUENCES: Partial<Record<string, { steps: [number, number][]; still: number; ms?: number }>> = {
  // Computer, tablet, mobile, then back out through tablet to computer.
  responsive: { steps: [[600, 1], [1800, 2], [3400, 1], [4600, 0]], still: 2, ms: 6400 },
  // The Menu page is fetched in the background, then the cursor clicks and it is simply there.
  speed: { steps: [[1000, 1], [1700, 2], [2600, 3]], still: 3 },
};

const css = (vars: Record<string, string>) => vars as React.CSSProperties;

/**
 * The six things every site includes, as a list the eye lands on first, beside the café site from
 * the demo above. Choosing a word makes that check visible on the site itself.
 */
export function QualityInspector() {
  const ref = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const seen = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const visible = useInView(ref);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0); // bumps on every activation so one-shot animations replay
  const [phase, setPhase] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [touched, setTouched] = useState(false);

  const check = quality.items[active].id;
  const autoplay = seen && !touched && !reduce;

  const go = (i: number) => {
    setActive(i);
    setRun((r) => r + 1);
    setPhase(0);
  };
  const choose = (i: number) => {
    setTouched(true);
    if (i !== active) go(i);
  };

  useEffect(() => {
    const seq = SEQUENCES[check];
    if (!seq || !seen) return;
    const t = reduce ? [setTimeout(() => setPhase(seq.still))] : seq.steps.map(([ms, p]) => setTimeout(() => setPhase(p), ms));
    return () => t.forEach(clearTimeout);
  }, [check, run, seen, reduce]);

  const onKey = (e: KeyboardEvent) => {
    const to = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: LAST }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    const i = (to + quality.items.length) % quality.items.length;
    choose(i);
    tabs.current[i]?.focus();
  };

  return (
    <section className="px-[clamp(20px,4vw,48px)] py-[clamp(72px,9vw,136px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-end justify-between gap-x-[clamp(32px,5vw,80px)] gap-y-[22px]">
          <Reveal
            as="h2"
            className="m-0 max-w-[14ch] flex-[1_1_420px] text-balance text-[clamp(30px,4.10vw,61px)] font-semibold leading-[.98] tracking-[-.04em]"
          >
            {quality.title}
          </Reveal>
          <p className="m-0 max-w-[46ch] flex-[1_1_320px] text-pretty text-[clamp(17px,1.4vw,19px)] text-muted">{quality.lede}</p>
        </div>

        <div className="qi-stage" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          <div role="tablist" aria-orientation="vertical" aria-label="Det får du med" className="qi-list" onKeyDown={onKey}>
            {quality.items.map((item, i) => (
              <div key={item.id} className="qi-item" data-on={i === active}>
                <button
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`qi-tab-${item.id}`}
                  aria-selected={i === active}
                  aria-controls={`qi-panel-${item.id}`}
                  tabIndex={i === active ? 0 : -1}
                  className="qi-word"
                  onClick={() => choose(i)}
                >
                  <Tick />
                  {item.title}
                </button>
                <div role="tabpanel" id={`qi-panel-${item.id}`} aria-labelledby={`qi-tab-${item.id}`} hidden={i !== active} className="qi-say">
                  <p>{item.body}</p>
                </div>
                {i === active && autoplay && (
                  <span
                    key={run}
                    className="qi-progress"
                    style={css({ "--step": `${SEQUENCES[check]?.ms ?? STEP_MS}ms`, animationPlayState: hovering || !visible ? "paused" : "running" })}
                    onAnimationEnd={() => go(active === LAST ? 0 : active + 1)}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="qi">
            <div ref={ref} className="qi-window" data-live={seen} data-check={check} data-phase={phase}>
              <div className="qi-browser" aria-hidden="true">
                <div className="qi-bar">
                  <span className="qi-lock">
                    <svg viewBox="0 0 10 12" fill="none">
                      <rect x="1" y="5" width="8" height="6.2" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M3 5V3.6a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                  <span className="qi-url">
                    <span className="qi-proto">https://</span>cafelaerke.dk<span className="qi-path">/menu</span>
                  </span>
                </div>
  
                <div className="qi-view">
                  <CafePage device={DEVICES[check === "responsive" ? phase : 0]} />
  
                  <div className="qi-scrim" />
  
                  <div className="qi-serp">
                    <p className="qi-caption">Sådan kan siden se ud på Google</p>
                    <div className="qi-hit">
                      <div className="qi-site">
                        <span className="qi-fav">L</span>
                        <span>
                          <b>Café Lærke</b>
                          <span className="qi-crumb">cafelaerke.dk</span>
                        </span>
                      </div>
                      <p className="qi-hit-title">Café Lærke · Bageri og café i Aarhus C</p>
                      <p className="qi-hit-desc">Morgenbrød og kaffe siden 1998. Åbent alle dage fra kl. 7, og du kan booke bord online.</p>
                    </div>
                  </div>
  
                  <div className="qi-cookie">
                    <p>
                      <b>Cookies</b> Vi bruger kun nødvendige cookies, medmindre du siger ja til mere.
                    </p>
                    <div className="qi-choices">
                      <span className="qi-same">begge ét klik</span>
                      <span className="qi-cbtn qi-cbtn--line">Kun nødvendige</span>
                      <span className="qi-cbtn">Acceptér alle</span>
                    </div>
                  </div>
  
                  <Readout id="speed" label="Menu-siden var">klar før klikket</Readout>
                  <Readout id="gdpr" label="Sporing før samtykke">Ingen</Readout>
                  <Readout id="a11y" label="Kontrast">Let at læse</Readout>
                </div>
  
                <div className="qi-secure">
                  <p className="qi-secure-head">
                    <Tick /> Forbindelsen er sikker
                  </p>
                  <p>
                    <Tick /> HTTPS-certifikatet fornyes automatisk
                  </p>
                  <p>
                    <Tick /> Sikkerhedsadvarsler overvåges automatisk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MENU = [
  { title: "Bagværk", items: [["Croissant", "28 kr"], ["Kanelsnegl", "32 kr"], ["Rugbrød med ost", "48 kr"]] },
  { title: "Kaffe", items: [["Espresso", "32 kr"], ["Cappuccino", "42 kr"], ["Caffè latte", "45 kr"]] },
] as const;

function CafePage({ device }: { device: string }) {
  return (
    <div className="qi-page">
      <div className="qi-ruler">
        <span>{device}</span>
      </div>
      <div className="qi-nav">
        <span className="qi-brand">Café Lærke</span>
        <span className="qi-links">
          <span className="qi-menu-link">
            Menu
            <span className="qi-prefetch">
              <span className="qi-prefetch-busy">Hentes på forhånd…</span>
              <span className="qi-prefetch-done">Hentet på forhånd ✓</span>
            </span>
            <svg className="qi-cursor" viewBox="0 0 16 20">
              <path d="M1.5 1.5v15l4-3.6 2.6 5.6 2.6-1.2-2.5-5.4h5.3z" fill="#14120f" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Om os</span>
          <span>Kontakt</span>
        </span>
        <span className="qi-burger" />
      </div>
      <div className="qi-menu-page">
        <p className="qi-menu-title">Menu</p>
        <div className="qi-menu-cols">
          {MENU.map((group) => (
            <div key={group.title}>
              <p className="qi-label">{group.title}</p>
              {group.items.map(([name, price]) => (
                <p key={name} className="qi-row">
                  <span>{name}</span>
                  <span>{price}</span>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="qi-hero">
        <p className="qi-eyebrow">Bageri og café · Aarhus C</p>
        <p className="qi-h1">
          <span className="qi-tag">Overskrift</span>
          Morgenbrød og kaffe siden 1998
        </p>
        <div className="qi-ctas">
          <span className="qi-btn qi-btn--solid">Se menuen</span>
          <span className="qi-btn qi-btn--line">Book bord</span>
          <span className="qi-tag qi-tag--keys">Tastatur ⇥</span>
        </div>
      </div>
      <div className="qi-info">
        <div>
          <p className="qi-label">Åbningstider</p>
          <p className="qi-row">
            <span>Man – fre</span>
            <span>7–17</span>
          </p>
          <p className="qi-row">
            <span>Lør – søn</span>
            <span>8–14</span>
          </p>
        </div>
        <div>
          <p className="qi-label">Find os</p>
          <p className="qi-addr">
            Jægergårdsgade 41
            <br />
            8000 Aarhus C
          </p>
        </div>
      </div>
    </div>
  );
}

function Readout({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="qi-readout" data-for={id}>
      <span className="qi-readout-label">{label}</span>
      <span className="qi-readout-value">{children}</span>
    </div>
  );
}

function Tick() {
  return (
    <svg className="qi-tick" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" />
      <path d="M5 8.2l2 2 4-4.2" />
    </svg>
  );
}
