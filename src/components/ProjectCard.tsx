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
    h-auto sm:h-[var(--card-h)] flex flex-col overflow-hidden
    transform-gpu will-change-transform
    card-raise-base hover:card-raise-hover
    border border-zinc-200/60 dark:border-zinc-800/60
    bg-white/40 dark:bg-zinc-900/40
  "
        >
          {/* 고정 비율 이미지 (모바일은 조금 더 낮은 높이: 16/9) */}
          <div className="relative aspect-[16/9] sm:aspect-[16/10] shrink-0">
            <Image src={coverSrc} alt={title} fill className="object-cover" />
          </div>

          {/* 본문 */}
          <CardContent className="p-5 flex-1 grid grid-rows-[auto_1fr_auto] gap-2">
            {/* ✨ 반짝임 텍스트 (다크모드에서만) */}
            <h3 className="text-lg font-semibold leading-tight">
              <span className="pc-shiny-text">{title}</span>
            </h3>

            {/* 2줄 요약 (모바일에서 여유 공간 없으면 자동 확장) */}
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

            {/* 태그 (고정 높이 → 자연 높이, 줄바꿈 허용) */}
            <div className="mt-2 flex flex-wrap items-start gap-2 overflow-visible">
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

      {/* 라이트모드 가독성 개선: 다크모드에서만 그라데이션/투명 처리 */}
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
            rgba(0, 0, 0, 0.82) 0%,
            rgba(0, 0, 0, 0.52) 50%,
            rgba(0, 0, 0, 0.82) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: pc-text-shine 6s linear infinite reverse; /* 느리게 + 방향 반전 */
        }
        .dark .pc-shiny-text {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.18) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: pc-text-shine 7.5s linear infinite reverse; /* 다크도 더 느리게 */
        }
        @media (prefers-reduced-motion: reduce) {
          .pc-shiny-text,
          .dark .pc-shiny-text {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  );
}
