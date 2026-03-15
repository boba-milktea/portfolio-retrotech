import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';
import { FadeIn } from '../ui/FadeIn';

export function Projects() {
  return (
    <section id="work" className="border-primary-border border-b pb-6">
      <FadeIn>
        <SectionHeader> SELECTED PROJECTS</SectionHeader>
      </FadeIn>
      <div className="sù:grid-cols-2 grid grid-cols-1 gap-3 px-6 pt-4">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} index={index} />
          </FadeIn>
        ))}
        <FadeIn delay={projects.length * 0.1}>
          <a
            href="https://github.com/boab-milktea?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary-border color-primary-dim flex items-center justify-center rounded-sm border p-4 font-mono text-[10px] tracking-[0.1px] transition-opacity hover:opacity-70"
          >
            &gt; _MORE ON GITHUB_ &lt;
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
