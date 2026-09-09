import type { Testimonial } from "@/content/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border-t-4 border-accent pt-8">
      <span aria-hidden className="font-serif text-5xl leading-none text-accent italic">
        &ldquo;
      </span>

      <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">{testimonial.quote}</blockquote>

      <figcaption className="mt-8 border-t border-border pt-5">
        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
        <p className="mt-1 text-sm text-ink-soft">
          {testimonial.role}
          {testimonial.organization ? `, ${testimonial.organization}` : ""}
        </p>
      </figcaption>
    </figure>
  );
}
