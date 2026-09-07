import { hero } from "@/content/home";
import { metrics } from "@/content/metrics";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const featuredMetrics = metrics.slice(0, 3);

  return (
    <section aria-label="Introduction" className="relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-32">
      <div aria-hidden className="bg-grid-lines pointer-events-none absolute inset-0 opacity-40" />

      <Container wide className="relative">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <Reveal>
              <p className="text-meta font-semibold text-accent uppercase">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-serif text-display font-medium text-balance text-ink">{hero.name}</h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lede text-ink-soft">{hero.statement}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <LinkButton href={hero.primaryCta.href} variant="solid">
                  {hero.primaryCta.label}
                </LinkButton>
                <LinkButton href={hero.secondaryCta.href} variant="line">
                  {hero.secondaryCta.label}
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm lg:justify-self-end">
            <HeroPhoto />
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mt-24 grid grid-cols-3 gap-6 border-t border-border pt-10 md:mt-32 md:max-w-2xl md:gap-10">
            {featuredMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-3xl text-ink md:text-4xl">{metric.value}</p>
                <p className="mt-1.5 text-sm text-ink-faint">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
