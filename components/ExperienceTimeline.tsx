const timeline = [
  {
    title: "Software Developer Intern",
    subtitle: "Cypwng, Hyderabad, India",
    date: "Jan 2025 – June 2025",
    description: "Contributed to LendFundz fintech platform by implementing authentication, loan management, EMI calculators, and credit score features using Django & PostgreSQL."
  },
  {
    title: "B.Tech (Honours) – CSE (Data Science)",
    subtitle: "Chhattisgarh Swami Vivekanand Technical University",
    date: "2022 – 2026",
    description: "Computer Science Engineering with Data Science specialization, focusing on full-stack development, AI/ML, and modern software engineering."
  },
  {
    title: "Key Certifications",
    subtitle: "Walmart, Wells Fargo, IBM, Microsoft, Deloitte",
    date: "2024–2025",
    description: "Advanced Software Engineering, Data Analytics, Machine Learning with Python, AI Fundamentals, Generative AI Essentials."
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start group">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 mr-6 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">{item.subtitle}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
