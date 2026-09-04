import type { Project } from "@/content/types";
import { buildWorkLayoutGroups } from "@/lib/work-layout";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "./WorkCard";

export function WorkGrid({ projects }: { projects: Project[] }) {
  const groups = buildWorkLayoutGroups(projects);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {groups.map((group, groupIndex) => {
        if (group.kind === "single") {
          return (
            <Reveal key={group.item.project.slug} delay={(groupIndex % 3) * 80}>
              <WorkCard project={group.item.project} variant={group.variant} />
            </Reveal>
          );
        }

        return (
          <div key={group.items.map((item) => item.project.slug).join("-")} className="grid gap-12 md:grid-cols-2 md:gap-10">
            {group.items.map((item, itemIndex) => (
              <Reveal key={item.project.slug} delay={itemIndex * 100}>
                <WorkCard project={item.project} variant={item.variant} />
              </Reveal>
            ))}
          </div>
        );
      })}
    </div>
  );
}
