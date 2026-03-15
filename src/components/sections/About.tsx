import { SectionHeader } from "@/components/ui/SectionHeader";
import { config } from "@/data/config";
import { CursorBlink } from "@/components/ui/CursorBlink";

export function About() {
    return (
        <section id="about" className="pb-6 border-b border-primary-border">

            <SectionHeader> ABOUT </SectionHeader>
            
            <div className="flex flex-col gap-1 px-6 pt-4 text-[11px] leading-relaxed color-primary-dim font-mono">
                {config.about.map((item, index) => (
                    <span key={index}>
                        &gt; {item} &lt;
                        {index !== config.about.length - 1 && <CursorBlink />}
                    </span>
                ))}
            </div>
            
        </section>
    );
}