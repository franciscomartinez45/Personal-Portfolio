import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Skills() {
  const skillsSectionRef = useRef(null);
  const isSkillsInView = useInView(skillsSectionRef, { once: false });
  return (
    <section className="section-container">
      <section
        id="skills"
        className="skills py-20 h-screen justify-center text-primaryText"
        ref={skillsSectionRef}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-center">Skills</h2>

          <div className="flex justify-center gap-10 mt-5">
            <div style={container}>
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
                  style={box}
                  whileHover={{
                    scale: [null, 1.1, 1.6],
                    transition: {
                      duration: 0.7,
                      delay: 0,
                      times: [0, 0.3, 0.7],
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
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "PHP",
  "React Native",
  "MySQL",
  "Firebase Firestore",
  "Git",
  "GitHub",
  "Windows",
  "Linux-Ubuntu",
  "AI/ML",
];

const box = {
  width: 100,
  height: 100,
  backgroundColor: "white",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
  border: "2px solid rgba(0, 0, 0, 0.05)",
};

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "40px",
  margin: "20px",
};
