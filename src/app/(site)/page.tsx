/* Home 메인 페이지: 카드/썸네일/짧은 요약만 */

import { PROJECTS } from "@/data/projects";

export const metadata = { title: "Projects | Nara" };

export default function ProjectsPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <li key={p.slug} className="rounded-xl border p-5">
            <a href={`/projects/${p.slug}`} className="block">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm opacity-80">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
