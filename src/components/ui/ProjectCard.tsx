import { LiveDot } from "@/components/ui/LiveDot";
import type { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {

    const num = String(index + 1 ).padStart(2, "0");

    return (
        <article className="flex flex-col gap-3 p-4 rounded-sm transition-all duration-200 background-primary-faint font-mono ${project.featured ? border-primary-mid : border-primary-border}">
            <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[0.15em] color-primary-dim">
                    PROJECT_{num}
                </span>
                {project.live && (
                    <span className="flex items-center gap-1 text-[9px] tracking-[0.15em] color-primary-mid">
                       <LiveDot />
                       LIVE
                    </span>
                )}
            </div>
            <h3 className="text-[20px] leading-none tracking-[0.04px] font-display color-primary">
                {project.title}
            </h3>
            <p className="text-[10px] leading-relaxed flex-1 color-primary-dim">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] tracking-[0.06em] px-[6px] py-[2px] rounded-sm colo-primary-mid border border-primary-border">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-3 mt-1">
                {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[9px] tracking-[0.1em] px-3 py-1 transition-opacity hover:opacity-70 color-primary">
                        [ DEMO ]
                    </a>
                )}
                {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-[9px] tracking-[0.1em] px-3 py-1 transition-opacity hover:opacity-70 color-primary-dim">
                        [ SOURCE ]
                    </a>
                )}
            </div>
        </article>
    );
}