import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function CaseStudySection({
  number,
  kicker,
  heading,
  children,
  className,
}: {
  number: string;
  kicker: string;
  heading?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-t border-border py-16 md:py-20", className)}>
      <Container>
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            {number} — {kicker}
          </p>
          {heading ? (
            <h2 className="mt-3 max-w-2xl text-h3 font-semibold text-balance text-ink">{heading}</h2>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
