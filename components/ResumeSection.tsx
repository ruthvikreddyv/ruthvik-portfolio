export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-4 py-20 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6">Download Resume</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Get my complete resume with detailed experience and skills.</p>
        <a
          href="/Ruthvik_Resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L8 18l3.5-3.5M7.5 18l3.5 3.5m5-8l5.5-5.5m0 0L16 8l-3.5 3.5M17.5 8l-3.5-3.5" />
          </svg>
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
