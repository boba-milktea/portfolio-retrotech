import { config } from '@/data/config';
import { LiveDot } from '@/components/ui/LiveDot';
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
          className="text-primary-dim mb-4 flex items-center gap-2 font-mono text-xs tracking-[0.15em]"
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
          className="font-display text-primary mb-1 leading-none tracking-[0.04em]"
          style={{ fontSize: 'clamp(2.5rem, 3vw, 4rem)' }}
          aria-label="Name"
          role="heading"
          aria-roledescription="Name"
        >
          {config.name}
          <span
            className="bg-primary ml-2 inline-block w-1.5 animate-[blink_1.1s_step-end_infinite] align-middle"
            style={{ height: 'clamp(1rem, 1.5vw, 1.6rem)' }}
          />
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2
          className="font-display text-primary-mid mb-4 text-xl tracking-[0.06px]"
          aria-label="Role"
          role="heading"
          aria-roledescription="Role"
        >
          {config.role}
        </h2>
      </FadeIn>
      <div
        className="text-primary-dim mb-6 flex max-w-3xl flex-col gap-1 font-mono text-sm leading-relaxed"
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
            className="rounded-md border border-gray-600 bg-transparent px-4 py-2 font-mono text-lg tracking-[0.1em] text-white transition-opacity hover:opacity-80"
            aria-label="View projects"
            role="link"
            aria-roledescription="View projects"
          >
            [ VIEW PROJECTS ]
          </a>

          <a
            href={config.resumeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-600 bg-transparent px-4 py-2 font-mono text-lg tracking-[0.1em] text-white transition-opacity hover:opacity-80"
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
