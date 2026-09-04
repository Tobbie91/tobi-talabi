export function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <span className="rounded-full border border-accent/15 bg-accent-soft px-4 py-2 text-sm font-medium text-accent-deep">
            {step}
          </span>
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
