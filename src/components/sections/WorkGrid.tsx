import type { Project } from "@/content/types";
import { tierProjects } from "@/lib/work-layout";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "./WorkCard";

export function WorkGrid({ projects }: { projects: Project[] }) {
  const { showcase, featured, compact } = tierProjects(projects);

  return (
    <div>
      {showcase ? (
        <Reveal>
          <WorkCard project={showcase} index={0} variant="showcase" />
        </Reveal>
      ) : null}

      {featured.length > 0 ? (
        <div className="mt-24 flex flex-col gap-20 md:mt-32 md:gap-28">
          {featured.map((project, position) => (
            <Reveal key={project.slug} delay={position * 80}>
              <WorkCard project={project} index={position + 1} variant="feature" />
            </Reveal>
          ))}
        </div>
      ) : null}

      {compact.length > 0 ? (
        <div className="mt-24 border-t border-border md:mt-32">
          {compact.map((project, position) => (
            <Reveal key={project.slug} delay={(position % 4) * 60}>
              <WorkCard project={project} index={position + featured.length + 1} variant="compact" />
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
