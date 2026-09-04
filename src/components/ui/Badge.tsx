import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/15 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep",
        className,
      )}
    >
      {children}
    </span>
  );
}
