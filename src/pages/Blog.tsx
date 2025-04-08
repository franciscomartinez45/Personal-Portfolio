import { useEffect, useState } from "react";
import { supabase } from "../supabase/client.ts";
import { format } from "date-fns";
import { motion } from "motion/react";

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
    <section
      id="blog"
      className="section-container text-headerFontColor bg-white/10 backdrop-blur-sm "
    >
      <div className=" flex flex-col justify-center items-center justify-self-center w-[90vw] lg:w-[40vw]  ">
        <h1 className=" font-semibold mb-6 mt-20">BLOG</h1>
        <div className="overflow-y-auto text-[clamp(10px,2vw,14px)] h-[80vh] w-[80vw] lg:w-[40vw] lg:h-[40vh]">
          <ul>
            {updates.map((update, index) => (
              <motion.div
                whileInView={{ y: ["-100%", "0"] }}
                transition={{ duration: 2, delay: index }}
                key={update.id}
                className="p-4 lg:p-2 hover:border-b-4 hover:border-primaryText"
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
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
