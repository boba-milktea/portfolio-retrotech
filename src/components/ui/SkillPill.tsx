interface SkillPillProps {
  label: string;
}

export function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="text-primary-mid border-primary-border border px-2 py-[3px] font-mono text-sm tracking-[0.06em]">
      {label}
    </span>
  );
}
