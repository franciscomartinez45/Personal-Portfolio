import { useState, useEffect } from "react";
import { supabase } from "../supabase/client";
import dayjs from "dayjs";

interface Projects {
  project_description: string;
  project_link: string;
  project_name: string;
  projectid: number;
  projectupdate: Updates[];
}
interface Updates {
  projectid: number;
  update_description: string;
  update_timestamp: string;
  updateid: number;
}
export default function Status() {
  const [projects, setProjects] = useState<Projects[]>([]);
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const { data: projects } = await supabase
      .from("project")
      .select("*, projectupdate(*)");
    setProjects(projects || []);
  };

  return (
    <section
      id="status"
      className="section-container text-primaryText dark:text-darkPrimaryText"
    >
      <div className="flex justify-center h-[90vh]">
        <div className="py-16">
          <h2 className="text-xl font-semibold text-center mb-10 bg-primaryBg dark:bg-darkPrimaryBg dark:text-darkPrimaryText">
            Current Projects
          </h2>

          <div className="grid gap-x-[clamp(10px,20px,20px)] grid-cols-2 grid-rows-3 w-[clamp(60vw,50vw,50vw)]">
            {projects.map((project) => (
              <div
                key={project.projectid}
                className="bg-primaryBg dark:bg-darkPrimaryBg m-3"
              >
                <strong>{project.project_name}</strong>
                <p>{project.project_description}</p>
                <ul className="mt-5">
                  {project.projectupdate.map((update) => (
                    <>
                      <li className="font-bold  list-decimal ">
                        {update.update_description}
                      </li>
                      <p>
                        {dayjs(update.update_timestamp).format(
                          "D MMM YYYY @ hh:mm A"
                        )}
                      </p>
                    </>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
