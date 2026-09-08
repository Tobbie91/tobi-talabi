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
        "flex items-center justify-center border border-dashed border-current/30 bg-current/5 px-6 text-center",
        aspect,
        className,
      )}
    >
      <span className="text-sm opacity-70">{label}</span>
    </div>
  );
}
