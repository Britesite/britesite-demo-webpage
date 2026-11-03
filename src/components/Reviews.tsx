import { reviews } from "@/content/da";

export function Reviews() {
  return (
    <section id="anmeldelser" className="mx-auto max-w-[1120px] scroll-mt-6 px-6 pt-[clamp(64px,8vw,104px)]">
      <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-medium tracking-[-.015em]">{reviews.title}</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {reviews.items.map((r) => (
          <li key={r.name} className="rounded-2xl border border-line p-6">
            <blockquote className="font-serif text-[22px] leading-snug">“{r.quote}”</blockquote>
            <p className="mt-4 text-[15px] font-semibold text-muted">— {r.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
