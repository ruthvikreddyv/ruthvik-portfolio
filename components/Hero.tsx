export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-4 py-20 flex flex-col gap-10 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-500">Software Developer · Data Science</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Ruthvik Reddy Veerannagari</span>.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Computer Science undergraduate specializing in Data Science and full-stack development, 
          building fintech, AI/ML, blockchain, and IoT projects. [file:1]
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            View my projects
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-400 dark:hover:text-indigo-300">
            Contact me
          </a>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Python</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Django</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">React</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Data Science</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative mx-auto h-48 w-48 md:h-64 md:w-64 rounded-3xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 shadow-lg" />
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
          Based in Hyderabad, India · Open to software, data, and ML roles. [file:1]
        </p>
      </div>
    </section>
  );
}
