import Image from "next/image";
import { menu } from "@/content/da";

export function Menu() {
  return (
    <section id="menu" className="mx-auto grid max-w-[1240px] scroll-mt-6 items-start gap-x-24 gap-y-12 px-8 pt-[clamp(80px,10vw,144px)] md:grid-cols-[1fr_1.3fr]">
      <div>
        <h2 className="font-serif text-[clamp(52px,6vw,80px)] font-normal leading-none tracking-[-.02em]">{menu.title}</h2>
        <p className="mt-5 max-w-[30ch] text-[20px] leading-[1.55] text-muted">{menu.lede}</p>
        <div className="relative mt-11 aspect-square w-full max-w-[340px] rounded-full outline-1 outline-offset-[10px] outline-line">
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <Image src="/images/plate.jpg" alt={menu.imageAlt} fill sizes="340px" loading="eager" className="origin-[39%_52%] scale-[1.3] object-cover object-[39%_50%]" />
          </div>
        </div>
      </div>
      <ul className="divide-y divide-line border-y border-line">
        {menu.items.map((item) => (
          <li key={item.name} className="py-6">
            <span className="flex items-baseline gap-3">
              <span className="font-serif text-[32px] font-medium leading-tight">{item.name}</span>
              <span aria-hidden className="flex-1 translate-y-[-4px] border-b border-dotted border-muted/60" />
              <span className="whitespace-nowrap font-serif text-[28px] font-medium tabular-nums">{item.price}</span>
            </span>
            <span className="mt-1 block text-[18px] text-muted">{item.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
