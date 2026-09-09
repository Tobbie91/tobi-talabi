import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGrid } from "./WorkGrid";

// Only the three strongest projects lead the homepage — everything else lives
// on the full /work index, linked below.
const featured = projects.slice(0, 3);

export function SelectedWork() {
  return (
    <>
      <ColorSection tone="paper" id="work" aria-labelledby="work-heading" className="scroll-mt-24 py-24 md:py-32">
        <Container wide>
          <Reveal>
            <SectionHeading
              id="work"
              kicker="Selected Work"
              title="A curated showcase of products, platforms and digital experiences I've helped bring to life."
              kickerClassName="text-ink-soft"
            />
          </Reveal>
        </Container>
      </ColorSection>

      <WorkGrid projects={featured} />

      <ColorSection tone="paper" aria-label="More projects" className="py-14 md:py-16">
        <Container wide className="flex justify-center">
          <LinkButton href="/work" variant="outline">
            View all projects
          </LinkButton>
        </Container>
      </ColorSection>
    </>
  );
}
