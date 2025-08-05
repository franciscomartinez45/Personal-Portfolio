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
      <div className="bg-[url('../assets/Background.jpg')] sm:bg-[size:400px_800px] md:bg-cover lg:bg-cover   bg-no-repeat bg-center  bg-fixed">
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
