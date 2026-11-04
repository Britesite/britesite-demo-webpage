import { reviews } from "@/content/da";

export function Reviews() {
  return (
    <section id="anmeldelser" className="mx-auto max-w-[1240px] scroll-mt-6 px-8 pt-[clamp(80px,10vw,144px)]">
      <figure className="border-t border-line pt-12">
        <blockquote className="max-w-[24ch] text-balance font-serif text-[clamp(36px,4vw,52px)] font-normal italic leading-[1.1] tracking-[-.02em]">
          “{reviews.quote}”
        </blockquote>
        <figcaption className="mt-6 text-[15px] text-muted">{reviews.name}</figcaption>
      </figure>
    </section>
  );
}
