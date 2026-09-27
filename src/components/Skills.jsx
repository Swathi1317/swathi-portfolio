function Skills() {
  const skills = [
    "Python",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p>What I use</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

      <div className="exploring">
        <p>Currently Exploring</p>

        <div className="exploring-items">
          <span>AI/ML</span>
          <span>Data Analytics</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;