import { visit } from "@/content/da";

export function Visit() {
  return (
    <section id="besog" className="mx-auto grid max-w-[1120px] scroll-mt-6 gap-5 px-6 pt-5 md:grid-cols-[1.25fr_1fr]">
      <div className="rounded-[24px] bg-card p-[clamp(24px,3vw,36px)] ring-1 ring-line">
        <h2 className="font-serif text-[28px] font-medium tracking-[-.01em]">{visit.hoursTitle}</h2>
        <ul className="mt-5 divide-y divide-line">
          {visit.hours.map((h) => (
            <li key={h.days} className="flex items-baseline justify-between py-3 text-[17px]">
              <span>{h.days}</span>
              <span className="font-semibold tabular-nums">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[24px] bg-card p-[clamp(24px,3vw,36px)] ring-1 ring-line">
        <h2 className="font-serif text-[28px] font-medium tracking-[-.01em]">{visit.findTitle}</h2>
        <address className="mt-5 text-[17px] not-italic leading-[1.7]">
          {visit.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-3 block text-muted">Tlf. {visit.phone}</span>
          <a href={`mailto:${visit.email}`} className="block text-muted underline underline-offset-4 hover:text-ink">
            {visit.email}
          </a>
        </address>
      </div>
    </section>
  );
}
