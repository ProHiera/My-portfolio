"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded-full border px-3 py-1 text-sm hover:bg-accent"
      aria-label="Toggle theme"
      type="button"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
