// 동적 라우트 최소 템플릿 - /projects/anything
type PageProps = { params: { slug: string } };

export const metadata = {
  title: "Project Detail",
};

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = params;
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p className="mt-4 opacity-80">
        이 페이지는 동적 라우트 예시입니다. 프로젝트 상세 내용을 여기에 채워
        넣으세요.
      </p>
      <div className="mt-8">
        <a href="./projects" className="underline">
          ← 프로젝트 목록으로
        </a>
      </div>
    </section>
  );
}
