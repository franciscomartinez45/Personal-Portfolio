import { useEffect, useState } from "react";
import axios from "axios";
import RepoExpand from "../components/RepoCard";

export interface Repo {
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
    "Soccer-ML-app",
    "Full-Stack-Web-Application",
    "IceMan",
    "Personal-Portfolio",
    "Graph-Convolutional-Network",
  ];

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
      className="section-container overflow-y-scroll  text-primaryText dark:text-darkPrimaryText"
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
            <div className="grid gap-x-[clamp(10px,20px,20px)] columns-2 gap-4 w-[clamp(60vw,50vw,50vw)]">
              {repos.map((repo) => (
                <RepoExpand key={repo.id} {...repo} />
              ))}
              ;
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
