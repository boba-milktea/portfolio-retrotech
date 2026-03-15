import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Page() {
  return (
    <div className="px-6 py-12 text-[11px] color-primary-dim font-mono">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}