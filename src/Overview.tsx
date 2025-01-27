import { motion } from "motion/react";

export default function Overview() {
  return (
    <section
      id="overview"
      className="section-container flex items-center justify-center h-screen bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText"
    >
      <div className="flex items-center justify-center h-3/5 w-1/2 ">
        <div className="flex flex-col justify-center items-center w-screen max-h-full h-screen ">
          <h2 className="text-3xl font-semibold text-center ">Overview</h2>

          <div className="flex items-center justify-evenly max-w-screen-xl w-11/12 p-6 mb-6  rounded-lg shadow-lg max-h-screen h-3/4">
            <div className="w-56 h-56 rounded-full bg-slate-50 mr-6 "></div>
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
          <div className="flex items-center justify-evenly max-w-screen-xl w-11/12 p-6 mb-6  rounded-lg shadow-lg max-h-screen h-3/4">
            <p className="italic">
              Aspiring Software Engineer with hands-on experience developing
              innovative solutions, from pet care mobile apps to healthcare
              management systems, driven by a passion for solving real-world
              problems through technology.
            </p>
          </div>

          <div className="flex justify-evenly max-w-screen-xl w-11/12 gap-4 max-h-full h-1/2 ">
            {facts.map((fact, index) => (
              <motion.div
                whileHover={{
                  scale: [null, 1.1, 1.2],
                  transition: {
                    duration: 0.7,
                    delay: 0,
                    times: [0, 0.3, 0.7],
                    ease: ["easeIn", "easeOut"],
                  },
                }}
                key={index}
                className="font-bold w-1/3  text-center h-1/2 flex items-center justify-center p-6 mb-6 rounded-lg shadow-lg"
              >
                {fact.includes("GitHub") && (
                  <a
                    href="https://github.com/franciscomartinez45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {fact.includes("Resume") && (
                  <a
                    href="/FranciscoMartinez_CV.pdf"
                    download="FranciscoMartinez_CV.pdf"
                  >
                    Download Resume
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const facts: string[] = ["GitHub", "Download Resume"];
