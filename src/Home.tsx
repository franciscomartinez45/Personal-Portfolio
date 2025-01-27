import { motion } from "motion/react";
import ThemeSwitcher from "./style/ThemeSwitcher";

export const scrollToSection = (location: string) => {
  const aboutSection = document.getElementById(location);
  if (aboutSection) {
    setTimeout(() => aboutSection.scrollIntoView({ behavior: "smooth" }), 500);
  }
};

export default function Home() {
  return (
    <section
      id="home"
      className="section-container bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText"
    >
      <ThemeSwitcher />
      <section className="hero bg-cover bg-center text-center h-screen  flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-bold ">Hello, I'm Francisco Martinez</h1>
          <p className="text-xl  mt-2">
            B.S. in Computer Science | Aspiring Full-Stack Engineer & AI
            Enthusiast
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" text-center px-6 py-3 bg-blue-500 text-darkPrimaryText  font-semibold rounded shadow-lg cursor-pointer mt-5 "
            onClick={() => scrollToSection("overview")}
          >
            Begin learning about me
          </motion.div>
        </div>
      </section>
    </section>
  );
}
