const projects = [
  {
    title: "EduChain – Blockchain & NLP",
    description: "Blockchain platform for academic credential verification using Ethereum smart contracts, IPFS, and NLP models (SpaCy, HuggingFace). Reduces manual verification time from days to minutes.",
    tech: ["Ethereum", "Solidity", "ReactJS", "Node.js", "FastAPI", "IPFS"],
    link: "#"
  },
  {
    title: "LendFundz – Fintech Web App (Cypwng)",
    description: "Implemented authentication, loan applications, EMI calculators, and credit score tracking for production fintech platform using Django and PostgreSQL.",
    tech: ["Django", "PostgreSQL", "HTML", "CSS"],
    link: "#"
  },
  {
    title: "ParkEase – Smart Parking System",
    description: "Real-time parking slot detection and reservation system integrating IoT concepts with Python and web technologies to reduce parking search time.",
    tech: ["Python", "IoT", "Web Technologies"],
    link: "#"
  },
  {
    title: "Mental Health Detector – AI/ML",
    description: "Web app for sentiment analysis, mood tracking, and resource recommendations using NLP pipelines and interactive Chart.js dashboards.",
    tech: ["NLP", "Machine Learning", "Chart.js"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm dark:bg-indigo-900 dark:text-indigo-300">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
