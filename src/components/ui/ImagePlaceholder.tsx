import { cn } from "@/lib/cn";

export function ImagePlaceholder({
  label,
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-center justify-center border border-dashed border-border bg-paper px-6 text-center",
        aspect,
        className,
      )}
    >
      <span className="text-sm text-ink-soft">{label}</span>
    </div>
  );
}
