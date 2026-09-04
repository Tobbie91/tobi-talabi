import type { ChallengeDecision } from "@/content/types";

export function ChallengeDecisionBlock({ item }: { item: ChallengeDecision }) {
  return (
    <div className="grid gap-6 rounded-2xl border border-border p-8 md:grid-cols-3">
      <div>
        <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Challenge</p>
        <p className="mt-2 leading-relaxed text-ink">{item.challenge}</p>
      </div>
      <div>
        <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Decision</p>
        <p className="mt-2 leading-relaxed text-ink">{item.decision}</p>
      </div>
      <div>
        <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Why</p>
        <p className="mt-2 leading-relaxed text-ink">{item.why}</p>
      </div>
    </div>
  );
}
