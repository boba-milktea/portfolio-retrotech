'use client';

import { PhosphorToggle } from '@/components/ui/PhosphorToggle';
import Link from 'next/link';
import { CursorBlink } from '../ui/CursorBlink';

const NAV_LINKS = ['work', 'skills', 'about', 'contact'];

export function Navbar() {
  return (
    <nav className="border-primary-border bg-bg sticky top-0 z-40 flex items-center justify-between border px-6 py-3 font-mono">
      <Link
        href="/"
        className="text-primary font-mono text-xl tracking-widest transition-opacity hover:opacity-70"
      >
        CATHERINE.EXE
        <CursorBlink />
      </Link>

      <div className="flex items-center gap-5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link}
            href={`#${link}`}
            className="text-primary-dim text-sm tracking-[0.1em] transition-colors hover:opacity-100"
          >
            {link}
          </Link>
        ))}
        <PhosphorToggle />
      </div>
    </nav>
  );
}
