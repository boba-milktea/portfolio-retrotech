import { SectionHeader } from "@/components/ui/SectionHeader";
import { config } from "@/data/config";

export function Contact() {
    return (
        <section id="contact" className="pb-6">

            <SectionHeader> CONTACT </SectionHeader>

            <div className="flex flex-col gap-3 px-6 pt-4">
                {config.contact.map((item, index) => (
                   <a key={index} 
                   href={item.href} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label={`Open ${item.label} in a new tab`}
                   className="flex items-center gap-2 tracking-[0.06em] w-fit transition-opacity hover:opacity-70 font-mono"
                   >
                    <span className="color-primary-dim">{item.prefix}</span>
                    <span className="color-primary-mid">{item.label}</span>
                   </a>
                ))}
            </div>
            
        </section>
    );
}