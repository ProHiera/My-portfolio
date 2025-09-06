// next.config.ts
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Turbopack에서 직렬화 가능한 값만 넣어야 함
  options: {
    // 함수(import remarkGfm) 대신 "문자열"로 전달
    remarkPlugins: ["remark-gfm"],
    // 필요 시 rehypePlugins: ["rehype-slug", "rehype-autolink-headings"],
  },
});

export default withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    // Rust 기반 MDX 파이프라인 사용(권장)
    mdxRs: true,
  },
});
