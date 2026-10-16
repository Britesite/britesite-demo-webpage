import { AskMarquee } from "@/components/AskMarquee";
import { Background } from "@/components/Background";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductDemo } from "@/components/ProductDemo";
import { QualityInspector } from "@/components/QualityInspector";
import { About, Ownership, Stats, TwoPaths } from "@/components/Sections";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <Background />
      <Header />
      <main id="top">
        <Hero />
        <AskMarquee />
        <ProductDemo />
        <QualityInspector />
        <Ownership />
        <Stats />
        <TwoPaths />
        <About />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
