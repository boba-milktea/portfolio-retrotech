import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';

export default function Page() {
  return (
    <div className="color-primary-dim px-6 py-12 font-mono text-[11px]">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
