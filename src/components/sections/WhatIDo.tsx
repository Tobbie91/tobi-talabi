import { capabilities } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhatIDo() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="border-t border-border py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading id="capabilities" kicker="What I Do" title="Where I add the most value." />
        </Reveal>

        <ul className="mt-16 border-t border-border">
          {capabilities.map((item, index) => (
            <Reveal key={item.index} delay={index * 60}>
              <li className="group grid grid-cols-1 gap-3 border-b border-border py-8 md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline md:gap-8 md:py-10">
                <span className="font-serif text-lg text-ink-faint transition-colors duration-300 group-hover:text-accent">
                  {item.index}
                </span>
                <h3 className="font-serif text-h3 font-medium text-ink">{item.title}</h3>
                <p className="max-w-md text-ink-soft leading-relaxed">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
