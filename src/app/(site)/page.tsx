/* Home(Hero/Projects/Skills/CTA) */

import Hero from "@/components/ui/Hero";
import ProjectCard from "@/components/ui/ProjectCard";

export default function HomePage() {
  const featured = [
    {
      slug: "petmate",
      title: "PetMate",
      tags: ["Next.js", "Supabase", "AI"],
      summary: "반려견 건강관리 앱 웹버전",
      cover: "/images/petmate.png",
    },
    {
      slug: "kd-academy",
      title: "KD Academy",
      tags: ["JSP", "Servlet", "MySQL"],
      summary: "학원 사이트 클론 + 예약",
      cover: "/images/kd.png",
    },
    {
      slug: "biketown",
      title: "BikeTown",
      tags: ["eCommerce", "Map API"],
      summary: "자전거 특화 몰 + 예약/픽업",
      cover: "/images/biketown.png",
    },
  ];

  return (
    <>
      <Hero />
      <section className="py-16 sm:py-24">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold">대표 프로젝트</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
