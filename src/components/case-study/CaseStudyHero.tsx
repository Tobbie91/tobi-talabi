import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, Project } from "@/content/types";
import { ColorSection } from "@/components/ui/ColorSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

export function CaseStudyHero({ project, caseStudy }: { project: Project; caseStudy: CaseStudy }) {
  // Beafrique's asset is an editorial fashion photo, not a product screenshot — skip browser chrome for it.
  const framed = project.slug !== "beafrique";

  return (
    <ColorSection tone="paper" className="pt-14 pb-16 md:pt-20 md:pb-20">
      <Container wide>
        <Reveal>
          <Link href="/#work" className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-200 hover:text-ink">
            <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to work
          </Link>

          <h1 className="mt-8 max-w-3xl font-display text-h1 font-extrabold text-balance text-ink">{caseStudy.title}</h1>
          <p className="mt-5 max-w-2xl text-lede text-ink-soft">{caseStudy.subtitle}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">{caseStudy.summary}</p>

          <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-border pt-8 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-meta font-semibold text-ink-soft uppercase">My role</dt>
              <dd className="mt-2 text-ink">{caseStudy.meta.role}</dd>
            </div>
            <div>
              <dt className="text-meta font-semibold text-ink-soft uppercase">Stack</dt>
              <dd className="mt-2 text-ink">{caseStudy.meta.stack.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-meta font-semibold text-ink-soft uppercase">Scope</dt>
              <dd className="mt-2 text-ink">{caseStudy.meta.scope.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>

        {caseStudy.heroImage ? (
          <Reveal delay={150}>
            {framed ? (
              <DeviceFrame
                src={caseStudy.heroImage}
                alt={`${project.name} product screenshot`}
                aspect="aspect-16/9"
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="mt-14"
                priority
              />
            ) : (
              <div className="relative mt-14 aspect-16/9 overflow-hidden border border-border">
                <Image
                  src={caseStudy.heroImage}
                  alt={`${project.name} product screenshot`}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            )}
          </Reveal>
        ) : null}
      </Container>
    </ColorSection>
  );
}
