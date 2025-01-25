export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-container bg-primaryBg dark:bg-darkPrimaryBg text-primaryText dark:text-darkPrimaryText"
    >
      <section className="awards py-20 h-screen">
        <h2 className="text-3xl font-semibold text-center">Achievements</h2>
        <div className="flex justify-center flex-wrap gap-10 mt-5">
          <div className="award-card  shadow-lg rounded-lg shadow-slate-500 dark:shadow-slate-900 p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold ">Certificates</h3>
            </div>
            <p className="mt-3 dark:text-slate-300 ">
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

          <div className="award-card  shadow-lg rounded-lg shadow-slate-500 dark:shadow-slate-900 p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold ">Honor Roll</h3>
            </div>

            <ul className="mt-3 dark:text-slate-300 ">
              <li>Fall 2023</li>
              <li>Spring 2024</li>
              <li>Fall 2024</li>
            </ul>
            <strong className="mt-0 text-gray-400">
              California State University, Dominguez Hills
            </strong>
          </div>

          <div className="award-card  shadow-lg rounded-lg shadow-slate-500 dark:shadow-slate-900 p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold ">Research Contributions</h3>
            </div>
            <p className="mt-3 ">
              "Addressing Health Disparities through Improved Health Literacy in
              Minority Populations"
            </p>
            <strong className="mt-0 text-gray-400">
              California State University, Dominguez Hills
            </strong>
          </div>
          <div className="aaward-card  shadow-lg rounded-lg shadow-slate-500 dark:shadow-slate-900 p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold ">Dean's List</h3>
            </div>

            <ul className="mt-3  text-gray-400 ">
              <li>Fall 2021</li>
              <li>Spring 2022</li>
            </ul>
            <strong className="mt-0 text-gray-400">
              El Camino Community College
            </strong>
          </div>
        </div>
      </section>
    </section>
  );
}
