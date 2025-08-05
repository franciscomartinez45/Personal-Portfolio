import { motion } from "motion/react";
import { scrollToSection } from "./Home";
import { getResumeUrl } from "./Overview";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const [resumeUrl, setResumeUrl] = useState<string>("");

  const fetchResumeUrl = async () => {
    try {
      const resumeUrl = await getResumeUrl();
      if (resumeUrl) {
        setResumeUrl(resumeUrl);
      }
    } catch (error) {
      console.log("Error fetching Resume Url");
    }
  };
  useEffect(() => {
    fetchResumeUrl();
  }, []);
  return (
    <section id="contact" className="section-container text-primaryText ">
      <section className="hero bg-cover bg-center text-center h-screen flex items-center justify-center  ">
        <div className="text-center w-[90vw] lg:w-[30vw]  ">
          <h1 className="text-xl font-bold ">
            Thank you for visiting my portfolio!
          </h1>
          <p className="text-md  mt-2 ">
            I am always eager to take on new challenges and collaborate on
            innovative projects. Feel free to reach out—let's create something
            amazing together!
          </p>
          <p className="text-xl  mt-2 italic font-bold ">
            Francisco Martinez
          </p>
          <p className="text-xl  mt-2 italic">
            francm2@uci.edu
          </p>
          <div className="flex justify-center ">
            <div className="px-4 py-2">
              <a
                className=" font-bold"
                href="https://github.com/franciscomartinez45"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="px-4 py-2">
              <a
                className=" font-bold"
                href="https://www.linkedin.com/in/francisco-martinez-405512218/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="px-4 py-2">
              <a
                href={resumeUrl}
                target="_blank"
                className=" font-bold"
              >
                View Resume
              </a>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" text-center text-buttonText px-6 py-3 bg-linkButtonBg  font-semibold rounded shadow-lg cursor-pointer mt-5  justify-right"
            onClick={() => scrollToSection("welcome")}
          >
            Back to top
          </motion.div>
        </div>
      </section>
    </section>
  );
}
