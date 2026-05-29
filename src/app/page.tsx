import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Methodology } from "@/components/Methodology";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-noise">
      <Navbar />
      <Hero />
      <Methodology />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
