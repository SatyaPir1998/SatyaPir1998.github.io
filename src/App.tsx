import React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projects";
import ExperienceSection from "./components/experience";
import SkillsSection from "./components/skills";
import ContactSection from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
