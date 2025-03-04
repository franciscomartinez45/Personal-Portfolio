import { useState } from "react";
import { Repo } from "../pages/Projects";
import { AnimatePresence, motion } from "motion/react";

export default function RepoExpand(props: Repo) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      key={props.id}
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
        key={props.id}
        className="shadow-lg text-[clamp(9px,2vw,16px)] rounded-lg p-4 hover:shadow-lg transition bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText shadow-slate-500 dark:shadow-slate-900 hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg"
      >
        <a
          href={props.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-5 inline-block"
        >
          <h3 className="font-bold ">{props.name}</h3>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="font-light ">
                  {props.description || "No description provided."}
                </p>
                <p className=" mt-2">
                  <strong>Language:</strong> {props.language || "Not specified"}
                </p>
                <p className=" font-light mt-0">
                  <strong className="font-bold">Topics:</strong>
                  {props.topics.map((topic) => (
                    <>{" " + topic + ","}</>
                  ))}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      </div>
    </motion.div>
  );
}
