export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-container  bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText text-[clamp(5px,2.1vw,16px)]"
    >
      <section className="awards py-20">
        <h1 className="font-bold text-center">Achievements</h1>
        <div className="flex justify-center">
          <div className="grid grid-rows-2 grid-cols-2 gap-10 mt-7 ">
            <div className="award-card shadow-lg rounded-lg p-5 dark:shadow-slate-900 w-[30vw] h-[30vh]">
              <div className="flex items-center">
                <h3 className="font-bold ">Certificates</h3>
              </div>
              <div>
                <p className="mt-3 dark:text-slate-300">
                  Certificate of Achievement With Honors, Computer Science
                </p>
                <strong className="mt-0 text-gray-400">
                  El Camino Community College (Fall 2022)
                </strong>
                <p className="mt-3 dark:text-slate-300">
                  CSU General Education Certification
                </p>
                <strong className="mt-0 text-gray-400">
                  El Camino Community College (Fall 2022)
                </strong>
              </div>
            </div>

            <div className="award-card  shadow-lg rounded-lg p-5 dark:shadow-slate-900  w-[30vw] h-[30vh]">
              <div className="flex items-center ">
                <h3 className=" font-bold ">Honor Roll</h3>
              </div>
              <div>
                <ul className="mt-3 dark:text-slate-300 ">
                  <li>Fall 2023</li>
                  <li>Spring 2024</li>
                  <li>Fall 2024</li>
                </ul>
                <strong className="mt-0 text-gray-400">
                  California State University, Dominguez Hills
                </strong>
              </div>
            </div>
            <div className="award-card  shadow-lg rounded-lg p-5 dark:shadow-slate-900  w-[30vw] h-[30vh]">
              <div className="flex items-center ">
                <h3 className=" font-bold ">Research Contributions</h3>
              </div>
              <div>
                <p className="mt-3 ">
                  "Addressing Health Disparities through Improved Health
                  Literacy in Minority Populations"
                </p>
                <strong className="mt-0 text-gray-400">
                  California State University, Dominguez Hills
                </strong>
              </div>
            </div>
            <div className="aaward-card p-5 shadow-lg grounded-lg dark:shadow-slate-900  w-[30vw] h-[30vh] ">
              <div className="flex items-center ">
                <h3 className=" font-bold ">Dean's List</h3>
              </div>
              <div>
                <ul className="mt-3 dark:text-slate-300 ">
                  <li>Fall 2021</li>
                  <li>Spring 2022</li>
                </ul>
                <strong className="mt-0 text-gray-400">
                  El Camino Community College
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
