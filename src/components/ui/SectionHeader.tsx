import { ReactNode } from "react";

interface SectionHeaderProps {
    children: ReactNode;
}

function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 px-6 pt-3 pb-0 text-[9px] tracking-[0.2em] font-mono text-primary-dim">
        {children}
        <span className="flex-1 border-b border-primary-border" />
    </div>
  )
}

export default SectionHeader