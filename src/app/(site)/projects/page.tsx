import Image from "next/image";
import { FEATURED } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] opacity-60">
            Projects
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURED.slice(0, 4).map((p) => (
              <div key={p.slug} className="min-w-0 h-full">
                <ProjectCard {...p} />
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20" id="illustration">
            <div className="rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-gradient-to-br from-zinc-50 via-white to-zinc-100/70 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950/70">
              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/60">
                  <div className="relative aspect-[2/3] w-full bg-zinc-100/70 dark:bg-zinc-900/50 p-3 sm:p-4">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/illustration/apec.jpg"
                        alt="Gyeongju APEC 2025 poster illustration"
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 38vw, (min-width: 640px) 55vw, 100vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl p-2 bg-gradient-to-br from-white/70 to-white/30 dark:from-white/5 dark:to-white/0 ring-1 ring-black/5 dark:ring-white/10 shadow-md backdrop-blur-[2px]">
                      <img
                        src="https://skillicons.dev/icons?i=ai"
                        alt="Illustrator icon"
                        width={26}
                        height={26}
                        className="block"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-[0.32em] opacity-60">
                      Illustration Only
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">
                    Gyeongju APEC 2025 Poster
                  </h2>
                  <p className="opacity-80 leading-7">
                    경주 APEC 2025 공모전 출품 Poster 작업입니다. 행사 분위기와
                    지역 이미지를 한 장에 정리해 전달력을 높였어요.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Character", "Editorial", "Poster"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-300/70 dark:border-zinc-700/70 px-2 py-1 opacity-80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
