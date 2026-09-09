import { metrics } from "@/content/metrics";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { Reveal } from "@/components/ui/Reveal";

export function ImpactStats() {
  return (
    <ColorSection tone="surface" aria-label="Impact" className="py-20 md:py-28">
      <Container wide>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-border pt-12 sm:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 60}>
              <div>
                <p className="font-display text-5xl font-extrabold text-ink md:text-6xl lg:text-7xl">{metric.value}</p>
                <p className="mt-2 text-sm text-ink-soft">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </ColorSection>
  );
}
