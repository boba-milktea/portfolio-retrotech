'use client';

import { useTheme } from '@/hooks/useTheme';

export function PhosphorToggle() {
  const { mode, toggleMode, isAmberMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      aria-label={`Switch to ${isAmberMode ? 'green' : 'amber'} phosphor mode`}
      className="flex cursor-pointer items-center gap-2 rounded-sm px-[10px] py-1 transition-all duration-300"
      style={{
        background: 'var(--primary-faint)',
        border: '1px solid var(--primary-border)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      <span className="text-[9px] tracking-[0.12em]" style={{ color: 'var(--primary-dim)' }}>
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
          className="absolute top-[2px] left-[2px] h-[10px] w-[10px] rounded-full transition-transform duration-300"
          style={{
            background: 'var(--primary)',
            transform: isAmberMode ? 'translateX(14px)' : 'translateX(0)',
          }}
        />
      </span>
    </button>
  );
}
