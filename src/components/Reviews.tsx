import { reviews } from "@/content/da";

const Stars = () => (
  <svg viewBox="0 0 100 18" className="h-[18px] w-[100px] fill-accent" role="img" aria-label="Fem stjerner">
    {[0, 1, 2, 3, 4].map((i) => (
      <path key={i} transform={`translate(${i * 20.5} 0)`} d="M9 0l2.6 5.7 6.2.7-4.6 4.2 1.3 6.1L9 13.6l-5.5 3.1 1.3-6.1L.2 6.4l6.2-.7z" />
    ))}
  </svg>
);

function Card({ quote, name, from }: (typeof reviews.items)[number]) {
  return (
    <figure className="flex w-[384px] shrink-0 flex-col rounded-[20px] bg-card p-9">
      <Stars />
      <blockquote className="mt-6 flex-1 font-serif text-[31px] font-medium leading-[1.14] tracking-[-.01em]">{quote}</blockquote>
      <figcaption className="mt-7 text-[18px]">
        <span className="font-medium">{name}</span>
        <span className="text-muted">, {from}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  return (
    <section aria-label={reviews.title} className="mt-[clamp(48px,6vw,72px)] overflow-hidden bg-band py-[78px]">
      <h2 className="mx-auto max-w-[1240px] px-8 font-serif text-[clamp(46px,5.2vw,66px)] font-normal leading-none tracking-[-.02em]">{reviews.title}</h2>
      <div className="review-row mt-11 px-8">
        <div className="review-track flex w-max gap-6">
          {reviews.items.map((r) => (
            <Card key={r.name} {...r} />
          ))}
          {/* The row repeats so the drift has no end; the copy is hidden from screen readers. */}
          <div aria-hidden className="contents">
            {reviews.items.map((r) => (
              <Card key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
