import { footer } from "@/content/da";

export function Footer() {
  return (
    <footer className="mx-auto mt-[clamp(48px,6vw,72px)] max-w-[1240px] px-8 pb-12">
      <p className="border-t border-line pt-8 text-[17px] text-muted">{footer.line}</p>
    </footer>
  );
}
