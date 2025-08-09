import { About } from "@/components/About";
import { CommandLineHero } from "@/components/CommandLineHero";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="w-full overflow-x-hidden">
        <CommandLineHero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Experience />
        </ScrollReveal>
        <Projects />
        <ScrollReveal delay={0.4}>
          <Skills />
        </ScrollReveal>
        <Contact />
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
