import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
