
import { useState } from "react";
import "./App.css";

// Skills displayed on the portfolio.
const skills = [
  ["01", "HTML", "Semantic and accessible web page structure."],
  ["02", "CSS", "Responsive layouts and modern UI design."],
  ["03", "JavaScript", "Interactive and dynamic web experiences."],
  ["04", "PHP", "Learning server-side web development."],
  ["05", "MySQL", "Working with relational databases and SQL."],
  ["06", "VB.NET", "Learning application programming fundamentals."]
];

// Projects displayed on the portfolio.
const projects = [
  {
    number: "01",
    title: "Responsive Portfolio",
    description:
      "A personal portfolio created with HTML, CSS, JavaScript and React.",
    tags: ["HTML", "CSS", "React"]
  },
  {
    number: "02",
    title: "Student Database",
    description:
      "An academic database project using relational tables and SQL queries.",
    tags: ["MySQL", "SQL"]
  },
  {
    number: "03",
    title: "Web Development Practice",
    description:
      "Small projects created while learning frontend and backend development.",
    tags: ["HTML", "CSS", "PHP"]
  }
];

// Reusable heading for each section.
function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

// Header and responsive navigation.
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact"
  ];

  return (
    <header className="header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="logo" href="#home">
          Arpita<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// Main introduction.
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">BCA NEP • 5th Semester</p>

          <h1>
            Hello, I'm <span>Arpita Prasad</span>
          </h1>

          <p className="hero-description">
            A BCA student interested in web development, programming
            and building simple, useful digital experiences.
          </p>

          <div className="hero-buttons">
            <a className="btn primary" href="#projects">
              View Projects
            </a>

            <a className="btn secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">AP</div>
          <h2>Arpita Prasad</h2>
          <p>BCA Student</p>

          <div className="status">
            <span />
            Open to learning
          </div>
        </div>
      </div>
    </section>
  );
}

// About section.
function About() {
  const details = [
    ["Degree", "BCA"],
    ["Semester", "5th Semester"],
    ["Focus", "Web Development"],
    ["Learning", "Programming & Technology"]
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="Learning. Building. Improving."
        />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am Arpita Prasad, a BCA NEP 5th-semester student
              interested in programming, web technologies and
              software development.
            </p>

            <p>
              I enjoy learning new technologies and applying what
              I learn through practical projects and academic work.
            </p>
          </div>

          <div className="about-info">
            {details.map(([label, value]) => (
              <div className="info-item" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills section.
function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I'm learning"
        />

        <div className="skills-grid">
          {skills.map(([number, title, description]) => (
            <article className="skill-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects section.
function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Education section.
function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
        />

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot" />

            <div>
              <p className="timeline-year">Current</p>
              <h3>Bachelor of Computer Applications</h3>

              <p>
                BCA under the National Education Policy (NEP),
                currently studying in the 5th semester.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact section with your actual contact links.
function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-content">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's connect.</h2>

          <p>
            Interested in technology, projects or collaboration?
            Feel free to get in touch.
          </p>

          <p className="email-address">
            Email:{" "}
            <a href="mailto:arpita0prasad@gmail.com">
              arpita0prasad@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:arpita0prasad@gmail.com">
            Email <span>↗</span>
          </a>

          <a
            href="https://github.com/arpita0prasad-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/arpita-prasad-171631409"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer with the current year.
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Arpita Prasad</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

// Main component combines all portfolio sections.
export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
