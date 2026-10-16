import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Visit />
        <Menu />
        <About />
      </main>
      <Footer />
    </>
  );
}
