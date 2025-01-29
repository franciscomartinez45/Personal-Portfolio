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


export interface windowWidth {
  width: number;
}
export default function Index() {
 

  return (
    <ThemeProvider>
      <Home></Home>
      <Overview></Overview>
      <Achievements></Achievements>
      <Skills></Skills>
      <Projects></Projects>
      <Research></Research>
      <Contact></Contact>
      <ProgressBar></ProgressBar>
    </ThemeProvider>
  );
}
