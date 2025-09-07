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
      className="group h-full" // 부모 그리드의 높이를 꽉 채움
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${slug}`} className="block h-full">
        {/* ✅ 카드 전체 높이 고정 + 컬럼 레이아웃 */}
        <Card className="h-[var(--card-h)] flex flex-col overflow-hidden transition-transform duration-200 ease-out group-hover:scale-[1.02] group-hover:shadow-lg will-change-transform">
          {/* 고정 비율 이미지: 시작 영역 통일 */}
          <div className="relative aspect-[16/10] shrink-0">
            <Image src={coverSrc} alt={title} fill className="object-cover" />
          </div>

          {/* 본문 영역: 남은 높이를 채우고, 하단에 태그 고정 배치 */}
          <CardContent className="p-5 flex-1 grid grid-rows-[auto_1fr_auto] gap-2">
            <h3 className="text-lg font-semibold">{title}</h3>

            {/* ✅ 2줄로 고정 (Tailwind 플러그인 없이도 동작) */}
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

            {/* ✅ 태그 영역 높이 고정(한 줄만 보이게), 넘치면 가림 */}
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
    </motion.div>
  );
}
