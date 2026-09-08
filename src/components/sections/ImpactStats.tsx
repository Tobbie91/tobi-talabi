import { metrics } from "@/content/metrics";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { Reveal } from "@/components/ui/Reveal";

const numeralTone = ["text-primary", "text-secondary", "text-gold", "text-jade", "text-primary", "text-secondary"];
const numeralSize = [
  "text-5xl md:text-6xl lg:text-7xl",
  "text-5xl md:text-6xl lg:text-7xl",
  "text-5xl md:text-6xl",
  "text-5xl md:text-6xl",
  "text-5xl md:text-6xl",
  "text-5xl md:text-6xl",
];

export function ImpactStats() {
  return (
    <ColorSection tone="ink" aria-label="Impact" className="py-20 md:py-28">
      <Container wide>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 60}>
              <div>
                <p className={`font-display font-extrabold ${numeralSize[index]} ${numeralTone[index]}`}>{metric.value}</p>
                <p className="mt-2 text-sm text-paper/60">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </ColorSection>
  );
}
