export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover: string; // /public/images/...
  content?: string; // 상세용(간단 텍스트 예시). MDX 쓰면 안 써도 됨.
};

export const PROJECTS: Project[] = [
  {
    slug: "petmate",
    title: "PetMate",
    summary: "반려견 건강관리 앱 웹버전",
    tags: ["Next.js", "Supabase", "AI"],
    cover: "/images/petmate.png",
  },
  {
    slug: "kd-academy",
    title: "KD Academy",
    summary: "학원 사이트 클론 + 예약",
    tags: ["JSP", "Servlet", "MySQL"],
    cover: "/images/kd.png",
  },
  {
    slug: "biketown",
    title: "BikeTown",
    summary: "자전거 특화 몰 + 예약/픽업",
    tags: ["eCommerce", "Map API"],
    cover: "/images/biketown.png",
  },
];

export const bySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const slugs = () => PROJECTS.map((p) => ({ slug: p.slug }));
