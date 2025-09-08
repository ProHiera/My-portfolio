import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { FEATURED } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">PROJECT</h2>

          {/* 반응형: 모바일 1열 → sm 2열 → lg 4열 */}
          <div
            className="mt-8 grid gap-6 items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={
              {
                ["--card-h"]: "clamp(300px, 34vw, 380px)",
              } as React.CSSProperties
            }
          >
            {FEATURED.map((p) => (
              <div key={p.slug} className="min-w-0 h-full">
                <ProjectCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
