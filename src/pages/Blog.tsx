import { useEffect, useState } from "react";
import { supabase } from "../supabase/client.ts";
import { format } from "date-fns";

interface Update {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

export function Updates() {
  const [updates, setUpdates] = useState<Update[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("updates").select();
      if (error) {
        return;
      }
      console.log(data);
      setUpdates(data || []);
    };
    fetchData();
  }, []);

  return (
    <section id="blog" className="section-container text-headerFontColor">
      <div className=" flex flex-col justify-center items-center justify-self-center  w-[90vw] lg:w-[40vw]  ">
        <h1 className=" font-semibold text-secondaryText mb-6 mt-20">BLOG</h1>
        <div className="overflow-y-auto  text-[clamp(10px,2vw,14px)]">
          <ul>
            {updates.map((update) => (
              <div
                key={update.id}
                className="rounded-lg bg-cardBackground border-b-2 shadow-lg p-6 lg:p-8"
              >
                <div className="p-4 ">
                  <h2 className="font-bold ">{update.title}</h2>
                  <p className="font-light">
                    {format(new Date(update.created_at), "PPPppp")}
                  </p>
                  <p className="border-t-2 border-double border-secondaryText">
                    {update.description}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
