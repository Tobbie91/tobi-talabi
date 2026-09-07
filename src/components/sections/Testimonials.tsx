import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const published = testimonials.filter((testimonial) => !testimonial.isPlaceholder);

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-24 border-t border-border py-24 md:py-36">
      <Container wide>
        <Reveal>
          <SectionHeading id="testimonials" kicker="Testimonials" title="What people say about working with me" />
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
            <p className="mt-12 max-w-md border-t border-dashed border-border pt-8 text-sm text-ink-faint">
              Testimonials from collaborators and clients — coming soon.
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
