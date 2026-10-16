import { footer } from "@/content/da";

export function Footer() {
  return (
    <footer className="mx-auto mt-[clamp(64px,8vw,104px)] max-w-[1120px] border-t border-line px-6 py-10 text-[15px] text-muted">
      {footer.line}
    </footer>
  );
}
