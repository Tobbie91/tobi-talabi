import Image from "next/image";
import type { CaseStudy, Project } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudySection } from "./CaseStudySection";
import { BulletList } from "./BulletList";
import { FlowSteps } from "./FlowSteps";
import { ChallengeDecisionBlock } from "./ChallengeDecisionBlock";
import { MetricsGrid } from "./MetricsGrid";
import { EvidenceGrid } from "./EvidenceGrid";

export function CaseStudyPage({ project, caseStudy }: { project: Project; caseStudy: CaseStudy }) {
  return (
    <>
      <CaseStudyHero project={project} caseStudy={caseStudy} />

      <CaseStudySection number="02" kicker="The Context" heading="The challenge">
        <BulletList items={caseStudy.context.challenges} />
      </CaseStudySection>

      <CaseStudySection number="03" kicker="My Role" heading="My contribution">
        <BulletList items={caseStudy.contribution.items} />
      </CaseStudySection>

      <CaseStudySection number="04" kicker="The Engineering">
        <p className="max-w-2xl leading-relaxed text-ink-soft">{caseStudy.engineering.description}</p>
        {caseStudy.engineering.flow ? (
          <div className="mt-8">
            <FlowSteps steps={caseStudy.engineering.flow.steps} />
          </div>
        ) : null}
      </CaseStudySection>

      {caseStudy.product?.journey ? (
        <CaseStudySection number="05" kicker="The Product" heading="A member journey">
          <FlowSteps steps={caseStudy.product.journey.steps} />
          {caseStudy.product.image ? (
            <div className="relative mt-8 aspect-16/9 max-w-4xl overflow-hidden border border-border">
              <Image
                src={caseStudy.product.image}
                alt={`${project.name} product screenshot`}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : null}
        </CaseStudySection>
      ) : null}

      {caseStudy.challenges.length > 0 ? (
        <CaseStudySection number="06" kicker="Challenges & Decisions">
          <div className="flex flex-col gap-6">
            {caseStudy.challenges.map((item, index) => (
              <ChallengeDecisionBlock key={index} item={item} />
            ))}
          </div>
        </CaseStudySection>
      ) : null}

      <CaseStudySection number="07" kicker="Results" heading="Impact">
        <BulletList items={caseStudy.results.impact} />
        {caseStudy.results.metrics && caseStudy.results.metrics.length > 0 ? (
          <div className="mt-10">
            <MetricsGrid metrics={caseStudy.results.metrics} />
          </div>
        ) : null}
      </CaseStudySection>

      {caseStudy.learnings ? (
        <CaseStudySection number="08" kicker="What I Learned">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{caseStudy.learnings}</p>
        </CaseStudySection>
      ) : null}

      <CaseStudySection number="09" kicker="Evidence & Recognition">
        <EvidenceGrid items={caseStudy.evidence} />
      </CaseStudySection>

      <section className="border-t border-border py-16 md:py-20">
        <Container wide>
          <LinkButton href="/#work" variant="outline">
            Back to work
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
