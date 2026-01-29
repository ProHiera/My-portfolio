import { FEATURED } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold">Projects</h1>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURED.slice(0, 4).map((p) => (
              <div key={p.slug} className="min-w-0 h-full">
                <ProjectCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
