import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="">
      <section id="home" className="section-container">
        <section className="hero bg-cover bg-center text-center h-screen bg-gray-600 flex items-center justify-center ">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Hello, I'm Francisco Martinez
            </h1>
            <p className="text-xl text-white mt-2">
              Full-Stack Developer | Aspiring Machine Learning Engineer
            </p>
            <button className="bg-slate-200 text-black py-2 px-4 mt-5 rounded-md">
              <a href="#about">Learn More About Me</a>
            </button>
          </div>
        </section>
      </section>

      <section id="about" className="section-container">
        <section className="fun-facts py-20 h-screen">
          <h2 className="text-3xl font-semibold text-center">About Me</h2>
          <ul className="list-disc mt-5">
            <li>I love coding in my free time.</li>
            <li>I enjoy traveling and learning about new cultures.</li>
            <li>I'm a huge fan of science fiction books and movies.</li>
          </ul>
        </section>
      </section>

      <section className="section-container">
        <section
          id="skills"
          className="skills py-20 h-screen justify-center bg-gray-200"
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-center">Skills</h2>

            <div className="flex justify-center gap-10 mt-5">
              <div style={container}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    style={box}
                    whileHover={{
                      scale: [null, 1.1, 1.6],
                      transition: {
                        duration: 1,
                        times: [0, 0.3, 1],
                        ease: ["easeInOut", "easeOut"],
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
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

      <section className="section-container">
        <section
          id="projects"
          className="projects py-20 bg-yellow-900 h-screen"
        >
          <h2 className="text-3xl font-semibold text-center">Projects</h2>
          <div className="project-card">
            <img src="project-thumbnail.jpg" alt="Project" />
            <h3 className="font-semibold">Project Name</h3>
            <p>A brief description of the project goes here.</p>
            <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md">
              View Project
            </button>
          </div>
        </section>
      </section>

      <section className="section-container">
        <section id="" className="testimonials py-20 bg-gray-100 h-screen">
          <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
          <div className="flex justify-center gap-10 mt-5">
            <div className="testimonial-card">
              <p>
                "John was a pleasure to work with. His coding skills and
                attention to detail were exceptional."
              </p>
              <h3>- Jane Smith, Software Engineer</h3>
            </div>
            <div className="testimonial-card">
              <p>
                "A highly talented developer with a strong understanding of
                modern web technologies."
              </p>
              <h3>- Mark Johnson, Project Manager</h3>
            </div>
          </div>
        </section>
      </section>

      <section className="section-container">
        <section className="blog py-20 h-screen">
          <h2 className="text-3xl font-semibold text-center">
            Latest Articles
          </h2>
          <div className="flex justify-center gap-10 mt-5">
            <div className="blog-card">
              <h3>How to Build a React App</h3>
              <p>
                A step-by-step guide to building a React app from scratch...
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md">
                Read More
              </button>
            </div>
            <div className="blog-card">
              <h3>Understanding Asynchronous JavaScript</h3>
              <p>
                Learn about callbacks, promises, and async/await in
                JavaScript...
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md">
                Read More
              </button>
            </div>
          </div>
        </section>
      </section>

      <section className="section-container">
        <section id="Contact" className="contact py-20 bg-gray-100 h-screen">
          <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
          <form className="mt-10">
            <input
              type="text"
              placeholder="Your Name"
              className="py-2 px-4 mb-5 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="py-2 px-4 mb-5 w-full"
            />
            <textarea
              placeholder="Your Message"
              className="py-2 px-4 mb-5 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>

      <section className="section-container">
        <section className="awards py-20 bg-gray-100 h-screen">
          <h2 className="text-3xl font-semibold text-center">Achievements</h2>
          <div className="flex justify-center gap-10 mt-5">
            <div className="award-card">
              <h3>Top 10 Hackathon Winner</h3>
              <p>Won a local hackathon with a team of developers.</p>
            </div>
            <div className="award-card">
              <h3>Graduated with Honors</h3>
              <p>
                Received a degree in Computer Science with honors from XYZ
                University.
              </p>
            </div>
          </div>
        </section>
      </section>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 50,
          originX: 0,
          backgroundColor: "black",
          opacity: 0.5,
        }}
      />
    </div>
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

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "40px",
  margin: "20px",
};

const box = {
  width: 125,
  height: 125,
  backgroundColor: "white",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
