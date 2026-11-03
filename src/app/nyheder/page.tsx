import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { news } from "@/content/da";

export const metadata: Metadata = {
  title: "Nyheder · Café Lærke",
  description: "Det nyeste fra Café Lærke i Mejlgade, Aarhus C.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1120px] px-6 pt-[clamp(32px,5vw,64px)]">
        <div className="max-w-[640px]">
          <h1 className="font-serif text-[clamp(36px,5vw,52px)] font-medium tracking-[-.015em]">{news.title}</h1>
          <p className="mt-4 text-[18px] leading-[1.7] text-muted">{news.lede}</p>
        </div>
        <div className="mt-12 max-w-[640px] space-y-10">
          {news.items.map((item) => (
            <article key={item.title} className="border-t border-line pt-6">
              <time className="text-[14px] text-muted">{item.date}</time>
              <h2 className="mt-2 font-serif text-[clamp(26px,3vw,32px)] font-medium tracking-[-.01em]">{item.title}</h2>
              <p className="mt-3 text-[18px] leading-[1.7] text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
