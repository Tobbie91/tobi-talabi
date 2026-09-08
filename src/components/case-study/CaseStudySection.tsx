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
    <section className={cn("border-t border-ink/10 py-16 md:py-20", className)}>
      <Container wide>
        <Reveal>
          <div className="grid gap-3 md:grid-cols-[10rem_1fr] md:gap-10">
            <p className="text-meta font-semibold text-ink-faint uppercase">
              {number} — {kicker}
            </p>
            <div>
              {heading ? (
                <h2 className="font-display text-h3 font-bold text-balance text-ink">{heading}</h2>
              ) : null}
              {children ? <div className={cn(heading && "mt-8")}>{children}</div> : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
