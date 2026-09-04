import { philosophy } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section aria-label="Personal philosophy" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <blockquote className="mx-auto max-w-3xl text-center text-h2 font-semibold text-balance text-ink">
            &ldquo;{philosophy.quote}&rdquo;
          </blockquote>
        </Reveal>
        {philosophy.isPlaceholder ? (
          <Reveal delay={100}>
            <p className="mt-6 text-center text-sm text-ink-faint">Placeholder — to be provided</p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
