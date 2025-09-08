"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loaders = {
  portfolio: () => import("@/content/projects/portfolio.mdx"),
  petmate: () => import("@/content/projects/petmate.mdx"),
  biketown: () => import("@/content/projects/biketown.mdx"),
  learnmate: () => import("@/content/projects/learnmate.mdx"),
} as const;

type Slug = keyof typeof loaders;

export default function ProjectMDX({ slug }: { slug: string }) {
  if (!(slug in loaders)) {
    return (
      <div className="text-sm text-muted-foreground">
        문서를 찾을 수 없어요.
      </div>
    );
  }

  const MDXComp = dynamic(
    async () => {
      const mod = await loaders[slug as Slug]();
      return mod.default as ComponentType<Record<string, unknown>>;
    },
    { ssr: false, loading: () => <div className="h-6" /> }
  );

  // 가운데 단정하게
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div
        className="[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight
                      [&_h2]:text-2xl [&_h2]:font-semibold
                      [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6
                      [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5"
      >
        <MDXComp />
      </div>
    </article>
  );
}
