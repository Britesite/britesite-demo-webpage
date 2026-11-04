import Image from "next/image";
import { about } from "@/content/da";

export function About() {
  return (
    <section id="om" className="mx-auto grid max-w-[1240px] scroll-mt-6 items-center gap-x-24 gap-y-12 px-8 pt-[clamp(80px,10vw,144px)] md:grid-cols-[1fr_1.3fr]">
      <div className="relative aspect-[5/6] w-full max-w-[300px] rounded-t-full outline-1 outline-offset-[10px] outline-line">
        <div className="absolute inset-0 overflow-hidden rounded-t-full">
          <Image src="/images/dough.jpg" alt={about.imageAlt} fill sizes="300px" loading="eager" className="object-cover object-[70%_60%]" />
        </div>
      </div>
      <div>
        <h2 className="max-w-[16ch] text-balance font-serif text-[clamp(44px,4.8vw,60px)] font-normal leading-none tracking-[-.02em]">{about.title}</h2>
        <p className="mt-7 max-w-[52ch] text-[20px] leading-[1.65] text-muted">{about.body}</p>
      </div>
    </section>
  );
}
