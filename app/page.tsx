import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { BackgroundEffects } from "@/components/background-effects";
import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-[#F8FAFC] selection:bg-primary/30 font-sans overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <div className="flex flex-col gap-24 md:gap-32 w-full pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
