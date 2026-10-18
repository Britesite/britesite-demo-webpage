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
      <main className="mx-auto max-w-[1120px] px-6 pt-[clamp(40px,6vw,72px)]">
        <h1 className="font-serif text-[clamp(36px,5vw,52px)] font-medium tracking-[-.015em]">{news.title}</h1>
        <p className="mt-3 text-[18px] text-muted">{news.lede}</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {news.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(54,40,28,.06)]"
            >
              <span className="block h-1 w-10 rounded-full bg-crust" aria-hidden="true" />
              <span className="mt-4 block text-[15px] text-muted">{item.date}</span>
              <h2 className="mt-1 font-serif text-[24px] font-medium text-coffee">{item.title}</h2>
              <p className="mt-3 text-[17px] leading-[1.7] text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
