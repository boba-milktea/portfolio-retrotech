interface SkillPillProps {
    label: string;
}

export function SkillPill({ label }: SkillPillProps) {
    return (
        <span className="text-[10px] tracking-[0.06em] px-2 py-[3px] color-primary-mid border border-primary-border font-mono">
            {label}
        </span>
    );
}