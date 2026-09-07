import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  /** Widens the column for sections that need more room for imagery/asymmetry. */
  wide?: boolean;
}) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10", wide ? "max-w-[1440px]" : "max-w-6xl", className)}>
      {children}
    </div>
  );
}
