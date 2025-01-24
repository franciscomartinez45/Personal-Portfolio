import { useEffect, useState } from "react";
import axios from "axios";

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
    "iceman",
    "personal-portfolio",
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="section-container" id="projects">
      <section className="py-20 dark:text-primaryText">
        <h2 className="text-3xl font-semibold text-center mb-10 dark:text-darkPrimaryText">
          My GitHub Projects
        </h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
            {repos.map((repo) => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className=" mt-5  inline-block"
              >
                <div
                  key={repo.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg">{repo.name}</h3>
                  <p className="text-gray-600">
                    {repo.description || "No description provided."}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Language:</strong>{" "}
                    {repo.language || "Not specified"}
                  </p>
                  <p className="text-sm text-gray-500 mt-0">
                    <strong>Topics:</strong>
                    {repo.topics.map((topic) => (
                      <>{" " + topic + ","}</>
                    ))}
                  </p>
                </div>
              </a>
            ))}
            ;
          </div>
        )}
      </section>
    </section>
  );
}
