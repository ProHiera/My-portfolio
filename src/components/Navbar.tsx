import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b shadow-sm"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container mx-auto px-4 grid grid-cols-3 items-center h-16">
        {/* 왼쪽: 로고 */}
        <div className="justify-self-start">
          <Link href="/" className="font-bold tracking-tight">
            NARA
          </Link>
        </div>

        {/* 가운데: 메뉴 (정중앙) */}
        <nav className="justify-self-center">
          <ul className="hidden sm:flex items-center gap-6">
            <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
            <li><Link href="/about" className="hover:opacity-80">About</Link></li>
            <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
          </ul>
        </nav>

        {/* 오른쪽: 액션 */}
        <div className="justify-self-end flex items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href="https://github.com/ProHiera" target="_blank" rel="noopener noreferrer">
              <Github className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
