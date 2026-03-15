'use client';

import { PhosphorToggle } from '@/components/ui/PhosphorToggle';
import Link from 'next/link';

const NAV_LINKS = ['work', 'skills', 'about', 'contact'];

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between px-6 py-3"
      style={{
        borderBottom: '1px solid var(--primary-border)',
        background: 'var(--bg)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      <Link
        href="/"
        className="text-xl tracking-widest transition-opacity hover:opacity-70"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }}
      >
        CATHERINE.EXE
        <span
          className="ml-0.5 inline-block h-4 w-2 animate-[blink_1.1s_step-end_infinite] align-middle"
          style={{ background: 'var(--primary)' }}
        />
      </Link>

      <div className="flex items-center gap-5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link}
            href={`#${link}`}
            className="text-[10px] tracking-[0.1em] transition-colors hover:opacity-100"
            style={{ color: 'var(--primary-dim)' }}
          >
            {link}
          </Link>
        ))}
        <PhosphorToggle />
      </div>
    </nav>
  );
}
