import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Skills() {
  const skillsSectionRef = useRef(null);
  const isSkillsInView = useInView(skillsSectionRef, { once: false });
  return (
    <section className="section-container overflow-hidden bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText text-[clamp(8px,2vw,12px)]">
      <section
        id="skills"
        className="skills py-20 justify-center items-center"
        ref={skillsSectionRef}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-center ">Skills</h2>

          <div className="flex justify-center items-center py-7">
            <div className="grid grid-cols-4 grid-rows-4  gap-[clamp(25px,1.5rem,40px)]">
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
                    duration: 3,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                  key={index}
                  className="flex shadow-lg rounded-full justify-center items-center gap-48 hover:shadow-lg transition bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText shadow-slate-500 dark:shadow-slate-900 hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg w-[clamp(40px,10rem,80px)] h-[clamp(40px,10rem,80px)]  "
                  whileHover={{
                    scale: [null, 1.1, 1.2],
                    transition: {
                      duration: 0.0,
                      delay: 0,
                      ease: ["easeIn", "easeOut"],
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
  "PyTorch",
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
