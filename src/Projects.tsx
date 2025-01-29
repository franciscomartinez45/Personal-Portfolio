import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const repositories = [
    "Purffect-Health",
    "Cipher-Care",
    "Full-Stack-Web-Application",
    "IceMan",
    "Personal-Portfolio",
    "Graph-Convolutional-Network",
  ];
  //add filtering

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/franciscomartinez45/repos`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        setRepos(
          response.data.filter((item: { name: string }) =>
            repositories.includes(item.name)
          )
        );
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section
      className="section-container overflow-y-scroll bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText"
      id="projects"
    >
      <div className="flex justify-center">
        <section className="py-20 dark:text-primaryText  ">
          <h2 className="text-xl font-semibold text-center mb-10 dark:text-darkPrimaryText">
            My GitHub Projects
          </h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="grid gap-x-[clamp(10px,20px,20px)] grid-cols-2 grid-rows-3 w-[clamp(60vw,50vw,50vw)]">
              {repos.map((repo) => (
                <motion.div
                  whileHover={{
                    scale: [null, 1.0, 1.04],
                    transition: {
                      duration: 0.5,
                      delay: 0,
                      times: [0, 0.3, 0.5],
                      ease: ["easeIn", "easeOut"],
                    },
                  }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mt-5  inline-block"
                  >
                    <div
                      key={repo.id}
                      className="shadow-lg text-[clamp(9px,2vw,16px)] rounded-lg p-4 hover:shadow-lg transition bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText shadow-slate-500 dark:shadow-slate-900 hover:bg-secondaryBg dark:hover:bg-darkSecondaryBg"
                    >
                      <h3 className="font-bold ">{repo.name}</h3>
                      <p className="font-light ">
                        {repo.description || "No description provided."}
                      </p>
                      <p className=" mt-2">
                        <strong>Language:</strong>{" "}
                        {repo.language || "Not specified"}
                      </p>
                      <p className=" font-light mt-0">
                        <strong className="font-bold">Topics:</strong>
                        {repo.topics.map((topic) => (
                          <>{" " + topic + ","}</>
                        ))}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
              ;
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
