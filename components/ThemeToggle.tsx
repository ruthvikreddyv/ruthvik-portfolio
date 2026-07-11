"use client";

import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@/components/icons";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  if (!mounted) {
    // Reserve the button's footprint to avoid layout shift before hydration.
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-soft hover:text-teal hover:border-teal/50 transition-colors"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? <IconMoon className="w-[18px] h-[18px]" /> : <IconSun className="w-[18px] h-[18px]" />}
    </button>
  );
}
