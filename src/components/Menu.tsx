import { menu } from "@/content/da";

export function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-[1120px] scroll-mt-6 px-6 pt-[clamp(64px,8vw,104px)]">
      <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-medium tracking-[-.015em]">{menu.title}</h2>
      <p className="mt-3 text-[18px] text-muted">{menu.lede}</p>
      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {menu.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col rounded-2xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(54,40,28,.06),0_8px_24px_-12px_rgba(54,40,28,.18)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="mb-4 block h-[3px] w-10 rounded-full bg-crust" aria-hidden="true" />
            <span className="font-serif text-[22px] font-medium leading-tight">{item.name}</span>
            <span className="mt-2 block text-[15px] text-muted">{item.note}</span>
            <span className="mt-auto pt-6 font-serif text-[20px] font-semibold tabular-nums text-coffee">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
