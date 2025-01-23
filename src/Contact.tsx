import { motion } from "motion/react";
import { scrollToSection } from "./Home";

export default function Contact() {
  return (
    <section className="section-container flex items-center h-screen">
      <section
        id="contact"
        className=" contact py-20 h-screen max-w-screen-xl w-5/6 justify-center "
      >
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <form className="mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="py-2 px-4 mb-5 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="py-2 px-4 mb-5 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="py-2 px-4 mb-5 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" bg-blue-500 text-white font-semibold rounded shadow-lg cursor-pointer p-16 bottom-1"
          onClick={() => scrollToSection("home")}
        >
          Back to top
        </motion.div>
      </section>
    </section>
  );
}
