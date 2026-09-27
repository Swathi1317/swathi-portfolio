function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p>Get to know me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I’m Swathi T, a 3rd-year Computer Science Engineering student
            at Kongunadu College of Engineering and Technology.
          </p>

          <p>
            I enjoy learning new technologies and building software
            projects. I’m currently exploring AI/ML and Data Analytics
            while improving my programming and development skills.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <span>Education</span>
            <strong>B.E. Computer Science and Engineering</strong>
          </div>

          <div className="info-card">
            <span>College</span>
            <strong>Kongunadu College of Engineering and Technology</strong>
          </div>

          <div className="info-card">
            <span>Current Year</span>
            <strong>3rd Year</strong>
          </div>

          <div className="info-card">
            <span>CGPA</span>
            <strong>8.9</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;