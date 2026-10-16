import { about } from "@/content/da";

export function About() {
  return (
    <section id="om" className="mx-auto max-w-[1120px] scroll-mt-6 px-6 pt-[clamp(64px,8vw,104px)]">
      <div className="max-w-[640px]">
        <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-medium tracking-[-.015em]">{about.title}</h2>
        <p className="mt-5 text-[18px] leading-[1.7] text-muted">{about.body}</p>
      </div>
    </section>
  );
}
