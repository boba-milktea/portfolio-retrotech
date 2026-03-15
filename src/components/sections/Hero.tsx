import { config } from '@/data/config';
import { LiveDot } from '@/components/ui/LiveDot';
import { CursorBlink } from '../ui/CursorBlink';
import { TerminalLine } from '../ui/TerminalLine';
import { FadeIn } from '../ui/FadeIn';

export function Hero() {
  return (
    <section
      id="work"
      className="border-primary-border border-b px-6 pt-8 pb-7"
      aria-label="Hero section"
      role="region"
      aria-roledescription="Hero section"
    >
      <FadeIn>
        <div
          className="color-primary-dim mb-4 flex items-center gap-2 font-mono text-[9px] tracking-[0.15em]"
          aria-label="System status"
          role="status"
          aria-roledescription="System status"
        >
          <LiveDot />
          SYSTEM ONLINE - {config.status}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1
          className="font-display color-primary mb-1 text-[52px] leading-none tracking-[0.04em]"
          aria-label="Name"
          role="heading"
          aria-roledescription="Name"
        >
          {config.name}
          <CursorBlink />
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2
          className="font-display color-primary-mid mb-4 text-[26px] tracking-[0.06px]"
          aria-label="Role"
          role="heading"
          aria-roledescription="Role"
        >
          {config.role}
        </h2>
      </FadeIn>
      <div
        className="color-primary-dim mb-6 flex max-w-lg flex-col gap-1 font-mono text-[11px] leading-relaxed"
        aria-label="Tagline"
        role="contentinfo"
        aria-roledescription="Tagline"
      >
        {config.tagline.map((tag, index) => (
          <TerminalLine key={index}>&gt; {tag}</TerminalLine>
        ))}
      </div>
      <FadeIn delay={0.3 + config.tagline.length * 0.1}>
        <div
          className="flex items-center gap-3"
          aria-label="Projects link"
          role="link"
          aria-roledescription="Projects link"
        >
          <a
            href="#work"
            className="rounded-md border border-gray-600 bg-transparent px-4 py-2 font-mono text-xl tracking-[0.1em] text-white transition-opacity hover:opacity-80"
            aria-label="View projects"
            role="link"
            aria-roledescription="View projects"
          >
            [ VIEW PROJECTS ]
          </a>

          <a
            href={config.resumeURL}
            className="rounded-md border border-gray-600 bg-transparent px-4 py-2 font-mono text-xl tracking-[0.1em] text-white transition-opacity hover:opacity-80"
            aria-label="Resume"
            role="link"
            aria-roledescription="Resume"
          >
            [ RESUME.PDF ]
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
