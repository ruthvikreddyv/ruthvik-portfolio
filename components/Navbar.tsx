"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IconMenu, IconClose } from "@/components/icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 md:px-8 py-4">
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-teal/40 bg-teal-tint font-mono text-sm text-teal">
            RV
          </span>
          <span className="hidden sm:inline">Ruthvik Reddy</span>
        </a>

        <div className="flex items-center gap-2 md:gap-5">
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-soft hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/Ruthvik_CV.pdf"
            download
            className="hidden md:inline-flex items-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-teal transition-colors"
          >
            Download Resume
          </a>
          <ThemeToggle />
          <button
            className="lg:hidden p-2 rounded-md border border-line text-ink-soft hover:text-teal hover:border-teal/50 transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-ink-soft hover:bg-surface-2 hover:text-teal transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Ruthvik_CV.pdf"
              download
              className="mt-2 rounded-md bg-ink px-3 py-2.5 text-center font-medium text-paper"
              onClick={() => setOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
