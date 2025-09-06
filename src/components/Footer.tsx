"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background/60 backdrop-blur">
      {/* ── 얇은 그라디언트 디바이더 (상단) ── */}
      <div className="pointer-events-none absolute left-0 right-0 top-0">
        {/* 선 자체 */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent dark:via-sky-400/40" />
        {/* 아주 옅은 글로우 */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent dark:via-sky-400/20 blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col items-center text-center gap-4">
        {/* 브랜드/카피 */}
        <div className="text-sm opacity-80">
          <span className="font-semibold">NARA</span> — Frontend & Full-stack
        </div>

        {/* 소셜 아이콘 */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a
              href="https://github.com/ProHiera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Email">
            <a href="mailto:hello@prohiera.dev">
              <Mail className="size-5" />
            </a>
          </Button>
        </div>

        {/* 링크 */}
        <nav className="text-sm opacity-80">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li>
              <Link
                className="hover:underline underline-offset-4"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* 카피라이트 + 맨위로 */}
        <div className="flex items-center gap-3">
          <p className="text-xs opacity-60">
            © {year} Nara Lee. All rights reserved.
          </p>
          <span className="opacity-20">•</span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="size-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
