import { metrics } from "@/content/metrics";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ImpactStats() {
  return (
    <section aria-label="Impact" className="border-y border-border bg-paper-alt/60 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 60}>
              <div>
                <p className="text-3xl font-semibold text-ink md:text-4xl">{metric.value}</p>
                <p className="mt-2 text-sm text-ink-soft">{metric.label}</p>
                {metric.isPlaceholder ? (
                  <p className="mt-1 text-xs text-ink-faint">[NUMBER TO BE PROVIDED]</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
