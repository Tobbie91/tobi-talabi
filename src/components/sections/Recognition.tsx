import { achievements } from "@/content/achievements";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Recognition() {
  return (
    <section aria-labelledby="recognition-heading" className="border-t border-border py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading id="recognition" kicker="Recognition" title="Milestones along the way" />
        </Reveal>

        <ol className="relative mt-16 max-w-3xl border-l border-border pl-8 md:pl-12">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title + index} delay={index * 60}>
              <li className="relative pb-14 last:pb-0">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-accent md:-left-[calc(3rem+5px)]"
                />
                <p className="text-meta font-semibold text-ink-faint uppercase">{achievement.date}</p>
                <p className="mt-3 font-serif text-h3 font-medium text-ink">{achievement.title}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{achievement.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
