import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { job } from "@/content/da";

export const metadata: Metadata = {
  title: `${job.title} · Café Lærke`,
  description: job.lede,
};

export default function JobPage() {
  const mailto = `mailto:${job.email}?subject=${encodeURIComponent(job.subject)}`;
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-[1120px] px-6 pt-[clamp(40px,6vw,72px)]">
          <div className="max-w-[640px]">
            <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-medium tracking-[-.015em]">{job.title}</h1>
            <p className="mt-5 text-[18px] leading-[1.7] text-muted">{job.lede}</p>
            {job.paragraphs.map((p) => (
              <p key={p} className="mt-5 text-[18px] leading-[1.7] text-muted">
                {p}
              </p>
            ))}
            <h2 className="mt-10 font-serif text-[clamp(26px,3vw,32px)] font-medium">{job.applyTitle}</h2>
            <p className="mt-3 text-[18px] leading-[1.7] text-muted">{job.apply}</p>
            <a
              href={mailto}
              className="mt-6 inline-block rounded-full bg-coffee px-6 py-3 text-[16px] font-semibold text-cream hover:bg-coffee-deep"
            >
              {job.button}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
