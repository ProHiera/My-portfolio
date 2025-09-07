// 서버에서 읽는 메타 모음
export const projectMeta = {
  portfolio: {
    title: "Portfolio",
    summary: "Next.js + MDX 기반 확장형 포트폴리오 플랫폼",
  },
  biketown: {
    title: "BikeTown",
    summary: "이커머스·예약·픽업·자전거길 정보를 한 곳에",
  },
  petmate: {
    title: "PetMate",
    summary: "반려견 일정·건강 로그 통합, PDF 리포트 1클릭",
  },
  learnmate: {
    title: "LearnMate",
    summary: "AI 튜터 + 코스 빌더로 학습 경험 개인화",
  },
} as const;

// 클라에서만 로드할 MDX (정적 경로)
export const projectLoader = {
  portfolio: () => import("./portfolio.mdx"),
  biketown: () => import("./biketown.mdx"),
  petmate: () => import("./petmate.mdx"),
  learnmate: () => import("./learnmate.mdx"),
} as const;
