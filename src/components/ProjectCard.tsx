"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
};

export default function ProjectCard({
  slug,
  title,
  summary,
  tags,
  cover,
}: Props) {
  const coverSrc = cover?.trim() ? cover : "/images/placeholder.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* group 은 hover 트리거가 되는 <a>에 둬서 안전 */}
      <Link
        href={`/projects/${slug}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-2xl"
      >
        <Card
          className="
    h-[var(--card-h)] flex flex-col overflow-hidden
    transform-gpu will-change-transform
    card-raise-base hover:card-raise-hover
    border border-zinc-200/60 dark:border-zinc-800/60
    bg-white/40 dark:bg-zinc-900/40
  "
        >
          {/* 고정 비율 이미지 */}
          <div className="relative aspect-[16/10] shrink-0">
            <Image src={coverSrc} alt={title} fill className="object-cover" />
          </div>

          {/* 본문 */}
          <CardContent className="p-5 flex-1 grid grid-rows-[auto_1fr_auto] gap-2">
            {/* ✨ 반짝임 텍스트: Tailwind 의존 없이 styled-jsx 로 안전 적용 */}
            <h3 className="text-lg font-semibold leading-tight">
              <span className="pc-shiny-text">{title}</span>
            </h3>

            {/* 2줄 요약 (플러그인 없이 동작) */}
            <p
              className="text-sm opacity-80 leading-6 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {summary}
            </p>

            {/* 태그 */}
            <div className="mt-2 flex items-start gap-2 overflow-hidden h-7">
              {(tags || []).slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="shrink-0 rounded-full border px-2 py-0.5 text-xs opacity-80"
                >
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* 프로덕션에서도 안 잘리게 전역 키프레임/스타일 주입 */}
      <style jsx global>{`
        @keyframes pc-text-shine {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .pc-shiny-text {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.25) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: pc-text-shine 1.8s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
