import { hero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { ColorSection } from "@/components/ui/ColorSection";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <ColorSection tone="paper" aria-label="Introduction" className="overflow-hidden pt-14 pb-24 md:pt-20 md:pb-28">
      <Container wide>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-meta font-semibold text-ink-soft uppercase">
                <span aria-hidden className="h-px w-8 bg-accent" />
                {hero.identity} · {hero.role}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-h1 font-extrabold text-balance text-ink">{hero.headline}</h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lede leading-relaxed text-ink-soft">{hero.supporting}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <LinkButton href={hero.primaryCta.href} variant="solid">
                  {hero.primaryCta.label}
                </LinkButton>
                <LinkButton href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none lg:justify-self-end">
            <HeroPhoto />
          </Reveal>
        </div>
      </Container>
    </ColorSection>
  );
}
