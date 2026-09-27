function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p>What I’ve built</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-top">
            <span className="project-number">01</span>
            <span className="project-status">Course Project</span>
          </div>

          <h3>Placement Preparation AI Agent</h3>

          <p>
            An AI-powered platform designed to help students prepare
            systematically for placement interviews and assessments.
          </p>

          <div className="project-features">
            <span>Resume Evaluation</span>
            <span>HR Interview Practice</span>
            <span>Coding Practice</span>
            <span>Preparation Roadmap</span>
            <span>Readiness Assessment</span>
          </div>

          <div className="project-role">
            <strong>My Role:</strong>
            <span>Agent Engineer</span>
          </div>

          <div className="project-role">
            <strong>Contribution:</strong>
            <span>
              Developed the Interview Agent and Coding Practice Agent.
            </span>
          </div>
        </div>


        {/* Project 2 */}
        <div className="project-card">
          <div className="project-top">
            <span className="project-number">02</span>
            <span className="project-status">Ongoing</span>
          </div>

          <h3>SmartFrame AI</h3>

          <p>
            An AI-powered eyewear recommendation project that analyzes
            facial features through a camera and provides personalized
            frame recommendations.
          </p>

          <div className="project-features">
            <span>Face Shape</span>
            <span>IPD</span>
            <span>Skin Tone</span>
            <span>Face Width</span>
            <span>Budget</span>
            <span>Style</span>
            <span>Virtual Fitting</span>
          </div>

          <div className="project-role">
            <strong>Status:</strong>
            <span>Currently being developed</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;