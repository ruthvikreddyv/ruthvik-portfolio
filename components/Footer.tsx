export function Footer() {
  return (
    <footer className="bg-slate-900/20 dark:bg-slate-900/50 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          © 2025 Ruthvik Reddy Veerannagari. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <a href="https://github.com/ruthvikreddyv" className="hover:text-indigo-600 dark:hover:text-indigo-400">GitHub</a>
          <a href="https://linkedin.com/in/ruthvikreddyv" className="hover:text-indigo-600 dark:hover:text-indigo-400">LinkedIn</a>
          <a href="mailto:ruthvikreddyv@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400">Email</a>
        </div>
      </div>
    </footer>
  );
}
