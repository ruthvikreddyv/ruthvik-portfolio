import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { IconArrowUpRight, IconDownload } from "@/components/icons";

const chips = ["Python", "Django · FastAPI", "Next.js", "Ethereum", "Machine Learning"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden grid-texture border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">software_developer.init()</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08] text-ink">
              Ruthvik Reddy
              <br />
              <span className="text-teal">Veerannagari</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Computer Science (Data Science) undergraduate who architects fintech
              backends, decentralised credential systems, and AI-driven pipelines —
              currently researching multimodal AI and XR at IIIT Naya Raipur, aiming
              toward a PhD in Artificial Intelligence.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-teal-strong transition-colors shadow-sm"
              >
                View Projects
                <IconArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/Ruthvik_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal transition-colors"
              >
                <IconDownload className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <div className="corner-frame relative rounded-2xl bg-surface p-3 shadow-xl shadow-black/5 border border-line">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Ruthvik Reddy Veerannagari"
                  fill
                  sizes="(min-width: 768px) 320px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-1 pb-1">
                <span className="font-mono text-xs text-ink-faint">based_in: Hyderabad, IN</span>
                <span className="flex h-2 w-2 rounded-full bg-teal" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
