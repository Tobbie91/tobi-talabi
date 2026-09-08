export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
          <span aria-hidden className="mt-2.5 h-1 w-4 shrink-0 bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
