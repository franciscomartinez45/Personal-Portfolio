import { ThemeProvider } from "./style/ThemeContext";
import "./style/index.css";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import ProgressBar from "./ProgressBar";
import Research from "./Research";
import Overview from "./Overview";
import { ParticleCanvas } from "./components/particles";

export default function Index() {
  return (
    <ThemeProvider>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <ParticleCanvas></ParticleCanvas>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Home />
          <Overview />
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
export interface windowWidth {
  width: number;
}
