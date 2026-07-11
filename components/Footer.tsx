import { IconGithub, IconLinkedin, IconMail } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-sm text-ink-faint font-mono">
          © 2026 Ruthvik Reddy Veerannagari
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ruthvikreddyv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-soft hover:text-teal transition-colors"
          >
            <IconGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ruthvik-reddy-v"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft hover:text-teal transition-colors"
          >
            <IconLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ruthvikreddyv@gmail.com"
            aria-label="Email"
            className="text-ink-soft hover:text-teal transition-colors"
          >
            <IconMail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-ink-faint">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
