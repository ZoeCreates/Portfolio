import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDumbbell,
  FaMountain,
  FaPlane,
} from "react-icons/fa";
import { MdSchool, MdWork, MdCode, MdLightbulb } from "react-icons/md";
import { BsBriefcaseFill, BsLaptopFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function App() {
  const [activePage, setActivePage] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActivePage(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className="navigation">
        <div className="nav-links">
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            HOME
          </button>
          <button
            className={activePage === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            ABOUT ME
          </button>
          <button
            className={activePage === "experience" ? "active" : ""}
            onClick={() => scrollToSection("experience")}
          >
            EXPERIENCE
          </button>
          <button
            className={activePage === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            PROJECTS
          </button>
          <button
            className={activePage === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </button>
        </div>
      </nav>

      <section id="home" className="home-container">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>
              Hi!
              <br />
              I am
              <br />
              <span className="highlight">Zoe.</span>
            </h1>
            <p className="intro-text">
              A Software Engineer based in Los Angeles. With experience in
              full-stack development, AI/ML, and a passion for creating
              innovative solutions that make a difference.
            </p>
            <div className="cta-container">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
                onClick={() =>
                  (window.location.href =
                    "mailto:zihanxia0819@gmail.com?subject=Job Opportunity")
                }
              />
              <button
                className="hire-me-btn"
                onClick={() =>
                  (window.location.href =
                    "mailto:zihanxia0819@gmail.com?subject=Job Opportunity")
                }
              >
                Hire Me
              </button>
            </div>
            <div className="section-links">
              <span onClick={() => scrollToSection("about")}>About Me</span>
              <span>•</span>
              <span onClick={() => scrollToSection("experience")}>
                Experience
              </span>
              <span>•</span>
              <span onClick={() => scrollToSection("projects")}>Projects</span>
            </div>
          </div>
          <div className="image-container">
            <div className="profile-circle">
              <img src="/images/profile.jpg" alt="Zoe Xia" />
            </div>
            <div className="decorative-circle"></div>
          </div>
        </div>
      </section>

      <section id="about" className="page-container">
        <div className="content-wrapper">
          <div className="page-content">
            <h2 className="page-title">About Me</h2>

            <section className="education-section">
              <div className="education-image">
                <img src="/images/ucla-background.jpg" alt="UCLA Campus" />
              </div>
              <div className="education-content">
                <h3>
                  <MdSchool className="section-icon" /> Education
                </h3>
                <div className="card">
                  <h4>University of California - Los Angeles</h4>
                  <p className="date">Graduation Date: Dec, 2024</p>
                  <p className="degree">
                    Bachelor of Science: Computer Science & Cognitive Science,
                    Linguistics Minor
                  </p>
                  <p className="coursework">
                    Relevant Coursework: Data Structure, Algorithms and
                    Complexity, Database, Software Construction, Operating
                    System, Computer Organization, Computer Network, Python with
                    Applications, User Experience, Machine Learning, Discrete
                    Math, Linear Algebra.
                  </p>
                </div>
              </div>
            </section>

            <section className="skills-section">
              <h3>
                <MdCode className="section-icon" /> Technical Skills
              </h3>
              <div className="skills-grid">
                <div className="card">
                  <h4>
                    <MdCode className="icon" /> Languages
                  </h4>
                  <p>
                    C++, TypeScript, JavaScript, Python, SQL, Java, HTML, CSS
                    (LESS & Sass), C, C#, Bash, Matlab, R, Go, Ruby, Scala
                  </p>
                </div>
                <div className="card">
                  <h4>
                    <BsLaptopFill className="icon" /> Frameworks & Libraries
                  </h4>
                  <p>
                    React.js, Next.js, Angular, Express.js, React Native,
                    Vue.js, SpringBoot, Django, Flask
                  </p>
                </div>
                <div className="card">
                  <h4>
                    <MdLightbulb className="icon" /> Tools & Technology
                  </h4>
                  <p>
                    MySQL, MongoDB, PostgreSQL, Neo4j, SQLite, Redis; AWS (S3,
                    EC2, Redshift), Docker, Kubernetes, Terraform, CI/CD,
                    Firebase; RESTful API, Git, GitLab, VS Code, IntelliJ,
                    Xcode, Jupyter Notebook, Figma, Linux/Unix; JWT, JDBC,
                    Kernel
                  </p>
                </div>
              </div>
            </section>

            <section className="hobbies-section">
              <h3>
                <MdLightbulb className="section-icon" /> Hobbies & Interests
              </h3>
              <div className="hobbies-grid">
                <div className="card hobby-card">
                  <FaDumbbell className="hobby-icon" />
                  <h4>Fitness</h4>
                  <p>
                    Passionate about maintaining a healthy lifestyle through
                    regular exercise and strength training.
                  </p>
                </div>
                <div className="card hobby-card">
                  <FaMountain className="hobby-icon" />
                  <h4>Bouldering</h4>
                  <p>
                    Enjoy challenging myself with indoor and outdoor climbing,
                    solving complex routes and pushing my limits.
                  </p>
                </div>
                <div className="card hobby-card">
                  <FaPlane className="hobby-icon" />
                  <h4>Traveling</h4>
                  <p>
                    Love exploring new places, experiencing different cultures,
                    and creating lasting memories around the world.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="experience" className="page-container">
        <div className="content-wrapper">
          <div className="page-content">
            <h2 className="page-title">Work Experience</h2>
            <section className="experience-section">
              <div className="card">
                <h4>
                  <BsBriefcaseFill className="icon" /> CoursePals - Software
                  Engineer Intern
                </h4>
                <p className="date">
                  San Francisco, CA, USA | 2024.06 – 2024.08
                </p>
                <ul>
                  <li>
                    Developed CoursePals (https://www.coursepals.ai), an
                    AI-powered chatbot leveraging Dify for LLM orchestration
                  </li>
                  <li>
                    Built a document processing pipeline enabling students to
                    upload PDFs, DOCX, and images
                  </li>
                  <li>
                    Engineered a plugin system that integrates with Google
                    Scholar and other academic resources
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>
                  <BsBriefcaseFill className="icon" /> Dashmote - Frontend
                  Engineer Intern
                </h4>
                <p className="date">
                  Amsterdam, Netherlands & Shanghai, China | 2023.06 – 2023.09
                </p>
                <ul>
                  <li>
                    Developed "Delivermore," (https://www.delivermore.ai) an
                    application used by 1000+ restaurants
                  </li>
                  <li>
                    Built the application's login and user settings page using
                    React, Redux, and JavaScript
                  </li>
                  <li>
                    Optimized state management by replacing inefficient Redux
                    actions with batched updates
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>
                  <BsBriefcaseFill className="icon" /> Shanghai Fudan
                  Microelectronics Group Co., Ltd.
                </h4>
                <p className="date">Shanghai, China | 2023.02 – 2023.05</p>
                <ul>
                  <li>
                    Executed research and development initiatives for
                    enterprise-owned lightweight GPT-like models
                  </li>
                  <li>
                    Built a Q&A pipeline with LangChain and OpenAI API for
                    context-based responses
                  </li>
                  <li>
                    Utilized LangChain's SQL Agent to create and run SQL queries
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>
                  <BsBriefcaseFill className="icon" /> Dell EMC - Technical
                  Support Engineer
                </h4>
                <p className="date">Jul 2021 - Sep 2021</p>
                <ul>
                  <li>
                    Provided user support and troubleshooting for PC desktop and
                    application systems
                  </li>
                  <li>
                    Responded promptly to users in both English and Chinese;
                    diagnosed and resolved technical issues
                  </li>
                  <li>
                    Collaborated with engineering teams to drive the resolution
                    of major incidents
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>
                  <BsBriefcaseFill className="icon" /> iFLYTEK - Product & UIUX
                  Intern
                </h4>
                <p className="date">Shanghai, China | Mar 2021 - Jun 2021</p>
                <ul>
                  <li>
                    Developed an iPad application enhancing children's learning
                    experience through interactive functionality
                  </li>
                  <li>
                    Applied best practices for mobile application development,
                    focusing on scalability and maintainability
                  </li>
                  <li>
                    Collaborated with development team to implement
                    user-centered design principles
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>
                  <BsBriefcaseFill className="icon" /> Associated Students UCLA
                  - Customer Service Representative
                </h4>
                <p className="date">Jun 2021 - Dec 2021</p>
                <ul>
                  <li>
                    Assisted with food preparation, financial transactions, and
                    customer service at UCLA Campus
                  </li>
                  <li>
                    Managed restaurant operations in a fast-paced, collaborative
                    environment
                  </li>
                  <li>
                    Developed strong communication and problem-solving skills
                    while ensuring customer satisfaction
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="projects" className="page-container">
        <div className="content-wrapper">
          <div className="page-content">
            <h2 className="page-title">Projects</h2>
            <section className="projects-section">
              <h3>
                <MdCode className="section-icon" /> Projects
              </h3>
              <div className="card">
                <h4>BiteBrief - Food Notification Platform</h4>
                <ul>
                  <li>
                    Led the development of BiteBrief, a React-based platform for
                    real-time UCLA dining notifications
                  </li>
                  <li>
                    Built an email notification system and personalized
                    recommendation engine
                  </li>
                  <li>
                    Designed and developed the full-stack application with
                    comprehensive testing
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>Brallium - E-commerce Website</h4>
                <ul>
                  <li>
                    Developed an e-commerce website as part of Creative Labs at
                    UCLA
                  </li>
                  <li>
                    Handled backend development using Node.js, Express.js, and
                    MongoDB
                  </li>
                  <li>
                    Facilitated cross-functional collaboration with product and
                    front-end teams
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>BreakDiving - Non-profit Organization Platform</h4>
                <ul>
                  <li>
                    Developed a comprehensive platform for a non-profit
                    organization focused on personal development and community
                    building
                  </li>
                  <li>
                    Implemented user authentication, community features, and
                    content management system
                  </li>
                  <li>
                    Created responsive design ensuring accessibility across all
                    devices
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>StarWise Education - Education Consulting Platform</h4>
                <ul>
                  <li>
                    Built a modern education consulting platform for high school
                    students pursuing college admissions
                  </li>
                  <li>
                    Implemented booking system for counseling sessions, resource
                    management, and student progress tracking
                  </li>
                  <li>
                    Integrated payment processing and automated scheduling
                    functionalities for counseling services
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4>Aeyesky - Casino Surveillance Software</h4>
                <ul>
                  <li>
                    Designed and implemented the user interface for a
                    sophisticated casino surveillance system
                  </li>
                  <li>
                    Created intuitive dashboards and real-time monitoring
                    interfaces with modern UI/UX principles
                  </li>
                  <li>
                    Developed responsive and accessible design components for
                    security personnel
                  </li>
                </ul>
              </div>
            </section>

            <section className="links-section">
              <h3>
                <MdLightbulb className="section-icon" /> Project Links
              </h3>
              <div className="links-grid">
                <div className="card link-card">
                  <h4>Professional Work</h4>
                  <ul>
                    <li>
                      <a
                        href="https://www.delivermore.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DeliverMore AI
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.coursepals.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CoursePals AI
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.breakdiving.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Break Diving
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.starwise-edu.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        StarWise Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://aeyesky.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Aeyesky
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card link-card">
                  <h4>Academic Projects</h4>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/Isaac-Shuman/bite_brief2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BiteBrief GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bellayu17.github.io/brallium/purchase.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Brallium (Static)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://brallium-nine.vercel.app/shop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Brallium (Vercel)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card link-card">
                  <h4>Media</h4>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=MbrtaSYJpqA&t=148s"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Project Demo Video
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="contact" className="page-container">
        <div className="content-wrapper">
          <div className="page-content">
            <h2 className="page-title">Contact</h2>
            <div className="contact-grid">
              <div className="card contact-card">
                <FaPhone className="contact-icon" />
                <h4>Phone</h4>
                <p>+1 4242060733</p>
              </div>
              <div className="card contact-card">
                <FaEnvelope className="contact-icon" />
                <h4>Email</h4>
                <p>zihanxia0819@gmail.com</p>
              </div>
              <div className="card contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <h4>Location</h4>
                <p>Los Angeles, California, 90024</p>
              </div>
              <div className="card contact-card">
                <FaGithub className="contact-icon" />
                <h4>GitHub</h4>
                <a
                  href="https://github.com/ZoeCreates"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZoeCreates
                </a>
              </div>
              <div className="card contact-card">
                <FaLinkedin className="contact-icon" />
                <h4>LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/zoecreates"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  zoecreates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
