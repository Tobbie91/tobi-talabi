import { metrics } from "@/content/metrics";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ImpactStats() {
  return (
    <section aria-label="Impact" className="border-t border-border bg-paper-alt/50 py-20 md:py-28">
      <Container wide>
        <div className="grid grid-cols-2 divide-x divide-y divide-border border border-border sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 60} className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 px-6 py-8 md:px-7 md:py-10">
                <p className="font-serif text-4xl text-ink md:text-5xl">{metric.value}</p>
                <p className="text-sm leading-snug text-ink-soft">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
