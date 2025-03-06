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
export default function Blog() {
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
    <section id="status" className="section-container ">
      <div className="flex justify-center h-[90vh] overflow-hidden">
        <div className="py-16">
          <h1 className="text-2xl font-semibold text-center mb-10 text-secondaryText">
            Blog
          </h1>

          <div className="grid gap-x-[clamp(10px,20px,20px)] grid-cols-2 grid-rows-3 w-[clamp(60vw,50vw,50vw)] overflow-scroll bg-secondaryBg text-secondaryText">
            {projects.map((project) => (
              <div key={project.projectid} className="m-3">
                <strong>{project.project_name}</strong>
                <p>{project.project_description}</p>
                <ul className="mt-5 ml-4">
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
