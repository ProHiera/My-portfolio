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

          {/* ➜ 한 줄 고정 + 카드 높이 변수 지정 */}
          <div
            className="mt-8 grid gap-6 items-stretch"
            style={
              {
                gridTemplateColumns: `repeat(${FEATURED.length}, minmax(0, 1fr))`,
                // 카드 공통 높이 (원하면 360px~480px에서 취향대로 조절)
                // Tailwind 임의값에서 var() 사용 가능
                ["--card-h"]: "clamp(300px, 30vw, 360px)",
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
