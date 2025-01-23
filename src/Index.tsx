import { motion, useInView, useScroll } from "motion/react";
import { useRef } from "react";
import { ThemeProvider } from "./style/ThemeContext";

import "./style/index.css";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Achievements from "./Achievements";

export default function Index() {
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider>
      <div className="">
        <Home></Home>

        <About></About>
        <Achievements></Achievements>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: 25,
            originX: 0,
            backgroundColor: "black",
            opacity: 0.5,
          }}
        />
      </div>
    </ThemeProvider>
  );
}
