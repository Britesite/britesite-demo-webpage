import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { news } from "@/content/da";

export const metadata: Metadata = {
  title: "Nyheder · Café Lærke",
  description: "Det seneste fra Café Lærke, bageri og café i Aarhus C.",
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
        <div className="mt-10 max-w-[640px] space-y-10">
          {news.posts.map((p) => (
            <article key={p.title} className="border-t border-line pt-6">
              <p className="text-[14px] text-muted">{p.date}</p>
              <h2 className="mt-2 font-serif text-[clamp(24px,3vw,32px)] font-medium">{p.title}</h2>
              <p className="mt-3 text-[18px] leading-[1.7] text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
