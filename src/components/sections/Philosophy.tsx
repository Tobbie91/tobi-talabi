import { philosophy } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { ColorText } from "@/components/ui/ColorText";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <ColorSection tone="ink" aria-label="Personal philosophy" className="py-28 md:py-40">
      <Container className="max-w-4xl text-center">
        <Reveal>
          <p className="text-meta font-semibold text-paper/45 uppercase">Philosophy</p>
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="mx-auto mt-8 font-serif text-h1 leading-[1.05] text-balance italic">
            &ldquo;
            <ColorText text={philosophy.pullQuote} highlight={["solve real problems"]} tone="primary" />
            &rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-lede leading-relaxed text-paper/65">{philosophy.body}</p>
        </Reveal>
      </Container>
    </ColorSection>
  );
}
