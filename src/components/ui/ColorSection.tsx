import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type Tone = "primary" | "secondary" | "ink" | "paper" | "gold" | "jade" | "ajoti" | "beafrique" | "esemie";

/** Centralised bg/text pairing per tone — every section picks one instead of hand-rolling bg-x text-y. */
const toneClasses: Record<Tone, string> = {
  primary: "bg-primary text-paper",
  secondary: "bg-secondary text-paper",
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
  gold: "bg-gold text-ink",
  jade: "bg-jade text-paper",
  ajoti: "bg-ajoti text-paper",
  beafrique: "bg-beafrique text-paper",
  esemie: "bg-esemie text-paper",
};

export function ColorSection({
  tone,
  className,
  children,
  ...rest
}: { tone: Tone } & ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("relative", toneClasses[tone], className)} {...rest}>
      {children}
    </section>
  );
}
