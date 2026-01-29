import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
