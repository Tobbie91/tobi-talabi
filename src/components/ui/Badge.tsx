import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-current/25 px-3 py-1 text-xs font-medium tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}
