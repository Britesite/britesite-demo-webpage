import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { news } from "@/content/da";

export const metadata: Metadata = {
  title: "Nyheder · Café Lærke",
  description: "Det nyeste fra Café Lærke: surdejsbrød hver lørdag morgen.",
};

export default function Nyheder() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 pt-[clamp(40px,6vw,72px)]">
        <div className="max-w-[640px]">
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-medium tracking-[-.015em]">{news.title}</h1>
          <p className="mt-4 text-[18px] leading-[1.7] text-muted">{news.lede}</p>
        </div>
        <div className="mt-10 grid max-w-[640px] gap-6">
          {news.items.map((n) => (
            <article key={n.title} className="rounded-2xl border border-line p-6">
              <h2 className="font-serif text-[26px] font-medium">{n.title}</h2>
              <p className="mt-3 text-[17px] leading-[1.7] text-muted">{n.body}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
