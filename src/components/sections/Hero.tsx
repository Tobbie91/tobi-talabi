import { hero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section aria-label="Introduction" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <h1 className="max-w-xl text-hero font-semibold text-balance text-ink">{hero.headline}</h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft">{hero.subhead}</p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LinkButton href={hero.primaryCta.href} variant="solid">
                  {hero.primaryCta.label}
                </LinkButton>
                <LinkButton href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end">
            <HeroPhoto />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
