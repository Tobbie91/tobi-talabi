import { about } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 border-t border-border py-24 md:py-36">
      <Container wide>
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <Reveal>
            <p className="text-meta flex items-center gap-3 font-semibold tracking-[0.14em] text-ink-faint uppercase">
              <span aria-hidden className="h-px w-8 bg-accent" />
              {about.kicker}
            </p>
          </Reveal>

          <div>
            <Reveal delay={80}>
              <h2 id="about-heading" className="font-serif text-h1 font-medium text-balance text-ink">
                {about.statement}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-10 max-w-2xl text-lede leading-relaxed text-ink-soft">{about.paragraph}</p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10">
                <LinkButton href={about.cta.href}>{about.cta.label}</LinkButton>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <YouTubeEmbed videoId="0H3LatZvEis" title="Who is Tobi Talabi" className="mt-16 max-w-3xl" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
