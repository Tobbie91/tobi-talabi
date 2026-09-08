import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import { caseStudies } from "@/content/case-studies";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = caseStudies[slug];

  if (caseStudy) {
    return {
      title: caseStudy.title,
      description: caseStudy.subtitle,
    };
  }

  return {
    title: project?.name ?? "Project",
    robots: { index: false, follow: true },
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const caseStudy = caseStudies[slug];
  if (caseStudy) {
    return <CaseStudyPage project={project} caseStudy={caseStudy} />;
  }

  const metaParts = [project.category, project.role];
  if (!project.year.startsWith("[")) metaParts.splice(1, 0, project.year);

  return (
    <section className="py-20 md:py-28">
      <Container wide className="max-w-3xl">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
        >
          <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to work
        </Link>

        <p className="mt-8 text-sm text-ink-faint">{metaParts.join(" · ")}</p>

        <h1 className="mt-4 font-display text-h1 font-extrabold text-balance text-ink">{project.name}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{project.description}</p>

        <div className="mt-16 border-t border-dashed border-ink/20 pt-8">
          <p className="text-ink-faint">Full case study — coming soon.</p>
        </div>

        <div className="mt-10">
          <LinkButton href="/#work" variant="line-onLight">
            Back to work
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
