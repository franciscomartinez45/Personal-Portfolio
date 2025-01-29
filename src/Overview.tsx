import { motion } from "motion/react";

export default function Overview() {
  return (
    <section
      id="overview"
      className="section-container flex items-center justify-center  bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText text-[clamp(5px,2.3vw,17px)]"
    >
      <div className="flex items-center justify-center w-[40vw]">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex items-center justify-evenly p-6 mb-6 rounded-lg shadow-lg  ">
            <div className=" rounded-full bg-slate-50 mr-6 h-[clamp(18vw,4vw,22vw)] w-[clamp(18vw,4vw,22vw)]"></div>
            <div className="w-[30vw] ">
              <h2 className=" font-bold ">Francisco Martinez</h2>
              <h3 className="">Bachelor of Science, Computer Science</h3>
              <p className="font-light">
                California State University, Dominguez Hills
              </p>
              <p className="font-light">Carson, CA</p>

              <p className="font-light">April 2021- Dec 2024</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly  p-6 mb-6  rounded-lg shadow-lg  ">
            <p className="italic">
              Aspiring Software Engineer with hands-on experience developing
              React.js, React Native and Java full-stack applications ranging
              from pet care mobile apps to healthcare management systems and
              personal portfolios.
            </p>
          </div>

          <div className="flex justify-evenly  gap-4  w-[50vw] h-[7vh] ">
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
                className="font-bold   text-center  flex items-center justify-center p-6 mb-6 rounded-lg shadow-lg"
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
