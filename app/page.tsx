import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ResearchInterests } from "@/components/ResearchInterests";
import { CurrentResearchFocus } from "@/components/CurrentResearchFocus";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Certifications } from "@/components/Certifications";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-paper text-ink">
        <Hero />
        <About />
        <ResearchInterests />
        <CurrentResearchFocus />
        <Education />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Publications />
        <Certifications />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
