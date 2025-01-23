import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const aboutSectionRef = useRef(null);

  const isAboutInView = useInView(aboutSectionRef, { once: false });
  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="section-container flex items-center justify-center h-screen bg-primaryBg text-primaryText dark:text-primaryText dark:bg-darkPrimaryBg"
    >
      <div className="flex items-center justify-center h-3/5 w-4/5 ">
        <div className="flex flex-col justify-center items-center w-screen max-h-full h-screen ">
          <div className="flex items-center justify-evenly max-w-screen-xl w-11/12 p-6 mb-6 bg-blue-100 rounded-lg shadow-lg max-h-screen h-3/4">
            <div className="w-56 h-56 rounded-full bg-blue-200 mr-6 "></div>
            <div className="">
              <h3 className="text-xl font-semibold ">Your Name</h3>
              <p className="">Short description about yourself</p>
              <p className="">Another line of details</p>
              <p className="">Additional info or tagline</p>
            </div>
          </div>

          <div className="flex justify-between max-w-screen-xl w-11/12 gap-4 max-h-full h-1/2 ">
            {facts.map((fact, index) => (
              <motion.div
                animate={isAboutInView ? { x: [-1000, 150, 0] } : {}}
                transition={{
                  type: "spring",
                  duration: 3,
                  ease: "easeOut",
                  times: [0, 1.5, 3],
                }}
                key={index}
                className="w-1/3  text-center h-1/2 flex items-center justify-center p-6 mb-6 bg-blue-100 rounded-lg shadow-lg"
              >
                <p className="">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const facts: string[] = [
  "I aspire to become a Machine Learning Engineer",
  "I like to play soccer and Call of Duty in my free time",
  "I have 2 cats",
];
