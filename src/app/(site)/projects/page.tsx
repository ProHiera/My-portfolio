import Image from "next/image";
import Link from "next/link";
import { FEATURED } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

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

          <div className="mt-16 sm:mt-20" id="illustration">
            <div className="rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-gradient-to-br from-zinc-50 via-white to-zinc-100/70 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950/70">
              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/60">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/illustration/apec.jpg"
                      alt="Illustration work"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 55vw, 100vw"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent dark:from-black/60" />
                  <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 rounded-full border border-white/60 px-3 py-1 text-xs text-white/90 backdrop-blur">
                    Illustration
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Illustration</h2>
                  <p className="opacity-80 leading-7">
                    Keep illustration work on the same page, but give it a
                    distinct block so it reads as a separate category.
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
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/contact">Request the full set</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Ask about availability</Link>
                    </Button>
                  </div>
                  <p className="text-xs opacity-60">
                    Replace this block with your single-page gallery when ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
