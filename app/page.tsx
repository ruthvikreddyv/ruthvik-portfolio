import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceTimeline />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
