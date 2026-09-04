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
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">{kicker}</p>
      ) : null}
      <h2 id={headingId} className="text-h2 font-semibold text-balance text-ink">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

export function sectionHeadingId(id: string) {
  return `${id}-heading`;
}
