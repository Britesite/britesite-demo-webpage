import { menu } from "@/content/da";

export function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-[1120px] scroll-mt-6 px-6 pt-[clamp(64px,8vw,104px)]">
      <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-medium tracking-[-.015em]">{menu.title}</h2>
      <p className="mt-3 text-[18px] text-muted">{menu.lede}</p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {menu.items.map((item) => (
          <li key={item.name} className="flex flex-col rounded-2xl border border-line bg-card p-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,.6)] transition hover:-translate-y-0.5 hover:border-crust">
            <span className="font-serif text-[22px] font-medium">{item.name}</span>
            <span className="mt-2 text-[15px] text-muted">{item.note}</span>
            <span className="mt-auto pt-5 text-[18px] font-semibold tabular-nums text-crust">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
