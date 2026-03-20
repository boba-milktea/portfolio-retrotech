import { SectionHeader } from '@/components/ui/SectionHeader';
import { config } from '@/data/config';
import { FadeIn } from '../ui/FadeIn';
export function Contact() {
  return (
    <section id="contact" className="pb-6">
      <FadeIn>
        <SectionHeader> CONTACT </SectionHeader>
      </FadeIn>

      <div className="flex flex-col gap-3 px-6 pt-4">
        {config.contact.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.label} in a new tab`}
              className="flex w-fit items-center gap-2 font-mono tracking-[0.06em] transition-opacity hover:opacity-70"
            >
              <span className="text-primary-dim">{item.prefix}</span>
              <span className="text-primary-mid">{item.label}</span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
