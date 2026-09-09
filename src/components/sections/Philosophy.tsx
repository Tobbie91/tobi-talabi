import { philosophy } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { ColorText } from "@/components/ui/ColorText";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <ColorSection tone="paper" aria-label="Personal philosophy" className="py-24 md:py-32">
      <Container className="max-w-4xl text-center">
        <Reveal>
          <p className="text-meta font-semibold text-ink-soft uppercase">Philosophy</p>
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="mx-auto mt-8 font-serif text-h1 leading-[1.05] text-balance text-ink italic">
            &ldquo;
            <ColorText text={philosophy.pullQuote} highlight={["solve real problems"]} />
            &rdquo;
          </blockquote>
        </Reveal>
      </Container>
    </ColorSection>
  );
}
