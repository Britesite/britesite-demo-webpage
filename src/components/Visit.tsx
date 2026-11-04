import { visit } from "@/content/da";

export function Visit() {
  return (
    <section id="besog" className="mx-auto grid max-w-[1240px] scroll-mt-6 gap-x-24 gap-y-14 px-8 pt-[clamp(72px,8vw,112px)] md:grid-cols-[1.3fr_1fr]">
      <div>
        <h2 className="font-serif text-[44px] font-medium leading-none tracking-[-.01em]">{visit.hoursTitle}</h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {visit.hours.map((h) => (
            <li key={h.days} className="flex items-baseline justify-between py-4 text-[19px]">
              <span>{h.days}</span>
              <span className="font-serif text-[26px] font-medium leading-none tabular-nums">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-serif text-[44px] font-medium leading-none tracking-[-.01em]">{visit.findTitle}</h2>
        <address className="mt-6 border-t border-line pt-5 text-[19px] not-italic leading-[1.7]">
          {visit.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-4 block text-muted">Tlf. {visit.phone}</span>
          <a href={`mailto:${visit.email}`} className="block text-muted underline decoration-1 underline-offset-4 hover:text-ink">
            {visit.email}
          </a>
        </address>
      </div>
    </section>
  );
}
