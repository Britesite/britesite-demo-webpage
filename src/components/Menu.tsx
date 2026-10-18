import { menu } from "@/content/da";

export function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-[1120px] scroll-mt-6 px-6 pt-[clamp(64px,8vw,104px)]">
      <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-medium tracking-[-.015em]">{menu.title}</h2>
      <p className="mt-3 text-[18px] text-muted">{menu.lede}</p>
      <ul className="mt-8 grid gap-x-10 gap-y-1 md:grid-cols-2">
        {menu.items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-4 border-b border-line py-4">
            <span>
              <span className="block text-[18px] font-semibold">{item.name}</span>
              <span className="block text-[15px] text-muted">{item.note}</span>
            </span>
            <span className="ml-auto whitespace-nowrap text-[17px] font-semibold tabular-nums">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
