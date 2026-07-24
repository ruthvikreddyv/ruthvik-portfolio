import { Reveal } from "@/components/Reveal";
import { SkillBar } from "@/components/SkillBar";
import {
  IconCode,
  IconServer,
  IconLayout,
  IconChain,
  IconBrain,
  IconDatabase,
  IconGoggles,
  IconSparkle,
  IconRadio,
} from "@/components/icons";

const categories = [
  {
    icon: IconCode,
    title: "Programming",
    items: ["Python", "C", "C++", "SQL"],
  },
  {
    icon: IconServer,
    title: "Backend",
    items: ["Django", "FastAPI", "REST API Development", "JWT / OTP Authentication", "Session Management"],
  },
  {
    icon: IconLayout,
    title: "Frontend",
    items: ["Next.js", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    icon: IconBrain,
    title: "Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Graph Neural Networks",
      "Reinforcement Learning",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    icon: IconRadio,
    title: "Wireless & Networks",
    items: [
      "5G/6G Networks",
      "V2X Communications",
      "Wireless Resource Allocation",
      "Intelligent Network Management",
      "Physical Layer Security",
      "IoT",
    ],
  },
  {
    icon: IconChain,
    title: "Blockchain",
    items: ["Ethereum", "Solidity", "Hardhat", "Ethers.js", "IPFS"],
  },
  {
    icon: IconGoggles,
    title: "XR",
    items: ["Augmented Reality", "Extended Reality", "Scene Graph Generation"],
  },
  {
    icon: IconSparkle,
    title: "Libraries",
    items: ["TensorFlow", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    icon: IconDatabase,
    title: "Databases",
    items: ["PostgreSQL", "Relational Design", "Query Optimisation"],
  },
  {
    icon: IconSparkle,
    title: "Tools",
    items: ["Git", "GitHub", "Linux", "VS Code", "Jupyter", "Google Colab", "Postman"],
  },
];

const proficiency = [
  { label: "Python", level: 92 },
  { label: "Machine Learning / Deep Learning", level: 85 },
  { label: "Django / FastAPI", level: 85 },
  { label: "Graph Neural Networks & DRL", level: 75 },
  { label: "Blockchain (Ethereum / Solidity)", level: 78 },
  { label: "Wireless Systems & Signal Processing", level: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">skills.map()</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Skills &amp; Tools
        </h2>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={100 + i * 50}>
              <div className="h-full rounded-xl border border-line bg-surface p-6 hover:border-teal/40 hover:shadow-md transition-all">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-tint text-teal">
                    <cat.icon className="w-[18px] h-[18px]" />
                  </span>
                  <h3 className="font-display font-semibold text-ink">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="corner-frame rounded-2xl border border-line bg-surface p-7 h-fit lg:sticky lg:top-24">
            <p className="eyebrow mb-6">core_proficiency</p>
            <div className="space-y-5">
              {proficiency.map((s) => (
                <SkillBar key={s.label} label={s.label} level={s.level} />
              ))}
            </div>
            <p className="mt-6 text-xs text-ink-faint">
              Self-assessed proficiency, for a directional sense of depth across areas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
