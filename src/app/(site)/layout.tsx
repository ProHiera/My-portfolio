import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nara Portfolio",
  description: "이 나라의 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${noto.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* fixed 네비게이션 높이 보정 (h-16 = 4rem + safe area) */}
          <main
            className="flex-1 pt-16"
            style={{ paddingTop: "calc(4rem + env(safe-area-inset-top))" }}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
