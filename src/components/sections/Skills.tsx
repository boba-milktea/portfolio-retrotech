import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillPill } from '@/components/ui/SkillPill';
import { skillGroups } from '@/data/skills';
import { FadeIn } from '../ui/FadeIn';

export function Skills() {
  return (
    <section id="skills" className="border-primary-border border-b pb-6">
      <FadeIn>
        <SectionHeader> SKILLS </SectionHeader>
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 px-6 pt-4 sm:grid-cols-3">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.label} delay={index * 0.1}>
            <div>
              <p className="color-primary-dim mb-3 font-mono text-[9px] tracking-[0.18em]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
