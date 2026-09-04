import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, Project } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudyHero({ project, caseStudy }: { project: Project; caseStudy: CaseStudy }) {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20">
      <Container>
        <Reveal>
          <Link href="/#work" className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink">
            ← Back to work
          </Link>

          <h1 className="mt-6 max-w-3xl text-hero font-semibold text-balance text-ink">{caseStudy.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{caseStudy.subtitle}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">{caseStudy.summary}</p>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-xs font-semibold tracking-wide text-ink-faint uppercase">My role</dt>
              <dd className="mt-1 text-ink">{caseStudy.meta.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Stack</dt>
              <dd className="mt-1 text-ink">{caseStudy.meta.stack.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-wide text-ink-faint uppercase">Scope</dt>
              <dd className="mt-1 text-ink">{caseStudy.meta.scope.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>

        {caseStudy.heroImage ? (
          <Reveal delay={150}>
            <div className="relative mt-12 aspect-16/9 overflow-hidden rounded-3xl border border-border">
              <Image
                src={caseStudy.heroImage}
                alt={`${project.name} product screenshot`}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
