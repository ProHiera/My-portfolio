"use client";

import { motion } from "framer-motion";
import type { BezierDefinition } from "framer-motion";

type Props = {
  lines: string[];
};

const ease: BezierDefinition = [0.22, 1, 0.36, 1];

export default function TaglineLuxury({ lines }: Props) {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* 텍스트 라인 */}
      <div className="space-y-1.5">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{
              opacity: 0,
              y: 8,
              filter: "blur(6px)",
              letterSpacing: "0.04em",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              letterSpacing: "0em",
            }}
            transition={{ duration: 0.8, delay: 0.06 * i, ease }}
            className="
              text-transparent bg-clip-text
              text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight
              bg-[linear-gradient(180deg,theme(colors.foreground),theme(colors.muted-foreground))]
              selection:bg-primary/20 selection:text-foreground
            "
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* 은은한 한 번짜리 광택 스윕 */}
      <motion.span
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: "120%", opacity: [0, 0.35, 0] }}
        transition={{ duration: 1.4, delay: 0.15, ease }}
        aria-hidden={true}
        className="
          pointer-events-none absolute inset-y-0
          w-1/3
          bg-gradient-to-r from-transparent via-white/25 to-transparent
          mix-blend-overlay
          rounded
        "
      />
    </div>
  );
}
