import type { Project } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "./WorkCard";

/** The dense editorial-list treatment, shared by the homepage's "other work" tier and the full /work index. */
export function WorkList({ projects, startIndex = 0 }: { projects: Project[]; startIndex?: number }) {
  return (
    <div className="border-t border-ink/10">
      {projects.map((project, position) => (
        <Reveal key={project.slug} delay={(position % 4) * 60}>
          <WorkCard project={project} index={position + startIndex} variant="compact" />
        </Reveal>
      ))}
    </div>
  );
}
