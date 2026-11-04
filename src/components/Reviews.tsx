import { reviews } from "@/content/da";

export function Reviews() {
  return (
    <section aria-label={reviews.label} className="pt-[clamp(40px,4.6vw,56px)]">
      {reviews.items.map((r) => (
        <figure key={r.name} className="bg-accent px-8 py-12 text-center text-accent-ink">
          <blockquote className="font-serif text-[clamp(48px,7vw,84px)] italic leading-none tracking-[-.02em]">
            “{r.quote}”
          </blockquote>
          <figcaption className="mt-5 text-[20px]">{r.name}</figcaption>
        </figure>
      ))}
    </section>
  );
}
