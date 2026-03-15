import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
    return (
        <section id="work" className="pb-6 border-b border-primary-border">
            <SectionHeader> SELECTED PROJECTS</SectionHeader>
            <div className="grid grid-cols-1 sù:grid-cols-2 gap-3 px-6 pt-4">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
                <a href="https://github.com/boab-milktea?tab=repositories" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center p-4 rounded-sm text-[10px] tracking-[0.1px] transition-opacity hover:opacity-70 border border-primary-border color-primary-dim font-mono">
                    &gt; _MORE ON GITHUB_ &lt;
                </a>
            </div>
        </section>
    );
}