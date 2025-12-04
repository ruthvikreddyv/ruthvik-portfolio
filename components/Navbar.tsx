"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-4">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Ruthvik
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            className="md:hidden p-1"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-4 py-4 flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
