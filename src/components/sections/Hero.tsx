import { config } from "@/data/config"
import { LiveDot } from "@/components/ui/LiveDot"
import { CursorBlink } from "../ui/CursorBlink"

export function Hero() {
  return (
    <section id="work" className="px-6 pt-8 pb-7 border-b border-primary-border">
        <div className="flex items-center gap-2 mb-4 text-[9px] tracking-[0.15em] color-primary-dim font-mono">
            <LiveDot />
            SYSTEM ONLINE - {config.status}
        </div>
        <h1 className="text-[52px] leading-none tracking-[0.04em] mb-1 font-display color-primary">
           {config.name}
           <CursorBlink />
        </h1>
        <h2 className="text-[26px] tracking-[0.06px] mb-4 font-display color-primary-mid">
            {config.role}
        </h2>
        <div className="flex flex-col gap-1 mb-6 text-[11px] leading-relaxed max-w-lg color-primary-dim font-mono">
            {config.tagline.map((tag, index) => (
                <span key={index}>&gt; {tag}</span>
            ))}
        </div>

        <div className="flex items-center gap-3">
            <a href="#work" className="text-[11px] tracking-[0.1em] px-4 py-2 rounded-sm transition-opacity hover:opacity-80 background-primary color-bg font-mono">
                [VIEW PROJECTS]
            </a>
        </div>

        <a href={config.resumeURL} className="text-[11px] tracking-[0.1em] px-4 py-2 rounded-sm transition-opacity hover:opacity-80 background-primary color-bg font-mono">
            [RESUME.PDF]
        </a>
   </section>
  )
}

 