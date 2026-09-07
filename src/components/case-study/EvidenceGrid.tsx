import type { EvidenceItem } from "@/content/types";

export function EvidenceGrid({ items }: { items: EvidenceItem[] }) {
  if (items.length === 0) {
    return <p className="border-t border-dashed border-border pt-8 text-sm text-ink-faint">Evidence & recognition — coming soon.</p>;
  }

  return (
    <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.label} className="border-t border-border pt-5">
          <p className="text-meta font-semibold text-accent uppercase">{item.type}</p>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-medium text-ink transition-colors duration-200 hover:text-accent"
            >
              {item.label} →
            </a>
          ) : (
            <p className="mt-2 font-medium text-ink">{item.label}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
