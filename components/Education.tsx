import { Reveal } from "@/components/Reveal";
import { IconBook } from "@/components/icons";

const records = [
  {
    degree: "B.Tech (Honours), Computer Science Engineering (Data Science)",
    institute: "Chhattisgarh Swami Vivekanand Technical University, Bhilai",
    period: "2022 – 2026",
    score: "7.41 CGPA",
  },
  {
    degree: "Higher Secondary (12th) — Physics, Chemistry, Mathematics",
    institute: "Telangana State Board of Intermediate Education",
    period: "2020 – 2022",
    score: "75%",
  },
  {
    degree: "Secondary School (10th)",
    institute: "Telangana State Board of Secondary Education",
    period: "2020",
    score: "10.0 CGPA",
  },
];

const coursework = [
  "Artificial Intelligence",
  "Machine Learning",
  "Pattern Recognition",
  "Natural Language Processing",
  "Computer Vision",
  "Intelligent Data Analysis",
  "Big Data Analytics",
  "Data Wrangling",
  "Cloud Computing",
  "Database Management Systems",
  "Computer Networks",
  "Cryptography & Network Security",
  "Algorithm Design & Analysis",
  "Theory of Computation",
  "Operating Systems",
  "Software Engineering",
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">education.json</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Education
        </h2>
      </Reveal>

      <div className="space-y-4">
        {records.map((r, i) => (
          <Reveal key={r.degree} delay={100 + i * 80}>
            <div className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between hover:border-teal/40 transition-colors">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-teal-tint text-teal">
                  <IconBook className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-ink">{r.degree}</h3>
                  <p className="text-sm text-ink-soft mt-1">{r.institute}</p>
                </div>
              </div>
              <div className="flex flex-none items-center gap-4 pl-14 sm:pl-0 sm:text-right">
                <span className="font-mono text-xs text-ink-faint">{r.period}</span>
                <span className="rounded-full bg-gold-tint px-3 py-1 font-mono text-xs font-medium text-gold">
                  {r.score}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={380}>
        <div className="mt-10">
          <p className="text-sm font-medium text-ink mb-3">Relevant coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
