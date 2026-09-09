import { cn } from "@/lib/cn";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Wraps each occurrence of a phrase in `highlight` in the single accent colour.
 * There is only one accent in this system, so this is deliberately not
 * parametrised by tone — use it sparingly, for one phrase per section at most.
 */
export function ColorText({
  text,
  highlight,
  className,
}: {
  text: string;
  highlight: string[];
  className?: string;
}) {
  if (highlight.length === 0) return text;

  const pattern = new RegExp(`(${highlight.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    highlight.includes(part) ? (
      <span key={index} className={cn("text-accent", className)}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}
