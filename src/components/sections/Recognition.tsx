import { achievements } from "@/content/achievements";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Recognition() {
  return (
    <section aria-labelledby="recognition-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="recognition" kicker="Recognition" title="Milestones along the way" />
        </Reveal>

        <ul className="mt-12 divide-y divide-border border-t border-border">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title + index} delay={index * 60}>
              <li className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <p className="font-medium text-ink">{achievement.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{achievement.description}</p>
                </div>
                <p className="shrink-0 text-sm text-ink-faint">{achievement.date}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
