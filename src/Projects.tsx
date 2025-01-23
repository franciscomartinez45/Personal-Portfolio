import { motion } from "motion/react";

export default function Projects() {
  return (
    <section className="section-container">
      <section id="projects" className="projects py-20   h-screen">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="project-card">
          <img src="project-thumbnail.jpg" alt="Project" />
          <h3 className="font-semibold">Project Name</h3>
          <p>A brief description of the project goes here.</p>
          <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md">
            View Project
          </button>
          <motion.div layoutId="modal" animate={{}}>
            Hello
          </motion.div>
        </div>
      </section>
    </section>
  );
}
