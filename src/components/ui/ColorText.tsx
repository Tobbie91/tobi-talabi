import { cn } from "@/lib/cn";

type Tone = "primary" | "secondary" | "gold" | "jade" | "paper" | "ink";

const toneClass: Record<Tone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  gold: "text-gold",
  jade: "text-jade",
  paper: "text-paper",
  ink: "text-ink",
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Wraps each occurrence of a phrase in `highlight` with a coloured span — the two-tone headline device. */
export function ColorText({
  text,
  highlight,
  tone = "primary",
  className,
}: {
  text: string;
  highlight: string[];
  tone?: Tone;
  className?: string;
}) {
  if (highlight.length === 0) return text;

  const pattern = new RegExp(`(${highlight.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    highlight.includes(part) ? (
      <span key={index} className={cn(toneClass[tone], className)}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}
