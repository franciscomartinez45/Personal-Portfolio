import { motion } from "motion/react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="section-container text-primaryText  "
    >
      <div className="flex justify-center ">
        <div className="py-20 flex flex-col justify-center items-center w-[90vw] lg:w-[40vw] justify-self-center ">
          <h1 className=" font-semibold text-center mb-5 text-secondaryText ">
            EDUCATION
          </h1>
          <div className="text-[clamp(11px,2vw,12px)] rounded-lg bg-white/10 backdrop-blur-sm p-10 ">
            <motion.div
              className="rounded-lg w-[80vw] lg:w-[40vw] mb-6  "
              initial={{ x: "100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              <h3 className="">
                As a student at{" "}
                <strong className="">
                  California State University, Dominguez Hills{" "}
                </strong>
                (Fall 2023-Fall 2024), I received numerous recognitions and
                awards for an outstanding academic performance such as:
              </h3>
              <p className="mt-2 ">
                <strong>Honor Rolls:</strong>{" "}
              </p>
              <ul className="ml-6 list-disc">
                <li>Fall 2023</li>
                <li>Spring 2024</li>
                <li>Fall 2024</li>
              </ul>
              <p className="mt-2 ">
                <strong>Scholarships:</strong>
              </p>
              <ul className="ml-6 list-disc">
                <li>Edison International STEM Scholarship (Fall 2024)</li>
              </ul>
              <p className="mt-2 ">
                <strong>Research Contribution:</strong>
              </p>
              <ul className="ml-6 list-disc">
                <li>
                  "Addressing Health Disparities through Improved Health
                  Literacy in Minority Populations"
                </li>
              </ul>
            </motion.div>
            <motion.div
              className=" w-[80vw] lg:w-[40vw]"
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              <h3 className="">
                <strong>El Camino Community College </strong>
                (Summer 2021-Spring 2023)
              </h3>
              <p>
                During my time at this institution, I was recognized and
                received multiple certifications with Honors{" "}
              </p>
              <p className="mt-2 ">
                <strong>Certificates:</strong>
              </p>
              <ul className="ml-6 list-disc">
                <li>
                  Certificate of Achievement With Honors, Computer Science
                  (Spring 2023)
                </li>
                <li>
                  CSU General Education Certificate With Honors (Fall 2022)
                </li>
              </ul>
              <p className="mt-2 ">
                <strong>Deans Lists:</strong>
              </p>
              <ul className="ml-6 list-disc">
                <li>Fall 2021</li>
                <li>Spring 2022</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
