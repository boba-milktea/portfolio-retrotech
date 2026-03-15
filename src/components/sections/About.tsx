import { SectionHeader } from '@/components/ui/SectionHeader';
import { config } from '@/data/config';
import { CursorBlink } from '@/components/ui/CursorBlink';

export function About() {
  return (
    <section id="about" className="border-primary-border border-b pb-6">
      <SectionHeader> ABOUT </SectionHeader>

      <div className="color-primary-dim flex flex-col gap-1 px-6 pt-4 font-mono text-[11px] leading-relaxed">
        {config.about.map((item, index) => (
          <span key={index}>
            &gt; {item} &lt;
            {index !== config.about.length - 1 && <CursorBlink />}
          </span>
        ))}
      </div>
    </section>
  );
}
