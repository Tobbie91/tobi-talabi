import { achievements } from "@/content/achievements";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ruleTone = ["border-primary", "border-secondary", "border-gold"];
const dateTone = ["text-primary", "text-secondary", "text-jade"];

export function Recognition() {
  return (
    <ColorSection tone="paper" aria-labelledby="recognition-heading" className="py-24 md:py-36">
      <Container wide className="text-center">
        <Reveal>
          <SectionHeading
            id="recognition"
            kicker="Recognition"
            title="Milestones along the way"
            kickerClassName="text-ink-faint"
            align="center"
          />
        </Reveal>

        <ol className="mx-auto mt-16 max-w-3xl text-left">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title + index} delay={index * 60}>
              <li className={`border-l-4 py-8 pl-8 first:pt-0 md:pl-12 ${ruleTone[index % ruleTone.length]}`}>
                <p className={`font-display text-2xl font-extrabold ${dateTone[index % dateTone.length]}`}>{achievement.date}</p>
                <p className="mt-3 font-display text-h3 font-bold text-ink">{achievement.title}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{achievement.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </ColorSection>
  );
}
