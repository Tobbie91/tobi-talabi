import { about } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { ColorText } from "@/components/ui/ColorText";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function About() {
  return (
    <ColorSection tone="paper" id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-24 md:py-36">
      <Container wide className="text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-meta font-semibold text-ink-faint uppercase">
            <span aria-hidden className="h-px w-8 bg-primary" />
            {about.kicker}
            <span aria-hidden className="h-px w-8 bg-primary" />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 id="about-heading" className="mx-auto mt-8 max-w-4xl font-display text-h1 font-extrabold text-balance text-ink">
            <ColorText text={about.statement} highlight={["real problems"]} tone="primary" />
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-10 max-w-2xl text-lede leading-relaxed text-ink-soft">{about.paragraph}</p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex justify-center">
            <LinkButton href={about.cta.href} variant="line-onLight">
              {about.cta.label}
            </LinkButton>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <YouTubeEmbed videoId="0H3LatZvEis" title="Who is Tobi Talabi" className="mx-auto mt-16 max-w-3xl" />
        </Reveal>
      </Container>
    </ColorSection>
  );
}
