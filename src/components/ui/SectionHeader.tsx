import { ReactNode } from 'react';

interface SectionHeaderProps {
  children: ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="text-primary-dim flex items-center gap-3 px-6 pt-3 pb-0 font-mono text-xs tracking-[0.2em]">
      {children}
      <span className="border-primary-border flex-1 border-b" />
    </div>
  );
}
