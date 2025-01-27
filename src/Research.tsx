import { motion } from "motion/react";

export default function Research() {
  return (
    <section
      className="section-container bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText "
      id="research"
    >
      <div className="flex justify-center">
        <div className="py-16 w-3/4">
          <h2 className="text-3xl font-semibold text-center  dark:text-darkPrimaryText ">
            Research Project
          </h2>
          <div className="py-5">
            <div className="flex justify-center align-middle">
              <h2 className="italic ">
                "Addressing Health Disparities through Improved Health Literacy
                in Minority Populations"
              </h2>
            </div>
            <div className="flex justify-center align-middle py-1">
              <strong className="mt-0 text-gray-800 dark:text-darkPrimaryText">
                California State University, Dominguez Hills
              </strong>
            </div>
            <div className="flex justify-center">
              <p>Research Mentor: Dr. Amlan Chatterjee</p>
            </div>
            <div className="flex justify-center py-5">
              <ul className="group list-disc space-y-2">
                <li>
                  <p>
                    Designed and implemented a custom Graph Convolutional
                    Networks (GCNs) using PyTorch to analyze synthetic social
                    networks from{" "}
                    <a
                      href="https://github.com/Bader-Research/GTgraph"
                      className="text-blue-500 font-bold "
                    >
                      GTgraph Suite
                    </a>{" "}
                    and UC Irvine's Machine Learning Repository for feature
                    engineering
                  </p>
                </li>
                <li>
                  <p>
                    Created and manipulated synthetic datasets using NetworkX to
                    simulate realistic social network dynamics for
                    experimentation and testing of AI/ML models.
                  </p>
                </li>
                <li>
                  <p>
                    Engineered advanced features to enhance machine learning
                    pipeline performance using various methods such as
                    incorporating sentiment analysis with TextBlob and node
                    influence identification using centrality metrics such as
                    PageRank and Eigenvector Centrality.
                  </p>
                </li>
                <li>
                  <p>
                    Developed a scalable data analysis pipeline for identifying
                    misinformation dissemination patterns, which improved model
                    accuracy by 15% and enhanced insights into high-risk nodes
                    for targeted interventions.
                  </p>
                </li>
                <li>
                  <p>
                    Explored causal inference techniques to better understand
                    the relationship between social network structures and
                    misinformation spread
                  </p>
                </li>
                <li>
                  <p>
                    Wrote detailed technical documentation outlining
                    methodologies, experiments, and key findings for manuscript
                    to ensure propper reproduction of findings
                  </p>
                </li>

                <li>
                  <p>
                    Investigated real-world applications of AI/ML models to
                    mitigate health disparities by targeting misinformation and
                    improving health communication campaigns.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center ">
            <a
              href="https://github.com/franciscomartinez45/Graph-Convolutional-Network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" text-center px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-lg cursor-pointer mt-5 "
              >
                Go to project's Github
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
