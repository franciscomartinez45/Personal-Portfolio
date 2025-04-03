export function ProfessionalSection() {
  return (
    <section id="experience" className="section-container">
      <div className=" flex flex-col justify-center items-center justify-self-center">
        <h1 className=" font-semibold text-headerFontColor mb-6 mt-20">
          EXPERIENCE
        </h1>
        <div className="rounded-lg bg-cardBackground text-headerFontColor w-[95vw] lg:w-[45vw] p-6 text-[clamp(9px,1.4vw,12px)] overflow-hidden">
          <p className=" border-y-2 text-headerFontColor">
            <strong>PROFESSIONAL EXPERIENCE:</strong>
          </p>
          <p className=" font-bold text-headerFontColor">
            Research Assistant (California State University, Dominguez Hills)
          </p>
          <p>Fall 2023-Spring 2024</p>
          <p>
            "Addressing Health Disparities through Improved Health Literacy in
            Minority Populations"
          </p>
          <ul className="list-disc ml-6 pb-4 ">
            <li>
              Conducted research leveraging AI/ML models and social network
              analysis to study misinformation propagation.
            </li>
            <li>
              Identified sub-networks vulnerable to misinformation due to high
              clustering and reliance on influential nodes, providing insights
              into structural vulnerabilities.
            </li>
            <li>
              Utilized Python, Pandas, and Pytorch to process large datasets and
              train predictive models
            </li>
          </ul>
          <p className="border-y-2 text-headerFontColor">
            <strong>EMPLOYMENT HISTORY:</strong>
          </p>
          <p className=" font-bold text-headerFontColor">
            Costco Business Center
          </p>
          <p>April 2021 - Present</p>
          <p>
            As a Merchandising employee, I have taken multiple roles within the
            company such as Stocker, Cashier, Forklift drive and Meat department
            employee. Within these roles I continued to develop:
          </p>
          <ul className="list-disc ml-6 pb-4 ">
            <li>
              Adaptability by adjusting to different roles and acting swiftly to
              changes of pace throughout the day
            </li>
            <li>
              Attention to detail through ensuring propper signage and
              inconsistencies
            </li>
            <li>
              Time management skills through prioritization safety and time
              sensative concerns with members or product
            </li>
            <li>
              Leadership skills by identifying and reiterating ways to practice
              efficient standards to my coworkers and enhance day to day
              operational success
            </li>
          </ul>
          <p className="text-headerFontColor font-bold">
            The Home Depot Department Supervisor
          </p>
          <p className="text-headerFontColor font-bold">
            Department Supervisor (various)
          </p>
          <p>October 2019-April 2021</p>
          <p>
            With experience managing different departments such as Hardware,
            Flooring, Receiving and Paint departments:
          </p>
          <ul className="list-disc ml-6 ">
            <li>
              Developed employees' skills through guidence and mentoring by
              enforcing safety and best practices standards within the work
              place
            </li>
            <li>
              Identified and addressed key areas of shrink by analyzing
              day-to-day sales and loss-prevention reports
            </li>
            <li>
              Troubleshoot issues with technology used within the work place
              such as hand held devices and workplace computers
            </li>
            <li>
              Developed strong communication skills through common place
              interaction with customers and employees
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
