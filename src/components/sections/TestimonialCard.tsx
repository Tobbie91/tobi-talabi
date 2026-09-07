import type { Testimonial } from "@/content/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between border-t border-border pt-8">
      <blockquote className="font-serif text-h3 leading-snug text-balance text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-10">
        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
        <p className="mt-1 text-sm text-ink-faint">
          {testimonial.role}, {testimonial.organization}
        </p>
      </figcaption>
    </figure>
  );
}
