interface SkillPillProps {
  label: string;
}

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="color-primary-mid border-primary-border border px-2 py-[3px] font-mono text-[10px] tracking-[0.06em]">
      {label}
    </span>
  );
}
