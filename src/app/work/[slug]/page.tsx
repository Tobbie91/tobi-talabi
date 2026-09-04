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

  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <Link href="/#work" className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink">
          ← Back to work
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
          <span>{project.role}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
          <span aria-hidden>·</span>
          <span>{project.category}</span>
        </div>

        <h1 className="mt-4 text-hero font-semibold text-balance text-ink">{project.name}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">{project.description}</p>

        <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="text-ink-soft">Full case study — coming soon.</p>
        </div>

        <div className="mt-10">
          <LinkButton href="/#work" variant="outline">
            Back to work
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
