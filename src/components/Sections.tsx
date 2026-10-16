import { BrandMark } from "./BrandMark";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { CONTACT_HREF, about, ownership, paths, stats } from "@/content/da";

const EYEBROW = "mb-[22px] mt-0 font-mono text-xs font-medium uppercase tracking-[.16em]";
const H2 = "m-0 text-balance font-semibold leading-[.98] tracking-[-.04em]";
const LEDE = "text-pretty text-[clamp(17px,1.4vw,19px)] text-muted";
const HOVER_SPRING = { type: "spring", stiffness: 300, damping: 24 } as const;

export function Ownership() {
  return (
    <section className="relative mx-[max(clamp(12px,2vw,24px),calc((100%_-_1640px)/2))] my-[clamp(24px,4vw,56px)] overflow-hidden rounded-[clamp(28px,4vw,48px)] border border-clay-bright/[.16] bg-[linear-gradient(160deg,#FCE4D4_0%,#FAEDE3_45%,#F7F1EA_100%)] px-[clamp(20px,4vw,48px)] py-[clamp(64px,8vw,120px)]">
      <BrandMark
        size={560}
        className="pointer-events-none absolute bottom-[-22%] right-[-6%] h-auto w-[min(560px,60vw)] opacity-[.07]"
      />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(40px,6vw,96px)]">
        <div>
          <p className={`${EYEBROW} text-clay-deep`}>{ownership.eyebrow}</p>
          <Reveal as="h2" className={`${H2} max-w-[12ch] text-[clamp(30px,3.80vw,55px)]`}>
            {ownership.title}
          </Reveal>
          <p className={`mt-6 max-w-[40ch] ${LEDE}`}>{ownership.lede}</p>
        </div>
        <ul className="m-0 list-none border-b border-clay-deep/[.18] p-0">
          {ownership.items.map((item) => (
            <Reveal
              as="li"
              key={item.title}
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-x-8 gap-y-2 border-t border-clay-deep/[.18] py-7"
            >
              <h3 className="m-0 text-[22px] font-semibold leading-[1.2] tracking-[-.02em]">{item.title}</h3>
              <p className="m-0 text-pretty text-base text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="px-[clamp(20px,4vw,48px)] py-[clamp(72px,9vw,136px)]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal
          as="h2"
          className={`${H2} mx-auto mb-[clamp(48px,6vw,80px)] max-w-[16ch] text-center text-[clamp(30px,4.10vw,61px)]`}
        >
          {stats.title}
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] border-t border-ink/[.09]">
          {stats.items.map((s, i) => (
            <div
              key={s.value}
              className={`pb-2 pt-8 ${i < stats.items.length - 1 ? "pr-[clamp(0px,2vw,28px)]" : ""}`}
            >
              <p className="m-0 text-[clamp(58px,6.12vw,92px)] font-semibold leading-[.9] tracking-[-.05em]">{s.value}</p>
              <p className="mb-0 mt-4 max-w-[26ch] text-base text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-3">
      <span className="text-clay" aria-hidden="true">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export function TwoPaths() {
  return (
    <section
      id="veje"
      className="relative mt-[clamp(24px,4vw,56px)] scroll-mt-[90px] px-[clamp(20px,4vw,48px)] pb-[clamp(72px,9vw,136px)] pt-[clamp(96px,12vw,176px)]"
    >
      {/* White arch that opens the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 inset-x-[max(clamp(12px,2vw,24px),calc((100%_-_1640px)/2))] border-t border-ink/[.07] bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,.85)_55%,rgba(255,255,255,0)_100%)] shadow-[0_-40px_80px_-60px_rgba(194,88,47,.35)]"
        style={{ borderRadius: "min(48vw,620px) min(48vw,620px) 0 0 / min(30vw,380px) min(30vw,380px) 0 0" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[clamp(40px,6vw,80px)] h-[clamp(32px,4vw,56px)] w-px bg-[linear-gradient(180deg,rgba(194,88,47,0),#C2582F)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[4%] left-1/2 h-[520px] w-[min(900px,120vw)] -translate-x-1/2"
        style={{
          background: "radial-gradient(closest-side, rgba(240,154,108,.28), rgba(246,214,190,.14) 55%, rgba(0,0,0,0))",
        }}
      />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-[clamp(40px,5vw,64px)] flex flex-col items-center text-center">
          <Reveal as="h2" className="m-0 text-[clamp(34px,4.56vw,70px)] font-semibold leading-[.95] tracking-[-.045em]">
            {paths.title}
          </Reveal>
          <p className={`mt-5 max-w-[40ch] ${LEDE}`}>{paths.lede}</p>
        </div>

        <div className="mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-3">
          <Reveal
            as="article"
            whileHover={{ y: -6 }}
            transition={{ y: HOVER_SPRING }}
            className="flex flex-col gap-[22px] rounded-[28px] border border-ink/[.09] bg-white p-[clamp(26px,3vw,36px)] shadow-[0_30px_70px_-40px_rgba(20,18,15,.22)] transition-[box-shadow,border-color] duration-[350ms] hover:border-clay/45 hover:shadow-[0_24px_50px_-28px_rgba(20,18,15,.28)]"
          >
            <p className="m-0 text-[15px] font-semibold text-muted">{paths.move.eyebrow}</p>
            <h3 className="m-0 text-[clamp(24px,2.28vw,30px)] font-semibold leading-none tracking-[-.035em]">
              {paths.move.title}
            </h3>
            <a
              href={CONTACT_HREF}
              className="flex justify-center rounded-full border border-ink/[.188] p-[15px] text-[15.5px] font-semibold transition-colors hover:bg-ink/[.06]"
            >
              {paths.move.cta}
            </a>
            <ul className="m-0 grid list-none gap-3 p-0 text-[15.5px] text-ink-soft">
              {paths.move.points.map((p) => (
                <Check key={p}>{p}</Check>
              ))}
            </ul>
          </Reveal>

          <Reveal
            as="article"
            whileHover={{ y: -6 }}
            transition={{ y: HOVER_SPRING }}
            className="relative flex flex-col gap-[22px] overflow-hidden rounded-[28px] border border-peach/45 bg-[linear-gradient(180deg,#FCE4D4,#FFF8F3_70%)] p-[clamp(26px,3vw,36px)] shadow-[0_40px_100px_-50px_rgba(240,154,108,.6)] transition-shadow duration-[350ms] hover:shadow-[0_50px_110px_-50px_rgba(240,154,108,.85)]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="m-0 text-[15px] font-semibold text-clay-deep">{paths.fresh.eyebrow}</p>
              <span className="rounded-full bg-clay px-2.5 py-[5px] font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-white">
                {paths.fresh.badge}
              </span>
            </div>
            <h3 className="m-0 text-[clamp(24px,2.28vw,30px)] font-semibold leading-none tracking-[-.035em]">
              {paths.fresh.title}
            </h3>
            <a
              href={CONTACT_HREF}
              className="flex justify-center rounded-full bg-ink p-[15px] text-[15.5px] font-semibold text-white transition-colors hover:bg-clay"
            >
              {paths.fresh.cta}
            </a>
            <ul className="m-0 grid list-none gap-3 p-0 text-[15.5px] text-ink-soft">
              {paths.fresh.points.map((p) => (
                <Check key={p}>{p}</Check>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="os" className="scroll-mt-[90px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,9vw,136px)]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(40px,6vw,96px)]">
        <div>
          <p className={`${EYEBROW} text-subtle`}>{about.eyebrow}</p>
          <Reveal as="h2" className="m-0 max-w-[14ch] text-balance text-[clamp(29px,3.50vw,49px)] font-semibold leading-none tracking-[-.04em]">
            {about.title}
          </Reveal>
          <p className="mt-6 max-w-[42ch] text-pretty text-[17px] text-muted">{about.lede}</p>
          <a
            href={about.ctaHref}
            className="mt-7 inline-flex rounded-full bg-ink px-7 py-[15px] text-[15.5px] font-semibold text-white transition-colors hover:bg-clay"
          >
            {about.cta}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {about.people.map((person, i) => (
            <Reveal
              as="figure"
              key={person.name}
              whileHover={{ y: -6, rotate: i === 0 ? -1 : 1 }}
              transition={{ y: HOVER_SPRING, rotate: HOVER_SPRING }}
              className={`m-0 ${i === 1 ? "mt-[clamp(0px,4vw,56px)]" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-ink/[.075] bg-[#ECE7DF]">
                <ImageSlot placeholder={person.placeholder} src={person.photo} alt={person.name} sizes="(min-width: 900px) 280px, 45vw" />
              </div>
              <figcaption className="px-1 pt-3.5">
                <p className="m-0 text-lg font-semibold tracking-[-.01em]">{person.name}</p>
                <p className="mb-0 mt-0.5 text-sm text-muted">{person.role}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
