import { motion } from "motion/react";
import { scrollToSection } from "./Home";

export default function Contact() {
  return (
    <section className="section-container dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText">
      <section id="contact" className=" py-20 ">
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" bg-blue-500 text-white font-semibold rounded shadow-lg cursor-pointer p-16 bottom-1 w-25 h-5"
            onClick={() => scrollToSection("home")}
          >
            Back to top
          </motion.div>
        </div>
      </section>
    </section>
  );
}
