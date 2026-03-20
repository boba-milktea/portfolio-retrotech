import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { BottomRow } from '@/components/ui/BottomRow';

export default function Page() {
  return (
    <div className="color-primary-dim px-6 py-12 font-mono text-sm">
      <Hero />
      <Projects />
      <Skills />
      <BottomRow left={<About />} right={<Contact />} />
    </div>
  );
}
