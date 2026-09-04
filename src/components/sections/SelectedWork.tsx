import { projects } from "@/content/projects";
import { caseStudies } from "@/content/case-studies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGrid } from "./WorkGrid";

// Projects with a full written case study lead the section; everything else
// (no entry in content/case-studies.ts yet, so it only gets the "coming soon"
// stub page) is grouped below as lighter-weight selected work.
const caseStudyProjects = projects.filter((project) => caseStudies[project.slug]);
const otherProjects = projects.filter((project) => !caseStudies[project.slug]);

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="work"
            kicker="Selected Work"
            title="A selection of products, platforms and digital experiences I've helped bring to life."
          />
        </Reveal>

        {caseStudyProjects.length > 0 ? (
          <div className="mt-16">
            <Reveal>
              <p className="mb-8 text-xs font-semibold tracking-[0.18em] text-accent uppercase">Case Studies</p>
            </Reveal>
            <WorkGrid projects={caseStudyProjects} />
          </div>
        ) : null}

        {otherProjects.length > 0 ? (
          <div className="mt-20 md:mt-28">
            <Reveal>
              <p className="mb-8 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                Other Selected Work
              </p>
            </Reveal>
            <WorkGrid projects={otherProjects} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
