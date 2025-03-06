import "../style/index.css";
import HomeSection from "./Home";
import ContactSection from "./Contact";

import SkillsSection from "./Skills";
import EducationSection from "./Education";
import ProgressBar from "../components/ProgressBar";
import ResearchSection from "./Research";

import OverviewSection from "./Overview";
import { ParticleCanvas } from "../components/particles";
import { ProfessionalSection } from "./Professional";

export default function Index() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <ParticleCanvas></ParticleCanvas>
      <div style={{ position: "relative", zIndex: 1 }}>
        <HomeSection />
        <OverviewSection />
        <EducationSection />
        <ResearchSection />
        <SkillsSection />
        <ProfessionalSection />
        <ContactSection />
        <ProgressBar />
      </div>
    </div>
  );
}
