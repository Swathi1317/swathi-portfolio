import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
  <div className="hero-content">

    <div className="hero-text">
      <p className="hero-greeting">Hello, I'm</p>

      <h1>Swathi T</h1>

      <h2>Software Engineer</h2>

      <p className="hero-description">
        I’m a 3rd-year CSE student who enjoys learning new
        technologies and building software projects.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="primary-button">
          View My Work
        </a>

        <a
          href="/Swathi-Resume.pdf"
          download
          className="secondary-button"
        >
          Download Resume
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/Swathi1317"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <span>•</span>

        <a
          href="https://www.linkedin.com/in/swathi-t-927704357/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <span>•</span>

        <a href="mailto:swathithiru944@gmail.com">
          Email
        </a>
      </div>
    </div>


    <div className="hero-image">
      <div className="image-decoration"></div>

      <img
        src="/profile.jpg"
        alt="Swathi T"
      />
    </div>

  </div>
</section>

        {/* Temporary sections */}
        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
        
      </main>
      <footer className="footer">
  <p>© 2026 Swathi T. All rights reserved.</p>
</footer>
    </>
  );
}

export default App;