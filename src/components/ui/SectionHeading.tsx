import { cn } from "@/lib/cn";

export function SectionHeading({
  id,
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  id: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const headingId = `${id}-heading`;

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {kicker ? (
        <p
          className={cn(
            "mb-5 flex items-center gap-3 text-meta font-semibold text-ink-faint uppercase",
            align === "center" && "justify-center",
          )}
        >
          <span aria-hidden className="h-px w-8 bg-accent" />
          {kicker}
        </p>
      ) : null}
      <h2 id={headingId} className="font-serif text-h2 font-medium text-balance text-ink">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 text-lede leading-relaxed text-ink-soft">{subtitle}</p> : null}
    </div>
  );
}

export function sectionHeadingId(id: string) {
  return `${id}-heading`;
}
