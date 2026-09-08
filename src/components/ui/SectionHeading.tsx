import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  id,
  kicker,
  title,
  subtitle,
  align = "left",
  kickerClassName,
}: {
  id: string;
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  kickerClassName?: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {kicker ? (
        <p
          className={cn(
            "mb-5 flex items-center gap-3 text-meta font-semibold opacity-70 uppercase",
            align === "center" && "justify-center",
            kickerClassName,
          )}
        >
          <span aria-hidden className="h-px w-8 bg-current" />
          {kicker}
        </p>
      ) : null}
      <h2 id={headingId} className="font-display text-h2 font-semibold text-balance">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 text-lede leading-relaxed opacity-80">{subtitle}</p> : null}
    </div>
  );
}

export function sectionHeadingId(id: string) {
  return `${id}-heading`;
}
