import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">대표 프로젝트</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
