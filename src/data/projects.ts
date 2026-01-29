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
    slug: "gagi",
    title: "gagi app",
    summary:
      "로컬 매장에서 가장 저렴하게 살 수 있도록 내 카드·멤버십 쿠폰 조합을 추천하는 앱",
    tags: ["App", "UX", "Fintech"],
    cover: "/images/petmate.jpg",
  },
  {
    slug: "myshop",
    title: "myshop",
    summary:
      "쇼핑몰 포트폴리오. 디자인·UI/UX·프론트엔드 전 과정을 직접 진행",
    tags: ["Design", "UI/UX", "Frontend"],
    cover: "/images/biketown.jpg",
  },
  {
    slug: "learnmate",
    title: "LearnMate",
    summary: "맞춤형 학습 관리 서비스",
    tags: ["Next.js", "Tailwind", "Supabase"],
    cover: "/images/learnmate.jpg",
  },
  {
    slug: "portfolio",
    title: "Nara Portfolio",
    summary: "개인 포트폴리오 사이트",
    tags: ["Next.js", "Tailwind", "MDX", "Vercel"],
    cover: "/images/portfolio-cover.jpg",
    links: {
      live: "https://my-portfolio-two-tan-qqtr7exjq6.vercel.app/",
      github: "https://github.com/ProHiera/nara-portfolio",
    },
  },
];

// 홈에 표시할 프로젝트 목록
export const FEATURED = PROJECTS;
export const bySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const slugs = () => PROJECTS.map((p) => ({ slug: p.slug }));
