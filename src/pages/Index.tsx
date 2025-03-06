import "../style/index.css";
import Home from "./Home";
import Contact from "./Contact";

import Skills from "./Skills";
import Education from "./Education";
import ProgressBar from "../components/ProgressBar";
import Research from "./Research";
import Overview from "./Overview";
import { ParticleCanvas } from "../components/particles";

export default function Index() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <ParticleCanvas></ParticleCanvas>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Home />
        <Overview />

        {/* <Blog /> */}
        <Education />
        <Skills />

        <Research />
        <Contact />
        <ProgressBar />
      </div>
    </div>
  );
}
