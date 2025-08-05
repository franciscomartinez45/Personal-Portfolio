import "../style/index.css";
import HomeSection from "./Home";
import ContactSection from "./Contact";
import SkillsSection from "./Skills";
import EducationSection from "./Education";
import ProgressBar from "../components/ProgressBar";
import ResearchSection from "./Research";
import OverviewSection from "./Overview";
import { ProfessionalSection } from "./Professional";
import VantaBackground from "../assets/VantaBackground";

export default function Index() {
  return (
    <div className="bg-primaryBg w-full h-full text-primaryText">
      <VantaBackground />
      <HomeSection />
      <OverviewSection />
      <EducationSection />
      <ResearchSection />
      <SkillsSection />
      <ProfessionalSection />
      <ContactSection />
      <ProgressBar />
    </div>
  );
}
