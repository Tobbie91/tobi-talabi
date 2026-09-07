export function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <span className="border border-border-strong px-4 py-2 text-sm font-medium text-ink">{step}</span>
          {index < steps.length - 1 ? (
            <span aria-hidden className="text-ink-faint">
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
