import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Skills() {
  const skillsSectionRef = useRef(null);
  const isSkillsInView = useInView(skillsSectionRef, { once: false });
  return (
    <section className="section-container overflow-hidden">
      <section
        id="skills"
        className="skills py-20 h-screen justify-center w-screen "
        ref={skillsSectionRef}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-center ">Skills</h2>

          <div className="flex justify-center gap-10 mt-0">
            <div className="grid grid-cols-4 grid-rows-4 w-5/12 mt-5">
              {skills.map((skill, index) => (
                <motion.div
                  initial={{ x: 0, y: 0 }}
                  animate={
                    isSkillsInView
                      ? {
                          x: [Math.random() * 500 - 250, 0],
                          y: [Math.random() * 500 - 250, 0],
                        }
                      : {}
                  }
                  transition={{
                    type: "spring",
                    duration: 1,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                  key={index}
                  className="flex text-sm w-28 h-20 shadow-lg rounded-full justify-center items-center mb-3 hover:shadow-lg transition bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText shadow-slate-500 dark:shadow-slate-900 hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg  "
                  whileHover={{
                    scale: [null, 1.1, 1.2],
                    transition: {
                      duration: 0.0,
                      delay: 0,

                      ease: ["easeInOut", "easeOut"],
                    },
                  }}
                >
                  <div>{skill}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

const skills = [
  "Python",
  "C++",
  "Java",
  "React.js",
  "HTML",
  "CSS",
  "PHP",
  "React Native",
  "MySQL",
  "Firebase Firestore",
  "Linux-Ubuntu",
  "Agile Methodologies",
  "Problem Solving",
  "Critical Thinking",
  "Team Collaboration",
  "Time Management",
  "Communication",
  "Adaptability",
  "Attention to Detail",
  "Presentation Skills",
];
