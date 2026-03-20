import type { ReactNode } from 'react';

interface BottomRowProps {
  left: ReactNode;
  right: ReactNode;
}

export function BottomRow({ left, right }: BottomRowProps) {
  return (
    <div className="border-primary-border grid grid-cols-1 gap-3 border sm:grid-cols-2">
      <div className="border-primary-border border-r">{left}</div>
      <div>{right}</div>
    </div>
  );
}
