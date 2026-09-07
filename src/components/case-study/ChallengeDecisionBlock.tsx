import type { ChallengeDecision } from "@/content/types";

export function ChallengeDecisionBlock({ item }: { item: ChallengeDecision }) {
  return (
    <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-3">
      <div>
        <p className="text-meta font-semibold text-ink-faint uppercase">Challenge</p>
        <p className="mt-3 leading-relaxed text-ink">{item.challenge}</p>
      </div>
      <div>
        <p className="text-meta font-semibold text-ink-faint uppercase">Decision</p>
        <p className="mt-3 leading-relaxed text-ink">{item.decision}</p>
      </div>
      <div>
        <p className="text-meta font-semibold text-ink-faint uppercase">Why</p>
        <p className="mt-3 leading-relaxed text-ink">{item.why}</p>
      </div>
    </div>
  );
}
