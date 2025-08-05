import { motion, useScroll } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
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
       
      }}
    />
  );
}
