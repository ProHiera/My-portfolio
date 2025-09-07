export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "petmate",
    title: "PetMate",
    summary: "반려견 건강관리 앱 웹버전",
    tags: ["Next.js", "Supabase", "AI"],
    cover: "/images/petmate.jpg",
  },
  {
    slug: "biketown",
    title: "BikeTown",
    summary: "자전거 특화 몰 + 예약/픽업",
    tags: ["eCommerce", "Map API"],
    cover: "/images/biketown.jpg",
  },
  {
    slug: "learnmate",
    title: "LearnMate",
    summary: "맞춤형 학습 관리 플랫폼",
    tags: ["Next.js", "Tailwind", "Supabase"],
    cover: "/images/learnmate.jpg",
  },
  {
    slug: "portfolio",
    title: "Nara Portfolio",
    summary: "Next.js + MDX 기반 확장형 포트폴리오 플랫폼",
    tags: ["Next.js", "Tailwind", "MDX", "Vercel"],
    cover: "/images/portfolio-cover.jpg",
    links: {
      live: "https://my-portfolio-two-tan-qqtr7exjq6.vercel.app/",
      github: "https://github.com/ProHiera/nara-portfolio",
    },
  },
];

// 홈에선 전부 보여주고 싶으니 FEATURED도 4개 전부
export const FEATURED = PROJECTS;
export const bySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const slugs = () => PROJECTS.map((p) => ({ slug: p.slug }));
