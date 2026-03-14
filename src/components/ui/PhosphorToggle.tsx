'use client';

import { useTheme } from '@/hooks/useTheme';

export function PhosphorToggle() {
  const { mode, toggleMode, isAmberMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      aria-label={`Switch to ${isAmberMode ? 'green' : 'amber'} phosphor mode`}
      className="flex items-center gap-2 px-[10px] py-1 rounded-sm cursor-pointer transition-all duration-300"
      style={{
        background: 'var(--primary-faint)',
        border: '1px solid var(--primary-border)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      <span
        className="text-[9px] tracking-[0.12em]"
        style={{ color: 'var(--primary-dim)' }}
      >
        PHOSPHOR: {mode.toUpperCase()}
      </span>

      <span
        className="relative inline-block w-7 h-[14px] rounded-full"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid var(--primary-border)',
        }}
      >
        <span
          className="absolute top-[2px] left-[2px] w-[10px] h-[10px] rounded-full transition-transform duration-300"
          style={{
            background: 'var(--primary)',
            transform: isAmberMode   ? 'translateX(14px)' : 'translateX(0)',
          }}
        />
      </span>
    </button>
  );
}