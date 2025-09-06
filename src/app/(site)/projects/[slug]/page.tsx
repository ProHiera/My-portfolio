// MDX를 읽어와서 화면에 뿌리는 얇은 페이지
// src/app/(site)/projects/[slug]/page.tsx
import path from "node:path";
import fs from "node:fs";
import { notFound } from "next/navigation";

// MDX 파일이 있는 디렉토리
const CONTENT_DIR = path.join(process.cwd(), "src/content/projects");

// 디렉토리에서 모든 *.mdx 파일의 slug 뽑기
function getAllSlugs() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const mod = await import(`@/content/projects/${params.slug}.mdx`);
    const meta = (mod as any).meta || {};
    return { title: meta.title ? `${meta.title} | Nara` : "Project | Nara" };
  } catch {
    return { title: "Project | Nara" };
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // MDX 동적 임포트
  try {
    const mod = await import(`@/content/projects/${params.slug}.mdx`);
    const MDXContent = (mod as any).default;
    const meta = (mod as any).meta;

    return (
      <section className="container py-16">
        {meta?.title && <h1 className="text-3xl font-bold">{meta.title}</h1>}
        {meta?.summary && <p className="mt-4 opacity-80">{meta.summary}</p>}

        {/* 필요하면 태그/커버 같은 헤더 영역을 공통 컴포넌트로 출력 */}
        {meta?.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {meta.tags.map((t: string) => (
              <span key={t} className="rounded-full border px-2 py-0.5 text-xs opacity-80">
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
