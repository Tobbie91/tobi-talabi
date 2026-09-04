import Image from "next/image";
import Link from "next/link";
import type { Project, WorkLayoutOverride } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";

function ProjectImage({ project, aspect, className }: { project: Project; aspect: string; className?: string }) {
  if (!project.image) {
    return <ImagePlaceholder label={`${project.name} — image to be provided`} aspect={aspect} className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border/60", aspect, className)}>
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
      <span>{project.role}</span>
      <span aria-hidden>·</span>
      <span>{project.year}</span>
      <span aria-hidden>·</span>
      <span>{project.category}</span>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.hasCaseStudy && !project.externalUrl) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
      {project.hasCaseStudy ? (
        <Link href={`/work/${project.slug}`} className="text-ink transition-colors duration-200 hover:text-accent">
          Case study →
        </Link>
      ) : null}
      {project.externalUrl ? (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink transition-colors duration-200 hover:text-accent"
        >
          Visit →
        </a>
      ) : null}
    </div>
  );
}

export function WorkCard({ project, variant }: { project: Project; variant: WorkLayoutOverride }) {
  if (variant === "horizontal") {
    return (
      <article className="grid gap-8 md:grid-cols-2 md:items-center">
        <ProjectImage project={project} aspect="aspect-[4/3]" />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((tech, techIndex) => (
              <Badge key={`${tech}-${techIndex}`}>{tech}</Badge>
            ))}
          </div>
          <h3 className="mt-4 text-h3 font-semibold text-balance text-ink">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{project.description}</p>
          <ProjectMeta project={project} />
          <ProjectLinks project={project} />
        </div>
      </article>
    );
  }

  const isFeatured = variant === "featured";

  return (
    <article className={cn(isFeatured && "grid gap-8 md:grid-cols-5 md:items-center")}>
      <ProjectImage
        project={project}
        aspect={isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"}
        className={isFeatured ? "md:col-span-3" : undefined}
      />
      <div className={cn(isFeatured && "md:col-span-2")}>
        <div className="flex flex-wrap items-center gap-2">
          {project.tech.map((tech, techIndex) => (
            <Badge key={`${tech}-${techIndex}`}>{tech}</Badge>
          ))}
        </div>
        <h3 className={cn("mt-4 font-semibold text-balance text-ink", isFeatured ? "text-h2" : "text-h3")}>
          {project.name}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{project.description}</p>
        <ProjectMeta project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
