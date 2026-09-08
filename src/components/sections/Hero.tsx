import { hero } from "@/content/home";
import { metrics } from "@/content/metrics";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { ColorSection } from "@/components/ui/ColorSection";
import { ColorText } from "@/components/ui/ColorText";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { Reveal } from "@/components/ui/Reveal";

const numeralTone = ["text-paper", "text-gold", "text-paper"] as const;

export function Hero() {
  const featuredMetrics = metrics.slice(0, 3);

  return (
    <ColorSection tone="primary" aria-label="Introduction" className="overflow-hidden pt-14 pb-24 md:pt-20 md:pb-32">
      <Container wide>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-meta font-semibold text-paper/80 uppercase">
                <span aria-hidden className="h-px w-8 bg-gold" />
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-display font-extrabold text-balance text-paper">{hero.name}</h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lede leading-relaxed text-paper/90">
                <ColorText text={hero.statement} highlight={["solve real problems", "find their footing in tech"]} tone="gold" />
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <LinkButton href={hero.primaryCta.href} variant="solid-onDark">
                  {hero.primaryCta.label}
                </LinkButton>
                <LinkButton href={hero.secondaryCta.href} variant="line-onDark">
                  {hero.secondaryCta.label}
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none lg:justify-self-end">
            <HeroPhoto />
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mt-24 grid grid-cols-3 gap-6 border-t border-paper/20 pt-10 md:mt-32 md:max-w-2xl md:gap-10">
            {featuredMetrics.map((metric, index) => (
              <div key={metric.label}>
                <p className={`font-display text-3xl font-extrabold md:text-4xl ${numeralTone[index]}`}>{metric.value}</p>
                <p className="mt-1.5 text-sm text-paper/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </ColorSection>
  );
}
