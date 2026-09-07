import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGrid } from "./WorkGrid";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 border-t border-border py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading
            id="work"
            kicker="Selected Work"
            title="A selection of products, platforms and digital experiences I've helped bring to life."
          />
        </Reveal>

        <div className="mt-20 md:mt-28">
          <WorkGrid projects={projects} />
        </div>
      </Container>
    </section>
  );
}
