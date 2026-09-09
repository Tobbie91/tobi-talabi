import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type Tone = "paper" | "surface" | "dark";

/** Centralised bg/text pairing per tone. Paper is the default; surface (white) is used
 * occasionally for lift; dark is reserved for the one high-contrast section (Contact). */
const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  dark: "bg-dark text-paper",
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
