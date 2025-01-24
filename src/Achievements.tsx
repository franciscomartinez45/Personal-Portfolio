export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <section className="awards py-20   h-screen">
        <h2 className="text-3xl font-semibold text-center">Achievements</h2>
        <div className="flex justify-center flex-wrap gap-10 mt-5">
          <div className="award-card bg-white shadow-lg rounded-lg p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-blue-500">
                <i className="fas fa-certificate"></i>{" "}
              </span>
              <h3 className="text-xl font-bold text-gray-800">Certificates</h3>
            </div>
            <p className="mt-3 text-gray-600">
              Certificate of Achievement With Honors, Computer Science
            </p>
            <p className="mt-0 text-gray-400">
              El Camino Community College (Fall 2022)
            </p>
            <p className="mt-3 text-gray-600">
              CSU General Education Certification
            </p>
            <p className="mt-0 text-gray-400">
              El Camino Community College (Fall 2022)
            </p>
          </div>

          <div className="award-card bg-white shadow-lg rounded-lg p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-green-500">
                <i className="fas fa-medal"></i>{" "}
              </span>
              <h3 className="text-xl font-bold text-gray-800">Honor Roll</h3>
            </div>
            <p className="mt-5 text-gray-400">
              California State University, Dominguez Hills
            </p>
            <ul className="mt-3  text-gray-600 ">
              <li>Fall 2023</li>
              <li>Spring 2024</li>
              <li>Fall 2024</li>
            </ul>
          </div>

          <div className="award-card bg-white shadow-lg rounded-lg p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-blue-500">
                <i className="fas fa-certificate"></i>{" "}
              </span>
              <h3 className="text-xl font-bold text-gray-800">Certificates</h3>
            </div>
            <p className="mt-3 text-gray-600">
              Certificate of Achievement, Computer Science
            </p>
            <p className="mt-0 text-gray-400">El Camino Community College</p>
          </div>
          <div className="award-card bg-white shadow-lg rounded-lg p-5 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-blue-500">
                <i className="fas fa-certificate"></i>{" "}
              </span>
              <h3 className="text-xl font-bold text-gray-800">Dean's List</h3>
            </div>

            <p className="mt-0 text-gray-400">El Camino Community College</p>
            <ul className="mt-3  text-gray-600 ">
              <li>Fall 2021</li>
              <li>Spring 2022</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
