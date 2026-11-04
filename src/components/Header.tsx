import Link from "next/link";
import { nav, site } from "@/content/da";

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1240px] items-center gap-9 px-8 py-6">
      <Link href="/" className="font-serif text-[34px] font-medium italic leading-none tracking-[-.01em]">
        {site.name}
      </Link>
      <nav className="ml-auto hidden gap-8 text-[17px] text-muted sm:flex">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="hover:text-ink">
            {n.label}
          </a>
        ))}
      </nav>
      <a
        href={site.bookHref}
        className="ml-auto rounded-full bg-accent px-6 py-3 text-[17px] font-medium text-accent-ink hover:opacity-85 sm:ml-0"
      >
        Book bord
      </a>
    </header>
  );
}
