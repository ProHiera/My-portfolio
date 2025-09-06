"use client";

import { useState } from "react";
import ContactExtra from "@/components/ContactExtra";

type ReqState = "idle" | "loading" | "ok" | "error";

// ❗ 참고: 이 파일은 클라이언트 컴포넌트라 metadata 내보내기는 생략/이동하세요
// export const metadata = { title: "Contact | Nara Portfolio" };

export default function ContactPage() {
  const [state, setState] = useState<ReqState>("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErr("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        setErr(
          j?.errors ? "입력값을 확인해 주세요." : "전송 중 오류가 발생했어요."
        );
        setState("error");
      } else {
        setState("ok");
        (e.target as HTMLFormElement).reset();
      }
    } catch (e: unknown) {
      if (e instanceof Error)
        setErr(e.message || "네트워크 오류가 발생했어요.");
      else setErr("네트워크 오류가 발생했어요.");
      setState("error");
    }
  }

  return (
    <section className="container py-16 max-w-2xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 opacity-80">
        협업/채용 문의를 남겨주세요. 이메일과 메시지는 필수입니다.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            이름
          </label>
          <input
            id="name"
            name="name"
            className="w-full rounded-md border px-3 py-2"
            placeholder="홍길동"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border px-3 py-2"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2">
            메시지
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={6}
            className="w-full rounded-md border px-3 py-2"
            placeholder="내용을 자세히 적어주세요."
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={state === "loading"}
            className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 disabled:opacity-60 dark:bg-white dark:text-black"
            aria-busy={state === "loading"}
          >
            {state === "loading" ? "전송 중..." : "보내기"}
          </button>

          {state === "ok" && (
            <span className="text-green-600 text-sm">
              전송 완료! 곧 연락드릴게요.
            </span>
          )}
          {state === "error" && (
            <span className="text-red-600 text-sm">{err}</span>
          )}
        </div>
      </form>

      {/* ✅ 여기처럼 섹션 안쪽에 넣어야 합니다 */}
      <ContactExtra />

      <p className="mt-8 text-sm opacity-70">
        이메일이 더 편하다면:{" "}
        <a className="underline" href="mailto:hello@prohiera.dev">
          hello@prohiera.dev
        </a>
      </p>
    </section>
  );
}
