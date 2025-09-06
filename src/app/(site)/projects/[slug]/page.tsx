// MDX를 읽어와서 화면에 뿌리는 얇은 페이지
// src/app/(site)/projects/[slug]/page.tsx
// src/app/(site)/projects/[slug]/page.tsx
import path from "node:path";
import fs from "node:fs";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

// ===== 타입 선언 (any 금지) =====
type ProjectMeta = {
  title?: string;
  summary?: string;
  tags?: string[];
  cover?: string;
};

type MDXModule = {
  default: ComponentType; // MDX가 React 컴포넌트를 default export
  meta?: ProjectMeta; // 우리가 MDX에서 export한 meta
};

// MDX 파일 디렉토리
const CONTENT_DIR = path.join(process.cwd(), "src/content/projects");

// 모든 *.mdx 파일의 slug 얻기
function getAllSlugs() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const mod = (await import(
      `@/content/projects/${params.slug}.mdx`
    )) as unknown as MDXModule;
    const meta = mod.meta ?? {};
    return { title: meta.title ? `${meta.title} | Nara` : "Project | Nara" };
  } catch {
    return { title: "Project | Nara" };
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    // any 대신 명시적 타입으로 캐스팅
    const mod = (await import(
      `@/content/projects/${params.slug}.mdx`
    )) as unknown as MDXModule;
    const MDXContent = mod.default;
    const meta = mod.meta;

    return (
      <section className="container py-16">
        {meta?.title && <h1 className="text-3xl font-bold">{meta.title}</h1>}
        {meta?.summary && <p className="mt-4 opacity-80">{meta.summary}</p>}

        {meta?.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {meta.tags!.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2 py-0.5 text-xs opacity-80"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <article className="prose dark:prose-invert mt-8 max-w-none">
          <MDXContent />
        </article>
      </section>
    );
  } catch {
    return notFound();
  }
}
