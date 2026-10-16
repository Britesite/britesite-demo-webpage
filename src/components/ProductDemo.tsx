"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BrandMark } from "./BrandMark";
import { ArrowUp } from "./icons";
import { Reveal } from "./Reveal";
import { TIMING, useDemoTimeline, type DemoClock } from "./useDemoTimeline";
import { demo } from "@/content/da";

const EASE = [0.2, 0.7, 0.2, 1] as const;
const LAST = demo.scenes.length - 1;

type Message = { id: string; kind: "user" | "bot" | "think"; text: string };

/** Everything the demo window shows at a given moment, derived from the clock. */
function derive({ scene, elapsed }: DemoClock) {
  const S = demo.scenes;
  const cur = S[scene];
  const done = elapsed >= TIMING.reply;
  const working = elapsed >= TIMING.send && !done;

  const messages: Message[] = [];
  for (let i = 0; i < scene; i++) {
    messages.push({ id: `${i}-ask`, kind: "user", text: S[i].ask }, { id: `${i}-reply`, kind: "bot", text: S[i].reply });
  }
  if (elapsed >= TIMING.send) messages.push({ id: `${scene}-ask`, kind: "user", text: cur.ask });
  if (elapsed >= TIMING.think && !done) messages.push({ id: `${scene}-think`, kind: "think", text: "" });
  if (done) messages.push({ id: `${scene}-reply`, kind: "bot", text: cur.reply });

  const typingWindow = TIMING.send - TIMING.typeStart - 150;
  const typedN =
    elapsed < TIMING.send
      ? Math.max(0, Math.min(cur.ask.length, Math.ceil(((elapsed - TIMING.typeStart) / typingWindow) * cur.ask.length)))
      : 0;

  const applied = (k: number) => scene > k || (scene === k && done);
  const anyChange = scene > 0 || done;

  return {
    scene,
    messages,
    typed: cur.ask.slice(0, typedN),
    typing: elapsed < TIMING.send,
    working,
    status: working ? demo.status.working : anyChange ? demo.status.ready : demo.status.idle,
    statusTone: (working ? "working" : anyChange ? "ready" : "idle") as "working" | "ready" | "idle",
    anyChange,
    visible: !((scene === 0 && elapsed < TIMING.fadeIn) || (scene === LAST && elapsed > TIMING.duration - TIMING.fadeOut)),
    friday: { changed: applied(0), highlight: scene === 0 && done },
    book: { shown: applied(1), ring: scene === 1 && done },
    jul: applied(2),
  };
}

type Frame = ReturnType<typeof derive>;

const keyOf = (f: Frame) =>
  [f.scene, f.messages.length, f.typed.length, f.typing, f.working, f.anyChange, f.visible, f.friday.highlight, f.book.ring].join("|");

const dotColor = { idle: "#C9C1B4", working: "#F09A6C", ready: "#C2582F" } as const;

export function ProductDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const { frame: f, hold, release } = useDemoTimeline({ scenes: demo.scenes.length, section: sectionRef, derive, keyOf });

  return (
    <section
      id="byg"
      ref={sectionRef}
      className="relative scroll-mt-[90px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,9vw,136px)]"
    >
      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-[clamp(36px,4.5vw,56px)] flex flex-col items-center text-center">
          <Reveal
            as="h2"
            className="m-0 max-w-[17ch] text-balance text-[clamp(30px,4.10vw,61px)] font-semibold leading-[.98] tracking-[-.04em]"
          >
            {demo.title}
          </Reveal>
          <p className="mt-[22px] max-w-[48ch] text-pretty text-[clamp(17px,1.4vw,19px)] text-muted">{demo.lede}</p>
        </div>

        <div
          onMouseEnter={hold}
          onMouseLeave={release}
          className="relative overflow-hidden rounded-[clamp(16px,2vw,22px)] border border-ink/10 bg-white shadow-[0_0_0_8px_rgba(20,18,15,.022),0_60px_120px_-60px_rgba(20,18,15,.40),0_30px_80px_-40px_rgba(194,88,47,.25)]"
        >
          {/* App bar */}
          <div className="flex items-center gap-2.5 border-b border-line py-2.5 pl-[18px] pr-2.5">
            <BrandMark size={20} />
            <span className="whitespace-nowrap text-sm font-semibold">{demo.siteName}</span>
            <span className="text-[#C9C1B4]">/</span>
            <span className="whitespace-nowrap text-sm text-muted">{f.jul ? "Jul" : "Forside"}</span>
            <span className="ml-auto flex items-center gap-2 whitespace-nowrap text-[13px] text-muted">
              <span
                className="h-[7px] w-[7px] rounded-full transition-colors duration-300"
                style={{ background: dotColor[f.statusTone] }}
              />
              {f.status}
            </span>
            <span
              className="rounded-full px-[18px] py-[9px] text-[13.5px] font-semibold leading-none transition-colors duration-[400ms]"
              style={{ background: f.anyChange ? "#A9502E" : "#F2EFE9", color: f.anyChange ? "#FFFFFF" : "#A39C91" }}
            >
              {demo.publish}
            </span>
          </div>

          <div className="flex flex-wrap">
            {/* Chat */}
            <div className="flex h-[500px] min-w-0 flex-[1_1_300px] flex-col border-r border-line bg-[#FBFAF7] p-[18px]">
              <div
                className="fade-top flex min-h-0 flex-1 flex-col justify-end gap-2.5 overflow-hidden transition-opacity duration-[400ms]"
                style={{ opacity: f.visible ? 1 : 0 }}
              >
                <AnimatePresence initial={false} mode="popLayout">
                  {f.messages.map((m) => (
                    <ChatMessage key={m.id} message={m} />
                  ))}
                </AnimatePresence>
              </div>
              <div
                className="mt-3.5 flex min-h-14 items-end gap-2.5 rounded-2xl border bg-white py-2 pl-4 pr-2 transition-colors duration-300"
                style={{ borderColor: f.typed ? "rgba(194,88,47,.45)" : "rgba(20,18,15,.105)" }}
              >
                <p
                  className="m-0 min-w-0 flex-1 py-2 text-[14.5px] leading-[1.4]"
                  style={{ color: f.typed ? "#14120F" : "#8C857A" }}
                >
                  {f.typed || demo.placeholder}
                  {f.typing && (
                    <span className="ml-px inline-block h-[1em] w-[1.5px] animate-caret bg-clay-bright align-[-2px]" />
                  )}
                </p>
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 flex-none place-items-center rounded-full text-white transition-colors duration-[250ms]"
                  style={{ background: f.typed ? "#C2582F" : "#DDD6CB" }}
                >
                  <ArrowUp />
                </span>
              </div>
            </div>

            {/* Site preview */}
            <div className="flex h-[500px] min-w-0 flex-[3_1_460px] bg-[#EFEBE4] p-[18px]">
              <div
                className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl bg-white text-[#1A1815] shadow-[0_1px_2px_rgba(20,18,15,.06),0_24px_50px_-30px_rgba(20,18,15,.35)] transition-opacity duration-[400ms]"
                style={{ opacity: f.visible ? 1 : 0 }}
              >
                <div className="relative flex items-center gap-2.5 border-b border-[#F0ECE5] px-3.5 py-[9px]">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
                    <rect x="1" y="5" width="8" height="6.2" rx="1.4" stroke="#8C857A" strokeWidth="1.2" />
                    <path d="M3 5V3.6a2 2 0 014 0V5" stroke="#8C857A" strokeWidth="1.2" />
                  </svg>
                  <span className="whitespace-nowrap font-mono text-[11.5px] text-[#67615A]">
                    {f.jul ? "cafelaerke.dk/jul" : "cafelaerke.dk"}
                  </span>
                  <span className="ml-auto whitespace-nowrap rounded-full bg-blush-soft px-[9px] py-1 font-mono text-[10px] font-medium uppercase tracking-[.08em] text-clay-deep">
                    {demo.preview}
                  </span>
                  {f.working && (
                    <span
                      key={f.scene}
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-[-1px] h-0.5 origin-left animate-load bg-clay-bright"
                    />
                  )}
                </div>

                <div className="flex items-center gap-[18px] px-5 pb-3.5 pt-4">
                  <span className="mr-auto whitespace-nowrap font-serif text-[23px] leading-none">{demo.siteName}</span>
                  <span className="text-[13px] text-[#67615A]">Menu</span>
                  <span className="text-[13px] text-[#67615A]">Om os</span>
                  <AnimatePresence>
                    {f.jul && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="-mx-1 -my-[3px] rounded-full bg-blush-soft px-2.5 py-[3px] text-[13px] font-semibold text-clay-deep"
                      >
                        Jul
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span className="text-[13px] text-[#67615A]">Kontakt</span>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {f.jul ? (
                    <motion.div key="jul" className="flex min-h-0 flex-1 flex-col" exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                      <JulPage />
                    </motion.div>
                  ) : (
                    <motion.div key="home" className="flex min-h-0 flex-1 flex-col" exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                      <HomePage friday={f.friday} book={f.book} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatMessage({ message: m }: { message: Message }) {
  const enter = {
    layout: "position" as const,
    initial: { opacity: 0, y: 8, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, transition: { duration: 0.12 } },
    transition: { duration: 0.35, ease: EASE },
  };

  if (m.kind === "user") {
    return (
      <motion.div
        {...enter}
        style={{ transformOrigin: "100% 100%" }}
        className="max-w-[86%] self-end text-pretty rounded-[16px_16px_4px_16px] bg-ink px-3.5 py-2.5 text-[14.5px] leading-[1.45] text-white"
      >
        {m.text}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...enter}
      style={{ transformOrigin: "0 100%" }}
      className={`flex max-w-[92%] gap-2.5 self-start ${m.kind === "think" ? "items-center" : "items-start"}`}
    >
      <BrandMark size={18} className={m.kind === "bot" ? "mt-[9px]" : ""} />
      {m.kind === "bot" ? (
        <div className="text-pretty rounded-[16px_16px_16px_4px] border border-line bg-white px-3.5 py-2.5 text-[14.5px] leading-[1.45] text-ink-soft">
          {m.text}
        </div>
      ) : (
        <div className="flex gap-1 rounded-[16px_16px_16px_4px] border border-line bg-white px-4 py-3.5" aria-label="Skriver">
          {[0, 0.15, 0.3].map((d) => (
            <span
              key={d}
              className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-faint"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function HomePage({ friday, book }: { friday: Frame["friday"]; book: Frame["book"] }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-5 px-5 pb-5">
      <div className="flex min-h-[172px] flex-col justify-end gap-3 rounded-[10px] bg-[#4A3829] px-[26px] py-6 text-[#F7EFE4]">
        <p className="m-0 font-mono text-[10.5px] uppercase tracking-[.14em] text-[#D9C3AC]">Bageri og café · Aarhus C</p>
        <p className="m-0 max-w-[16ch] font-serif text-[clamp(26px,2.6vw,34px)] leading-[1.04]">Morgenbrød og kaffe siden 1998</p>
        <div className="mt-1 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#F7EFE4] px-3.5 py-2 text-[12.5px] font-semibold text-[#4A3829]">Se menuen</span>
          <AnimatePresence>
            {book.shown && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="rounded-full border border-[rgba(247,239,228,.55)] px-3.5 py-2 text-[12.5px] font-semibold text-[#F7EFE4] transition-shadow duration-[600ms]"
                style={{ boxShadow: `0 0 0 3px ${book.ring ? "rgba(240,154,108,.75)" : "rgba(240,154,108,0)"}` }}
              >
                Book bord
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] items-start gap-5">
        <div>
          <p className="mb-1.5 mt-0 text-[11px] font-semibold uppercase tracking-[.1em] text-[#67615A]">Åbningstider</p>
          <div className="-mx-2.5 grid gap-0.5 text-sm tabular-nums">
            <div className="flex justify-between px-2.5 py-[5px]">
              <span>Man – tors</span>
              <span>7–17</span>
            </div>
            <div
              className="relative flex items-center gap-2 rounded-lg px-2.5 py-[5px] transition-[background-color,box-shadow] duration-500"
              style={{
                boxShadow: `inset 0 0 0 1.5px ${friday.highlight ? "#C2582F" : "transparent"}`,
                background: friday.highlight ? "#FBEDE4" : "transparent",
              }}
            >
              <span className="mr-auto">Fredag</span>
              <AnimatePresence>
                {friday.highlight && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE, delay: 0.2 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="rounded-full bg-clay px-[7px] py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[.08em] text-white"
                  >
                    Rettet
                  </motion.span>
                )}
              </AnimatePresence>
              {friday.changed ? (
                <motion.span
                  key="17"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ fontWeight: friday.highlight ? 600 : 400 }}
                >
                  7–17
                </motion.span>
              ) : (
                <span key="15">7–15</span>
              )}
            </div>
            <div className="flex justify-between px-2.5 py-[5px]">
              <span>Lør – søn</span>
              <span>8–14</span>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-1.5 mt-0 text-[11px] font-semibold uppercase tracking-[.1em] text-[#67615A]">Find os</p>
          <p className="m-0 pt-[5px] text-sm leading-[1.6] text-[#45413B]">
            Jægergårdsgade 41
            <br />
            8000 Aarhus C
            <br />
            86 12 34 56
          </p>
        </div>
      </div>
    </div>
  );
}

const JUL_DATES = [
  { date: "Fredag 4. december", seats: "Ledige pladser", few: false },
  { date: "Fredag 11. december", seats: "Ledige pladser", few: false },
  { date: "Fredag 18. december", seats: "Få pladser", few: true },
];

function JulPage() {
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  });
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-[18px] px-5 pb-5">
      <motion.div
        {...rise(0.1)}
        className="flex min-h-[172px] flex-col justify-end gap-2.5 rounded-[10px] bg-blush-soft px-[26px] py-6"
      >
        <p className="m-0 font-mono text-[10.5px] uppercase tracking-[.14em] text-clay-deep">Fredage i december</p>
        <p className="m-0 font-serif text-[clamp(28px,2.8vw,38px)] leading-[1.02] text-ink">Julefrokost hos Lærke</p>
        <p className="m-0 text-[13.5px] text-[#45413B]">Tre retter, gløgg og risalamande. 395 kr. pr. person.</p>
      </motion.div>
      <motion.div {...rise(0.22)} className="grid">
        {JUL_DATES.map((d, i) => (
          <div
            key={d.date}
            className={`flex items-center gap-3 py-[9px] text-sm ${i < JUL_DATES.length - 1 ? "border-b border-[#F0ECE5]" : ""}`}
          >
            <span className="mr-auto">{d.date}</span>
            <span className={`text-[12.5px] ${d.few ? "text-clay-deep" : "text-[#67615A]"}`}>{d.seats}</span>
            <span className="rounded-full bg-[#4A3829] px-3 py-1.5 text-xs font-semibold text-[#F7EFE4]">Book bord</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
