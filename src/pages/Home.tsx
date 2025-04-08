export const scrollToSection = (location: string) => {
  const aboutSection = document.getElementById(location);
  if (aboutSection) {
    setTimeout(() => aboutSection.scrollIntoView({ behavior: "smooth" }), 500);
  }
};

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section id="intro" className="relative section-container h-screen  ">
      <motion.div
        className="absolute inset-0  bg-contain bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
        viewport={{ once: true }}
      ></motion.div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur-sm z-1"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 4 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[clamp(18px,5vw,55px)] font-extrabold bg-clip-text text-black bg-center">
          Francisco Martinez
        </h1>
        <p className="text-[clamp(14px,2.0vw,48px)] mt-2 text-black">
          Incoming Master of Computer Science student at University of
          California, Irvine
        </p>
      </motion.div>
    </section>
  );
}
