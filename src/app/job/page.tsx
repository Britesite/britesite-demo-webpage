import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { job } from "@/content/da";

export const metadata: Metadata = {
  title: `${job.title} · Café Lærke`,
  description: job.lede,
};

export default function JobPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1240px] px-8 pt-[clamp(48px,7vw,96px)]">
        <p className="text-[17px] text-muted">{job.eyebrow}</p>
        <h1 className="mt-4 max-w-[16ch] text-balance font-serif text-[clamp(44px,4.8vw,60px)] font-normal leading-none tracking-[-.02em]">
          {job.title}
        </h1>
        <p className="mt-7 max-w-[52ch] text-[20px] leading-[1.65] text-muted">{job.lede}</p>
        <div className="mt-12 max-w-[52ch] border-t border-line pt-8">
          <h2 className="font-serif text-[32px] font-normal leading-none tracking-[-.02em]">{job.howTitle}</h2>
          <p className="mt-5 text-[20px] leading-[1.65] text-muted">{job.how}</p>
          <a
            href={job.applyHref}
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-[17px] font-medium text-accent-ink hover:opacity-85"
          >
            {job.button}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
