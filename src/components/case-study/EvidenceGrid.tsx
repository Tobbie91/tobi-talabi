import type { EvidenceItem } from "@/content/types";

export function EvidenceGrid({ items }: { items: EvidenceItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center">
        <p className="text-ink-soft">Evidence & recognition — coming soon.</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.label} className="rounded-2xl border border-border p-5">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">{item.type}</p>
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
