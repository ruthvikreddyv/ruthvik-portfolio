import { Reveal } from "@/components/Reveal";
import {
  IconCode,
  IconServer,
  IconLayout,
  IconChain,
  IconBrain,
  IconDatabase,
  IconGoggles,
  IconSparkle,
} from "@/components/icons";

const categories = [
  {
    icon: IconCode,
    title: "Languages",
    items: ["Python", "C", "C++", "SQL"],
  },
  {
    icon: IconServer,
    title: "Backend",
    items: [
      "Django",
      "FastAPI",
      "REST API design",
      "JWT & OTP authentication",
      "Session management",
    ],
  },
  {
    icon: IconLayout,
    title: "Frontend",
    items: ["Next.js", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    icon: IconChain,
    title: "Blockchain",
    items: ["Ethereum", "Solidity", "Hardhat", "Ethers.js", "IPFS", "SHA-256 hashing"],
  },
  {
    icon: IconBrain,
    title: "AI / ML & Data",
    items: [
      "NLP",
      "Computer Vision",
      "Scikit-learn",
      "OpenCV",
      "Pandas · NumPy · Matplotlib",
      "Feature engineering",
    ],
  },
  {
    icon: IconGoggles,
    title: "XR / AR",
    items: ["AR/XR frameworks", "3D scene graph generation", "Adaptive learning systems"],
  },
  {
    icon: IconDatabase,
    title: "Database",
    items: ["PostgreSQL", "Schema design", "Query optimisation", "Relational modelling"],
  },
  {
    icon: IconSparkle,
    title: "Tools & Platforms",
    items: ["Git & GitHub", "Linux / Ubuntu", "VS Code", "Postman", "Jupyter · Colab", "LaTeX"],
  },
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={100 + i * 60}>
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
    </section>
  );
}
