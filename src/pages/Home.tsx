import { motion } from "motion/react";

export const scrollToSection = (location: string) => {
  const aboutSection = document.getElementById(location);
  if (aboutSection) {
    setTimeout(() => aboutSection.scrollIntoView({ behavior: "smooth" }), 500);
  }
};

export default function HomeSection() {
  return (
    <section id="home" className=" section-container ">
      //
      <section className="hero bg-cover  bg-center text-center h-screen  flex items-center justify-center">
        <div className=" text-center w-[60vw]">
          <h1 className="text-4xl text-[clamp(10px,5vw,32px)] font-bold ">
            Francisco Martinez Personal Portfolio
          </h1>
          <p className="text-[clamp(8px,2.7vw,18px)] mt-2">
            B.S. in Computer Science | Aspiring Full-Stack Engineer
          </p>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" text-center py-3 w-[40vw] text-[clamp(6px,3vw,16px)] bg-linkButtonBg text-primaryText  font-semibold rounded shadow-lg cursor-pointer mt-5 "
              onClick={() => scrollToSection("overview")}
            >
              Continue to Overview
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
