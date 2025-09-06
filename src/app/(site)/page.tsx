// 홈(/) 최소 템플릿 - 외부 컴포넌트 없이 바로 동작
export const metadata = {
  title: "Nara Portfolio",
  description: "이나라의 포트폴리오",
};

export default function HomePage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">안녕하세요, 이나라입니다 👋</h1>
      <p className="mt-4 opacity-80">
        반응형 · 인터랙션 중심의 포트폴리오 사이트입니다.
      </p>

      <div className="mt-8 flex gap-3">
        <a href="./projects" className="rounded-md border px-4 py-2">
          프로젝트 보기
        </a>
        <a href="/contact" className="rounded-md border px-4 py-2">
          연락하기
        </a>
      </div>
    </section>
  );
}
