export const projectMeta = {
  portfolio: {
    title: "Portfolio",
    summary: "개인 포트폴리오 사이트",
  },
  myshop: {
    title: "myshop",
    summary: "쇼핑몰 포트폴리오. 디자인·UI/UX·프론트엔드 전 과정을 직접 진행",
  },
  gagi: {
    title: "gagi app",
    summary:
      "로컬 매장에서 가장 저렴하게 살 수 있도록 카드·멤버십 쿠폰 조합을 추천하는 앱",
  },
  learnmate: {
    title: "LearnMate",
    summary: "맞춤형 학습 관리 서비스",
  },
} as const;

export const projectLoader = {
  portfolio: () => import("./portfolio.mdx"),
  myshop: () => import("./myshop.mdx"),
  gagi: () => import("./gagi.mdx"),
  learnmate: () => import("./learnmate.mdx"),
} as const;
