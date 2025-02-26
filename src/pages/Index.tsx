import { ThemeProvider } from "../components/ThemeContext";
import "../style/index.css";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import ProgressBar from "../components/ProgressBar";
import Research from "./Research";
import Overview from "./Overview";
import { ParticleCanvas } from "../components/particles";
import Status from "./Status";

export default function Index() {
  return (
    <ThemeProvider>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <ParticleCanvas></ParticleCanvas>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Home />
          <Overview />
          <Status />
          <Achievements />
          <Skills />
          <Projects />
          <Research />
          <Contact />
          <ProgressBar />
        </div>
      </div>
    </ThemeProvider>
  );
}
