import "../style/index.css";
import HomeSection from "./Home";
import ContactSection from "./Contact";
import SkillsSection from "./Skills";
import EducationSection from "./Education";
import ProgressBar from "../components/ProgressBar";
import ResearchSection from "./Research";
import OverviewSection from "./Overview";
import { ProfessionalSection } from "./Professional";


export default function Index() {
  return (
    <div className="bg-primaryBg w-full h-full text-primaryText">
      <div className="bg-[url('../assets/Background.jpg')]   bg-no-repeat bg-center bg-cover bg-fixed w-full">
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
