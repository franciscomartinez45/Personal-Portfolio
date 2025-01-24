import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const aboutSectionRef = useRef(null);

  const isAboutInView = useInView(aboutSectionRef, { once: false });
  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="section-container flex items-center justify-center h-screen text-primaryText"
    >
      <div className="flex items-center justify-center h-3/5 w-4/5 ">
        <div className="flex flex-col justify-center items-center w-screen max-h-full h-screen ">
          <div className="flex items-center justify-evenly max-w-screen-xl w-11/12 p-6 mb-6 bg-gray-200 rounded-lg shadow-lg max-h-screen h-3/4">
            <div className="w-56 h-56 rounded-full bg-slate-700 mr-6 "></div>
            <div className="">
              <h3 className="text-xl font-semibold ">Francisco Martinez</h3>
              <p className="text-lg">
                California State University, Dominguez Hills
              </p>
              <p className="text-lg">Carson, CA</p>
              <p className="text-base">Bachelor of Science, Computer Science</p>
              <p className="">April 2021- Dec 2024</p>
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
                whileHover={{
                  scale: [null, 1.1, 1.3],
                  transition: {
                    duration: 0.7,
                    delay: 0,
                    times: [0, 0.3, 0.7],
                    ease: ["easeIn", "easeOut"],
                  },
                }}
                key={index}
                className="w-1/3  text-center h-1/2 flex items-center justify-center p-6 mb-6 bg-gray-200 rounded-lg shadow-lg"
              >
                {" "}
                <p>{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const facts: string[] = ["GitHub", "Download Resume", "ML Research"];
