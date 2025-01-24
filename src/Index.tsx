import { ThemeProvider } from "./style/ThemeContext";

import "./style/index.css";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Achievements from "./Achievements";
import ProgressBar from "./ProgressBar";
import Research from "./Research";

export default function Index() {
  return (
    <ThemeProvider>
      <div className="bg-primaryBg text-primaryText dark:text-darkPrimaryText dark:bg-darkPrimaryBg">
        <Home></Home>
        <About></About>
        <Achievements></Achievements>
        <Skills></Skills>
        <Projects></Projects>
        <Research></Research>
        <Contact></Contact>
        <ProgressBar></ProgressBar>
      </div>
    </ThemeProvider>
  );
}
