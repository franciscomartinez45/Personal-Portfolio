export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <section className="awards py-20   h-screen">
        <h2 className="text-3xl font-semibold text-center">Achievements</h2>
        <div className="flex justify-center gap-10 mt-5">
          <div className="award-card">
            <h3>Top 10 Hackathon Winner</h3>
            <p>Won a local hackathon with a team of developers.</p>
          </div>
          <div className="award-card">
            <h3>Graduated with Honors</h3>
            <p>
              Received a degree in Computer Science with honors from XYZ
              University.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
