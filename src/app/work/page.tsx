import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkList } from "@/components/sections/WorkList";

export const metadata: Metadata = {
  title: "Work",
  description: "Every product and platform Tobi Talabi has helped build and ship.",
};

export default function WorkIndexPage() {
  return (
    <section className="py-20 md:py-28">
      <Container wide>
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
        >
          <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back home
        </Link>

        <div className="mt-8">
          <SectionHeading
            id="all-work"
            kicker="All Work"
            title="Every project, in one place."
            subtitle="The three featured on the homepage, plus everything else I've built and shipped."
          />
        </div>

        <div className="mt-16">
          <WorkList projects={projects} />
        </div>
      </Container>
    </section>
  );
}
