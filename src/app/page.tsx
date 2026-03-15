import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Page() {
  return (
    <div className="px-6 py-12 text-[11px] color-primary-dim font-mono">
      <Hero />
      <Projects />
    </div>
  );
}