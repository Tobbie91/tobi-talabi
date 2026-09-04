import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "text";

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
  const base = "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200";

  const variants: Record<Variant, string> = {
    solid: "rounded-full bg-accent px-6 py-3 text-paper hover:bg-accent-deep",
    outline: "rounded-full border border-border px-6 py-3 text-ink hover:border-accent hover:text-accent",
    text: "group text-ink hover:text-accent",
  };

  const content = (
    <>
      {children}
      <span
        aria-hidden
        className={cn(
          "transition-transform duration-200",
          variant === "text" && "group-hover:translate-x-0.5",
        )}
      >
        →
      </span>
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
