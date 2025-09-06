"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* 2칼럼: 왼쪽 텍스트/아이콘 | 오른쪽 이미지 */}
      <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 items-start">
        {/* 왼쪽 */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            이나라 <span className="opacity-70">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-2xl text-base sm:text-lg opacity-80"
          >
            디자인과 개발의 경계를 허무는 풀스택 크리에이터형 개발자입니다.
            <br />
            아이디어를 구조로, 구조를 제품으로 전환하며
            <br />
            기획·디자인·개발·출시를 하나로 묶어 빠르게 검증하고 출시합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex gap-3"
          >
            <Button asChild size="lg">
              <a href="./projects">
                프로젝트 보러가기 <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/contact">협업 문의</a>
            </Button>
          </motion.div>

          {/* ==== 툴 아이콘 (그룹화) ==== */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 relative"
          >
            {/* 은은한 그라디언트 백글로우 */}
            <div
              className="pointer-events-none absolute inset-x-0 -top-6 h-28 -z-10
                         rounded-full blur-3xl opacity-40 dark:opacity-30
                         bg-gradient-to-r from-sky-500/30 via-violet-500/30 to-emerald-500/30"
            />

            <div className="flex flex-col gap-5">
              {[
                {
                  label: "Frontend",
                  items: [
                    { name: "Next.js", id: "nextjs" },
                    { name: "React", id: "react" },
                    { name: "TypeScript", id: "typescript" },
                    { name: "Tailwind", id: "tailwind" },
                  ],
                },
                {
                  label: "Backend",
                  items: [
                    { name: "Supabase", id: "supabase" },
                    { name: "MySQL", id: "mysql" },
                    { name: "AWS", id: "aws" }, // ✅ 추가
                    { name: "Java", id: "java" },
                    { name: "GitHub", id: "github" },
                  ],
                },
                {
                  label: "UI / UX",
                  items: [
                    { name: "Figma", id: "figma" },
                    { name: "Illustrator", id: "ai" },
                    { name: "Photoshop", id: "ps" },
                  ],
                },
              ].map((group) => (
                <div key={group.label}>
                  <div className="mb-2 text-xs uppercase tracking-wide opacity-60">
                    {group.label}
                  </div>
                  <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
                    {group.items.map((t) => (
                      <motion.li
                        key={t.name}
                        whileHover={{ y: -3, scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 18,
                        }}
                        className="relative group"
                        aria-label={t.name}
                      >
                        {/* 3D 카드 */}
                        <div
                          className="rounded-2xl p-2 sm:p-2.5
                                     bg-gradient-to-br from-white/70 to-white/30
                                     dark:from-white/5 dark:to-white/0
                                     ring-1 ring-black/5 dark:ring-white/10
                                     shadow-md backdrop-blur-[2px]"
                        >
                          {/* CDN 아이콘 + 기본 툴팁 */}
                          <img
                            src={`https://skillicons.dev/icons?i=${t.id}`}
                            alt={t.name}
                            title={t.name}
                            width={28}
                            height={28}
                            className="block"
                            loading="lazy"
                          />
                        </div>

                        {/* 하이라이트 글로우 */}
                        <div
                          className="absolute -inset-2 -z-10 rounded-2xl blur-xl opacity-0
                                     group-hover:opacity-30 transition-opacity
                                     bg-gradient-to-br from-sky-400/40 via-violet-400/40 to-emerald-400/40"
                        />

                        {/* 커스텀 툴팁 */}
                        <span
                          className="pointer-events-none absolute left-1/2 -translate-x-1/2
                                     -bottom-9 whitespace-nowrap rounded-md px-2 py-1
                                     text-xs bg-foreground text-background
                                     opacity-0 group-hover:opacity-100
                                     shadow-sm ring-1 ring-black/5 dark:ring-white/10
                                     transition-opacity"
                        >
                          {t.name}
                          <span
                            className="absolute left-1/2 -translate-x-1/2 -top-1.5
                                       h-2 w-2 rotate-45 bg-foreground"
                          />
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
          {/* ==== /툴 아이콘 ==== */}
        </div>

        {/* 오른쪽: 프로필 이미지(위쪽 고정) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square mx-auto lg:mx-0 lg:self-start lg:justify-self-end"
        >
          <Image
            src="/images/me.jpg" // public/images/me.jpg 필요
            alt="이나라 프로필"
            fill
            className="rounded-full object-cover shadow-xl ring-1 ring-black/5 dark:ring-white/10"
            priority
          />
          {/* 숨 쉬는 백글로우 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35, scale: [1, 1.06, 1] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
            className="absolute -inset-12 -z-10 rounded-full blur-[72px] opacity-35 dark:opacity-25"
            style={{
              background:
                "radial-gradient(100% 100% at 70% 30%, #60a5fa44 0%, transparent 75%)",
            }}
          />
        </motion.div>
      </div>

      {/* 섹션 배경의 부드러운 원 오브젝트 */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="mx-auto h-64 w-64 sm:h-96 sm:w-96 animate-float rounded-full blur-[80px] opacity-30 dark:opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #60a5fa 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}
