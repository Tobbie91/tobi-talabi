import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, Project } from "@/content/types";
import type { Tone } from "@/components/ui/ColorSection";
import { ColorSection } from "@/components/ui/ColorSection";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceFrame } from "@/components/ui/DeviceFrame";

export function CaseStudyHero({ project, caseStudy }: { project: Project; caseStudy: CaseStudy }) {
  const tone: Tone = project.theme ?? "ink";
  const linkClass = project.theme ? "text-paper/70 hover:text-paper" : "text-paper/60 hover:text-paper";
  const dtClass = project.theme ? "text-paper/55" : "text-paper/50";
  const ruleClass = project.theme ? "border-paper/20" : "border-paper/15";
  const framed = project.theme !== "beafrique";

  return (
    <ColorSection tone={tone} className="pt-14 pb-16 md:pt-20 md:pb-20">
      <Container wide>
        <Reveal>
          <Link href="/#work" className={`group inline-flex items-center gap-2 text-sm transition-colors duration-200 ${linkClass}`}>
            <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to work
          </Link>

          <h1 className="mt-8 max-w-3xl font-display text-h1 font-extrabold text-balance">{caseStudy.title}</h1>
          <p className="mt-5 max-w-2xl text-lede opacity-90">{caseStudy.subtitle}</p>
          <p className="mt-6 max-w-2xl leading-relaxed opacity-80">{caseStudy.summary}</p>

          <dl className={`mt-12 grid gap-x-10 gap-y-6 border-t pt-8 text-sm sm:grid-cols-3 ${ruleClass}`}>
            <div>
              <dt className={`text-meta font-semibold uppercase ${dtClass}`}>My role</dt>
              <dd className="mt-2">{caseStudy.meta.role}</dd>
            </div>
            <div>
              <dt className={`text-meta font-semibold uppercase ${dtClass}`}>Stack</dt>
              <dd className="mt-2">{caseStudy.meta.stack.join(" · ")}</dd>
            </div>
            <div>
              <dt className={`text-meta font-semibold uppercase ${dtClass}`}>Scope</dt>
              <dd className="mt-2">{caseStudy.meta.scope.join(" · ")}</dd>
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
              <div className="relative mt-14 aspect-16/9 overflow-hidden">
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
