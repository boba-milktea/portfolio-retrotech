import { LiveDot } from '@/components/ui/LiveDot';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="bg-primary-faint ${project.featured ? border-primary-mid : border-primary-border} flex flex-col gap-3 rounded-sm p-4 font-mono transition-all duration-200">
      <div className="flex items-center justify-between">
        <span className="text-primary-dim text-[9px] tracking-[0.15em]">PROJECT_{num}</span>
        {project.live && (
          <span className="text-primary-mid flex items-center gap-1 text-[9px] tracking-[0.15em]">
            <LiveDot />
            LIVE
          </span>
        )}
      </div>
      <h3 className="font-display text-primary text-[20px] leading-none tracking-[0.04px]">
        {project.title}
      </h3>
      <p className="text-primary-dim flex-1 text-[10px] leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-primary-mid border-primary-border rounded-sm border px-[6px] py-[2px] text-[9px] tracking-[0.06em]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-1 flex items-center gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary px-3 py-1 text-[9px] tracking-[0.1em] transition-opacity hover:opacity-70"
          >
            [ DEMO ]
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary px-3 py-1 text-[9px] tracking-[0.1em] transition-opacity hover:opacity-70"
          >
            [ SOURCE ]
          </a>
        )}
      </div>
    </article>
  );
}
