import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGrid } from "./WorkGrid";

export function SelectedWork() {
  return (
    <>
      <ColorSection tone="ink" id="work" aria-labelledby="work-heading" className="scroll-mt-24 py-24 md:py-32">
        <Container wide>
          <Reveal>
            <SectionHeading
              id="work"
              kicker="Selected Work"
              title="A curated showcase of products, platforms and digital experiences I've helped bring to life."
              kickerClassName="text-paper/60"
            />
          </Reveal>
        </Container>
      </ColorSection>

      <WorkGrid projects={projects} />
    </>
  );
}
