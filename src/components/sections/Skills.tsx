import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillPill } from "@/components/ui/SkillPill";
import { skillGroups } from "@/data/skills";

export function Skills() {
    return (
        <section id="skills" className="pb-6 border-b border-primary-border">
            
            <SectionHeader> SKILLS </SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 pt-4">
                {skillGroups.map((group) => (
                    <div key={group.label}>
                        <p className="text-[9px] tracking-[0.18em] mb-3 color-primary-dim font-mono">
                            {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <SkillPill key={skill} label={skill} />
                            ))}
                        </div>
                    </div>  
                ))}
            </div>
        </section>
    );
}