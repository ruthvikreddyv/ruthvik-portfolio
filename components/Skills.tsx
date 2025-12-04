const skillCategories = {
  "Languages & Backend": ["Python", "C/C++", "R", "SQL", "PostgreSQL", "MySQL", "Django", "Node.js", "FastAPI"],
  Frontend: ["ReactJS", "HTML", "CSS", "Bootstrap", "Chart.js"],
  "Data & ML": ["Machine Learning", "Deep Learning", "Data Analysis (Pandas, NumPy, Matplotlib)"],
  "Blockchain & Web3": ["Ethereum", "Solidity", "Hardhat", "IPFS"],
  "Visualization & BI": ["Power BI", "Tableau", "Chart.js"],
  "Soft Skills": ["Problem-solving", "Teamwork", "Adaptability", "Time Management", "Strategic Thinking", "Communication"]
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-indigo-700 text-sm font-medium dark:bg-indigo-900 dark:text-indigo-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
