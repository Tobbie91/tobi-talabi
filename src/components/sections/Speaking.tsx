import { trainingEvents } from "@/content/training";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TrainingCard } from "./TrainingCard";

export function Speaking() {
  return (
    <section id="speaking" aria-labelledby="speaking-heading" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="speaking"
            kicker="Speaking & Training"
            title="Sharing what I know with the technology community."
            subtitle="Webinars, workshops and training sessions I've hosted for developers and teams navigating tech."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {trainingEvents.map((event, index) => (
            <Reveal key={event.slug} delay={index * 100}>
              <TrainingCard event={event} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
