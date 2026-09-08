import type { Testimonial } from "@/content/types";

const markTone = ["text-primary", "text-gold", "text-jade"];
const ruleTone = ["border-primary", "border-gold", "border-jade"];

export function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <figure className={`flex h-full flex-col border-t-4 pt-8 ${ruleTone[index % ruleTone.length]}`}>
      <span aria-hidden className={`font-serif text-5xl leading-none italic ${markTone[index % markTone.length]}`}>
        &ldquo;
      </span>

      <blockquote className="mt-4 flex-1 leading-relaxed text-paper/85">{testimonial.quote}</blockquote>

      <figcaption className="mt-8 border-t border-paper/15 pt-5">
        <p className="text-sm font-semibold text-paper">{testimonial.name}</p>
        <p className="mt-1 text-sm text-paper/60">
          {testimonial.role}
          {testimonial.organization ? `, ${testimonial.organization}` : ""}
        </p>
      </figcaption>
    </figure>
  );
}
