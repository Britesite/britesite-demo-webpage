import Image from "next/image";
import { hero, site } from "@/content/da";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-8 pb-6 pt-6 md:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="font-serif text-[28px] italic text-muted">{hero.eyebrow}</p>
        <h1 className="mt-4 max-w-[10ch] font-serif text-[clamp(60px,8.6vw,116px)] font-normal leading-[.94] tracking-[-.02em]">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-[38ch] text-[20px] leading-[1.55] text-muted">{hero.lede}</p>
        <div className="mt-9 flex flex-wrap items-center gap-7">
          <a href="#menu" className="rounded-full bg-accent px-8 py-4 text-[18px] font-medium text-accent-ink hover:opacity-85">
            {hero.primary}
          </a>
          <a href={site.bookHref} className="text-[18px] underline decoration-1 underline-offset-[6px] hover:text-accent">
            {hero.secondary}
          </a>
        </div>
      </div>
      {/* The arch is the mouth of a baker's oven; the fine outline repeats below for every photograph. */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] rounded-t-full outline-1 outline-offset-[10px] outline-line">
        <div className="absolute inset-0 overflow-hidden rounded-t-full">
          <Image src="/images/hero.jpg" alt={hero.imageAlt} fill sizes="(min-width: 768px) 440px, 90vw" priority className="object-cover object-bottom" />
        </div>
      </div>
    </section>
  );
}
