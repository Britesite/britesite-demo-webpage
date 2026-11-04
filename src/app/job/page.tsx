import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { job, site } from "@/content/da";

export const metadata: Metadata = {
  title: `${job.title} – ${site.name}`,
  description: job.lede,
};

export default function JobPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1240px] px-8 pt-[clamp(40px,6vw,88px)]">
        <p className="text-[17px] text-muted">{job.eyebrow}</p>
        <h1 className="mt-4 max-w-[14ch] font-serif text-[clamp(48px,5.6vw,76px)] font-normal leading-none tracking-[-.02em]">
          {job.title}
        </h1>
        <p className="mt-8 max-w-[34ch] font-serif text-[clamp(24px,2.4vw,32px)] italic leading-snug text-muted">
          {job.lede}
        </p>
        <div className="mt-12 max-w-[60ch] space-y-6 border-t border-line pt-10 text-[19px] leading-relaxed">
          {job.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="text-muted">{job.contact}</p>
          <a
            href={job.applyHref}
            className="inline-block rounded-full bg-accent px-6 py-3 text-[17px] font-medium text-accent-ink hover:opacity-85"
          >
            {job.apply}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
