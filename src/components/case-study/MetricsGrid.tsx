import type { CaseStudyMetric } from "@/content/types";

export function MetricsGrid({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className="font-display text-3xl font-extrabold text-primary">{metric.value}</p>
          <p className="mt-1.5 text-sm text-ink-soft">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
