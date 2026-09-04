import { about } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-accent uppercase">{about.kicker}</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 id="about-heading" className="max-w-3xl text-h2 font-semibold text-balance text-ink">
            {about.statement}
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{about.paragraph}</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8">
            <LinkButton href={about.cta.href}>{about.cta.label}</LinkButton>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <YouTubeEmbed videoId="0H3LatZvEis" title="Who is Tobi Talabi" className="mt-14 max-w-3xl" />
        </Reveal>
      </Container>
    </section>
  );
}
