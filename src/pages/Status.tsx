export default function Status() {
  const timestamp = new Date();

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
            <div className="bg-primaryBg dark:bg-darkPrimaryBg m-3">
              <h3>
                <strong>Personal Portfolio</strong>
              </h3>
              <p className="mt-5">
                This website is constantly evolving as I integrate technologies
                that are in high demand within the industry. My current goal is
                to connect to a relational database in order to display updates
                on my projects more efficiently. As of now, I am working on:
              </p>
              <ul className="list-decimal font-normal mt-5 ml-5">
                <li>
                  <p>Implementing serverless architecture</p>
                </li>
                <li>
                  <p>Connecting serverless to AWS Lambda</p>
                </li>
                <li>
                  Test serverless API end points to make requests to AWS RDS
                </li>
              </ul>
              <p className="font-bold">
                Last Updated: {timestamp.toDateString()}
              </p>
            </div>
            <div className="bg-primaryBg dark:bg-darkPrimaryBg">
              <h3>
                <strong>Machine Learning Project</strong>
              </h3>
              <p className="mt-5">
                As an avid Spanish football league fan, I want to incorporate
                the discipline of Machine Learning and statistics of football to
                potentially predict soccer league matches. My first steps were
                to
              </p>
              <ul className="list-decimal font-normal mt-5 ml-5">
                <li>
                  Scrape necessary data from Sports-Reference.com and store it
                  into an S3 bucket
                </li>
                <li>Feature engineer from all the stats of each team</li>
                <li>
                  Use Scikit-learn's RandomForestClassifier, LogisticRegression,
                  and SVC as well as xgboost and Pandas
                </li>
              </ul>
              <p className="mt-5">
                With this current information and possible predictions, I will
                wait until matchweek 26 to cross reference my results to the
                actual predictions
              </p>
              <p className="font-bold">
                Last Updated: {timestamp.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
