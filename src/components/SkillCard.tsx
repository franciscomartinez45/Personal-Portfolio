import { useState } from "react";
import { Skills } from "../pages/Skills";
import { AnimatePresence, motion } from "motion/react";

export default function SkillCard(props: Skills) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      key={props.skillName}
      whileHover={{
        scale: [null, 1.0, 1.05],
        transition: {
          duration: 1,
          delay: 0,
          times: [0, 0.3, 0.5],
          ease: ["easeIn", "easeOut"],
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div
        key={props.skillName}
        className="shadow-lg  rounded-lg p-4 hover:shadow-lg transition bg-primaryBg"
      >
        <h3 className="font-bold ">{props.skillName}</h3>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <>
                <ul className="list-disc ml-6">
                  {props.tools.map((tool) => (
                    <li key={tool.length}>{tool}</li>
                  ))}
                </ul>
              </>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
