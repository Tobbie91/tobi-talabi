import { trainingEvents } from "@/content/training";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TrainingCard } from "./TrainingCard";

export function Speaking() {
  const [lead, ...rest] = trainingEvents;

  return (
    <section id="speaking" aria-labelledby="speaking-heading" className="scroll-mt-24 border-t border-border py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading
            id="speaking"
            kicker="Speaking & Training"
            title="Sharing what I know with the technology community."
            subtitle="Webinars, workshops and training sessions I've hosted for developers and teams navigating tech."
          />
        </Reveal>

        {lead ? (
          <div className="mt-20 md:mt-28">
            <Reveal>
              <TrainingCard event={lead} variant="showcase" />
            </Reveal>
          </div>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-20 flex flex-col gap-16 border-t border-border pt-16 md:mt-24 md:gap-20 md:pt-20">
            {rest.map((event, index) => (
              <Reveal key={event.slug} delay={index * 80}>
                <TrainingCard event={event} variant="feature" />
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
