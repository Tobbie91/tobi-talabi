import type { Project } from "@/content/types";
import type { Tone } from "@/components/ui/ColorSection";
import { tierProjects } from "@/lib/work-layout";
import { ColorSection } from "@/components/ui/ColorSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "./WorkCard";

/**
 * Showcase and featured projects each get their own full-bleed coloured
 * section (per project.theme) so the colour-block-per-project identity
 * reads as real section changes while scrolling, not a card decoration.
 * Only the compact tier shares one plain section/Container.
 */
export function WorkGrid({ projects }: { projects: Project[] }) {
  const { showcase, featured, compact } = tierProjects(projects);

  return (
    <>
      {showcase && showcase.theme ? (
        <ColorSection tone={showcase.theme as Tone} className="py-24 md:py-32">
          <Container wide>
            <Reveal>
              <WorkCard project={showcase} index={0} variant="showcase" />
            </Reveal>
          </Container>
        </ColorSection>
      ) : null}

      {featured.map((project, position) =>
        project.theme ? (
          <ColorSection key={project.slug} tone={project.theme as Tone} className="py-24 md:py-32">
            <Container wide>
              <Reveal>
                <WorkCard project={project} index={position + 1} variant="feature" />
              </Reveal>
            </Container>
          </ColorSection>
        ) : null,
      )}

      {compact.length > 0 ? (
        <ColorSection tone="paper" aria-label="Other selected work" className="py-24 md:py-32">
          <Container wide>
            <div className="border-t border-ink/10">
              {compact.map((project, position) => (
                <Reveal key={project.slug} delay={(position % 4) * 60}>
                  <WorkCard project={project} index={position + featured.length + 1} variant="compact" />
                </Reveal>
              ))}
            </div>
          </Container>
        </ColorSection>
      ) : null}
    </>
  );
}
