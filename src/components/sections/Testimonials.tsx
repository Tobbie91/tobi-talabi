"use client";

import { useRef } from "react";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading id="testimonials" kicker="Testimonials" title="What people say about working with me" />
          </Reveal>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scrollByCard(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors duration-200 hover:border-ink"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scrollByCard(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors duration-200 hover:border-ink"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
