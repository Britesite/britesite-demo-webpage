import { nav, site } from "@/content/da";

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1120px] items-center gap-8 px-6 py-5">
      <a href="#" className="font-serif text-[26px] font-semibold tracking-[-.01em] text-crust">
        {site.name}
      </a>
      <nav className="ml-auto hidden gap-7 text-[15px] text-muted sm:flex">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="hover:text-ink">
            {n.label}
          </a>
        ))}
      </nav>
      <a
        href={site.bookHref}
        className="ml-auto rounded-full bg-crust px-5 py-2.5 text-[15px] font-semibold text-paper hover:bg-cream sm:ml-0"
      >
        Book bord
      </a>
    </header>
  );
}
