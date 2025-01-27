import { motion } from "motion/react";
import { scrollToSection } from "./Home";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText"
    >
      <section className="hero bg-cover bg-center text-center h-screen  flex items-center justify-center  ">
        <div className="text-center w-1/2">
          <h1 className="text-4xl font-bold ">
            Thank you for visiting my portfolio!
          </h1>
          <p className="text-xl  mt-2">
            I am always eager to take on new challenges and collaborate on
            innovative projects. Feel free to reach out—let's create something
            amazing together!
          </p>
          <p className="text-xl  mt-2 italic font-bold">Francisco Martinez</p>
          <p className="text-xl  mt-2 italic">frncsc.mrtnz123@gmail.com</p>
          <div className="flex justify-center ">
            <div className="px-4 py-2">
              <a href="" className="text-blue-500 font-bold">
                GitHub
              </a>
            </div>
            <div className="px-4 py-2">
              <a href="" className="text-blue-500 font-bold">
                Resume
              </a>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" text-center px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-lg cursor-pointer mt-5  justify-right"
            onClick={() => scrollToSection("home")}
          >
            Back to top
          </motion.div>
        </div>
      </section>
    </section>
  );
}
