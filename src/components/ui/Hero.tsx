"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container">
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
          반응형·인터랙션이 강한 웹을 만드는 프론트엔드/풀스택 주니어. Next.js +
          Tailwind + Motion으로 실제 서비스 품질에 집중합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex gap-3"
        >
          <Button asChild size="lg">
            <a href="/projects">
              프로젝트 보러가기 <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/contact">협업 문의</a>
          </Button>
        </motion.div>

        {/* 부드러운 배경 오브젝트 */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="mx-auto h-40 w-40 sm:h-64 sm:w-64 animate-float rounded-full blur-3xl opacity-30 dark:opacity-20"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #60a5fa 0%, transparent 60%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
