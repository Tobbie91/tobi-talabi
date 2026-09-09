import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { ColorSection } from "@/components/ui/ColorSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const published = testimonials.filter((testimonial) => !testimonial.isPlaceholder);

  return (
    <ColorSection tone="surface" id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-24 py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading
            id="testimonials"
            kicker="Testimonials"
            title="What people say about working with me"
            kickerClassName="text-ink-soft"
          />
        </Reveal>

        {published.length > 0 ? (
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {published.map((testimonial, index) => (
              <Reveal key={testimonial.name + index} delay={index * 80}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <p className="mt-12 max-w-md border-t border-dashed border-border pt-8 text-sm text-ink-soft">
              Testimonials from collaborators and clients — coming soon.
            </p>
          </Reveal>
        )}
      </Container>
    </ColorSection>
  );
}
