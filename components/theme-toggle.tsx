"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-10 w-10" aria-hidden="true" />;

  const resolved = theme === "system" ? systemTheme : theme;
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-md ring-1 ring-black/5 dark:ring-white/10 shadow-sm transition active:scale-[0.98]"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="text-lg transition-transform duration-300 group-hover:rotate-6">
        {isDark ? "☾" : "☼"}
      </span>
    </button>
  );
}
