'use client';

import { useTheme } from '@/hooks/useTheme';

export function PhosphorToggle() {
  const { mode, toggleMode, isAmberMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      aria-label={`Switch to ${isAmberMode ? 'green' : 'amber'} phosphor mode`}
      className="bg-primary-faint border-primary-border flex cursor-pointer items-center gap-2 rounded-sm border px-[10px] py-1 font-mono transition-all duration-300"
    >
      <span className="text-primary-dim text-xs tracking-[0.12em]">
        PHOSPHOR: {mode.toUpperCase()}
      </span>

      <span
        className="relative inline-block h-[14px] w-7 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid var(--primary-border)',
        }}
      >
        <span
          className="bg-primary absolute top-[2px] left-[2px] h-[10px] w-[10px] rounded-full transition-transform duration-300"
          style={{
            transform: isAmberMode ? 'translateX(14px)' : 'translateX(0)',
          }}
        />
      </span>
    </button>
  );
}
