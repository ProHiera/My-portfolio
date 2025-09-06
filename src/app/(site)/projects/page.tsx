import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}
