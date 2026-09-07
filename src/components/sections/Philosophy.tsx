import { philosophy } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section aria-label="Personal philosophy" className="border-t border-border bg-ink py-28 text-paper md:py-40">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-meta font-semibold text-paper/50 uppercase">Philosophy</p>
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="mt-8 font-serif text-h1 leading-[1.08] text-balance">
            &ldquo;{philosophy.pullQuote}&rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl text-lede leading-relaxed text-paper/70">{philosophy.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
