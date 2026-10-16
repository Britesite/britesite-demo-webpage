import { BrandMark } from "./BrandMark";
import { CONTACT_HREF, nav } from "@/content/da";

export function Header() {
  return (
    <header className="sticky top-0 z-20 px-[clamp(12px,3vw,32px)] pt-4">
      <div className="mx-auto flex max-w-[1180px] items-center gap-4 rounded-full border border-ink/[.068] bg-white/75 py-2 pl-[18px] pr-2 backdrop-blur-[16px]">
        <a href="#top" className="flex items-center gap-[9px] text-ink">
          <BrandMark size={26} />
          <span className="text-xl font-bold leading-none tracking-[-.025em]">Britesite</span>
        </a>
        <nav className="flex flex-1 flex-wrap justify-center gap-x-7 gap-y-1 text-[15px] font-medium">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://app.britesite.dk/"
          className="hidden whitespace-nowrap px-2 text-[15px] font-medium text-muted transition-colors hover:text-ink sm:inline"
        >
          Log ind
        </a>
        <a
          href={CONTACT_HREF}
          className="rounded-full bg-ink px-5 py-[11px] text-[15px] font-semibold leading-[1.2] text-white transition-colors hover:bg-clay"
        >
          Kom i gang
        </a>
      </div>
    </header>
  );
}
