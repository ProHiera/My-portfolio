/* Home(Hero/Projects/Skills/CTA) */
export const metadata = {
  title: "Projects | Nara Portfolio",
};

export default function ProjectsPage() {
  const items = [
    {
      slug: "petmate",
      title: "PetMate",
      summary: "반려견 건강관리 웹",
      tags: ["Next.js", "Supabase", "AI"],
    },
    {
      slug: "kd-academy",
      title: "KD Academy",
      summary: "학원 사이트 클론 + 예약",
      tags: ["JSP", "Servlet", "MySQL"],
    },
    {
      slug: "biketown",
      title: "BikeTown",
      summary: "자전거 특화 몰",
      tags: ["eCommerce", "Map API"],
    },
  ];

  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
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
