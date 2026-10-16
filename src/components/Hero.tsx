import { hero, site } from "@/content/da";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1120px] px-6">
      <div className="rounded-[28px] bg-coffee px-[clamp(28px,5vw,64px)] py-[clamp(40px,5vw,64px)] text-cream">
        <p className="text-[13px] font-semibold uppercase tracking-[.16em] text-crust">{hero.eyebrow}</p>
        <h1 className="mt-4 max-w-[14ch] font-serif text-[clamp(40px,5.6vw,68px)] font-medium leading-[1.02] tracking-[-.02em]">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-[44ch] text-[18px] leading-relaxed text-cream/80">{hero.lede}</p>
        <p className="mt-5 inline-block rounded-full bg-cream/15 px-4 py-2 text-[15px] font-semibold text-cream">
          {hero.notice}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#menu" className="rounded-full bg-cream px-6 py-3 text-[16px] font-semibold text-coffee hover:bg-white">
            {hero.primary}
          </a>
          <a
            href={site.bookHref}
            className="rounded-full px-6 py-3 text-[16px] font-semibold text-cream ring-1 ring-cream/40 ring-inset hover:ring-cream"
          >
            {hero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
