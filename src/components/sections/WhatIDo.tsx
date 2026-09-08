import { capabilities } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const numeralTone = ["text-primary", "text-secondary", "text-gold", "text-jade", "text-ink"];

export function WhatIDo() {
  return (
    <ColorSection tone="paper" id="capabilities" aria-labelledby="capabilities-heading" className="py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading id="capabilities" kicker="What I Do" title="Where I add the most value." kickerClassName="text-ink-faint" />
        </Reveal>

        <ul className="mt-16 border-t border-ink/10">
          {capabilities.map((item, index) => (
            <Reveal key={item.index} delay={index * 60}>
              <li className="grid grid-cols-1 gap-3 border-b border-ink/10 py-8 md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-8 md:py-10">
                <span className={`font-display text-2xl font-extrabold ${numeralTone[index % numeralTone.length]}`}>
                  {item.index}
                </span>
                <h3 className="font-display text-h3 font-bold text-ink">{item.title}</h3>
                <p className="max-w-md leading-relaxed text-ink-soft">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </ColorSection>
  );
}
