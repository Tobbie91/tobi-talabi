import type { Project } from "@/content/types";
import { tierProjects } from "@/lib/work-layout";
import { ColorSection } from "@/components/ui/ColorSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "./WorkCard";
import { WorkList } from "./WorkList";

/**
 * Every tier sits on the neutral paper/white system — the project screenshots
 * themselves provide the colour, alternating white/paper backgrounds give
 * gentle rhythm between entries without introducing new hues.
 */
export function WorkGrid({ projects }: { projects: Project[] }) {
  const { showcase, featured, compact } = tierProjects(projects);

  return (
    <>
      {showcase ? (
        <ColorSection tone="surface" className="border-t border-border py-24 md:py-32">
          <Container wide>
            <Reveal>
              <WorkCard project={showcase} index={0} variant="showcase" />
            </Reveal>
          </Container>
        </ColorSection>
      ) : null}

      {featured.map((project, position) => (
        <ColorSection
          key={project.slug}
          tone={position % 2 === 0 ? "paper" : "surface"}
          className="border-t border-border py-24 md:py-32"
        >
          <Container wide>
            <Reveal>
              <WorkCard project={project} index={position + 1} variant="feature" />
            </Reveal>
          </Container>
        </ColorSection>
      ))}

      {compact.length > 0 ? (
        <ColorSection tone="paper" aria-label="Other selected work" className="border-t border-border py-24 md:py-32">
          <Container wide>
            <WorkList projects={compact} startIndex={featured.length + 1} />
          </Container>
        </ColorSection>
      ) : null}
    </>
  );
}
