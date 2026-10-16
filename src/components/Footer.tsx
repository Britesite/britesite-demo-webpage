import { BrandMark } from "./BrandMark";
import { CONTACT_EMAIL, CONTACT_HREF, footer } from "@/content/da";

export function Footer() {
  return (
    <footer className="border-t border-ink/[.075] px-[clamp(20px,4vw,48px)] pb-8 pt-[clamp(56px,6vw,88px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-x-8 gap-y-10">
          <div className="col-span-2 min-w-0">
            <a href="#top" className="flex items-center gap-[9px] text-ink">
              <BrandMark size={26} />
              <span className="text-xl font-bold tracking-[-.025em]">Britesite</span>
            </a>
            <p className="mb-0 mt-4 max-w-[30ch] text-[15px] text-subtle">{footer.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-2.5 text-[15px]">
              <p className="mb-1 mt-0 text-[13px] font-semibold text-subtle">{col.heading}</p>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className="text-ink-soft transition-colors hover:text-clay">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-ink/[.075] pt-6 text-[13.5px] text-subtle">
          <span>{footer.copyright}</span>
          <a href={CONTACT_HREF} className="font-mono text-subtle transition-colors hover:text-clay">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
