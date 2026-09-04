import type { Testimonial } from "@/content/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full w-[85vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-paper p-8 sm:w-[420px]">
      <blockquote className="text-lg leading-relaxed text-ink text-balance">&ldquo;{testimonial.quote}&rdquo;</blockquote>

      <figcaption className="mt-8 flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-paper-alt text-xs text-ink-faint"
        >
          {testimonial.isPlaceholder ? "?" : testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-ink-soft">
            {testimonial.role}, {testimonial.organization}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
