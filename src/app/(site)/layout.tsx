import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "이나라 | 포트폴리오",
  description: "UI/UX & Full-stack Portfolio of Nara Lee",
  metadataBase: new URL("https://nara.dev"), // 나중에 도메인 바꿔줘
  openGraph: {
    title: "이나라 | 포트폴리오",
    description: "Projects, case studies, contact",
    url: "/",
    siteName: "Nara Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
