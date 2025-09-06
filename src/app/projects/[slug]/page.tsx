/* 개별 프로젝트 상세(MDX) */
type PageProps = {
  params: { slug: string };
};

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = params;
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p className="mt-4 opacity-80">
        상세 페이지 준비 중입니다. (slug: <code>{slug}</code>)
      </p>
    </section>
  );
}
