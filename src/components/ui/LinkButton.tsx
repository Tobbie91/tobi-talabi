import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid-onLight" | "solid-onDark" | "line-onLight" | "line-onDark" | "text";

export function LinkButton({
  href,
  children,
  variant = "text",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const base = "group inline-flex items-center gap-3 text-sm font-medium transition-colors duration-300";

  const variants: Record<Variant, string> = {
    "solid-onLight": "bg-ink px-7 py-3.5 text-paper hover:bg-primary",
    "solid-onDark": "bg-paper px-7 py-3.5 text-ink hover:bg-gold",
    "line-onLight": "border border-ink/30 px-7 py-3.5 text-ink hover:border-primary hover:text-primary",
    "line-onDark": "border border-paper/40 px-7 py-3.5 text-paper hover:border-paper",
    text: "text-current",
  };

  const content = (
    <>
      {variant === "text" && (
        <span aria-hidden className="h-px w-6 bg-current transition-[width] duration-300 group-hover:w-9" />
      )}
      {children}
      {variant !== "text" && (
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
