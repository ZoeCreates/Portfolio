import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDumbbell,
  FaMountain,
  FaPlane,
} from "react-icons/fa";
import { MdSchool, MdWork, MdCode, MdLightbulb } from "react-icons/md";
import { BsBriefcaseFill, BsLaptopFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const EMAIL = "zxia2640@usc.edu";
const PHONE_DISPLAY = "(424) 206-0733";
const PHONE_TEL = "+14242060733";

const experiences = [
  {
    title: "Senator - Viterbi Graduate Student Association (VGSA)",
    meta: "Los Angeles, CA | Sep 2026 – Present",
    bullets: [],
  },
  {
    title: "Web Assistant - USC Annenberg Media",
    meta: "Los Angeles, CA | Remote | May 2026 – Present",
    bullets: ["Help with front-end development for the USC Center for Health website"],
  },
  {
    title: "USC Agent for Clinical Trials Lab - Research Assistant",
    meta: "Prof. Ruishan Liu | Los Angeles, CA | Apr 2026 – Present",
    bullets: [
      "Built a multi-agent clinical diagnosis framework in Python implementing a 3-stage SMART trial design over 2,000+ MedQA cases, with LLM-judge evaluation and confidence-based routing that adaptively selects reasoning strategies, including RAG",
      "Developed a patient simulator with synthetic personas and grounded prompting; optimized strategy selection with Q-learning and validated results via bootstrap resampling, improving diagnostic accuracy by 20% over the best fixed-strategy baseline",
      "Benchmarked 5 LLMs on AI Hospital and 3MDBench to compare diagnostic accuracy across multi-agent reasoning strategies",
    ],
  },
  {
    title: "Business Development - USC CGSA",
    meta: "Los Angeles, CA | Jan 2026 – Present",
    bullets: [
      "Organized the graduation yacht celebration with 150+ participants",
      "Organized the Mid-Autumn Festival garden party, with games and mooncake-making activities",
      "Organized a food carnival that brought 20+ vendors to campus to introduce food to students, with 200+ attendees",
    ],
  },
  {
    title: "Think Round, Inc. - Software Engineer Intern",
    meta: "San Francisco, CA | Apr 2025 – Aug 2025",
    bullets: [
      "Built a responsive, user-facing gallery web app with React, TypeScript, and Tailwind CSS, consuming REST and GraphQL APIs to support dynamic artwork browsing and community interaction",
      "Integrated an AI chatbot using LangChain, multi-provider LLM APIs, and embedding-based vector search, supporting multi-turn context retention and sentiment-aware responses",
      "Partnered with designers and mental health advisors to turn feedback into chatbot iterations and run A/B tests, increasing user task completion rate by 15%",
    ],
  },
  {
    title: "Dashmote - Front-End Developer Intern",
    meta: "Shanghai, China | Jun 2023 – Sep 2023",
    bullets: [
      "Built and maintained user settings and analytics dashboard pages with React, JavaScript, HTML/CSS, REST APIs, and Firebase, enabling users to manage preferences and explore business data",
      "Developed 10 reusable React components shared across 4 pages, standardizing UI behavior and reducing duplicated code",
      "Optimized Redux state updates and applied React memoization, cutting unnecessary re-renders by 25% and dashboard rendering time by 20%",
      "Contributed to Delivermore (https://www.delivermore.ai), an application used by 1000+ restaurants",
    ],
  },
  {
    title: "CoursePals - Software Engineer Intern",
    meta: "San Francisco, CA, USA | 2024.06 – 2024.08",
    bullets: [
      "Developed CoursePals (https://www.coursepals.ai), an AI-powered chatbot leveraging Dify for LLM orchestration",
      "Built a document processing pipeline enabling students to upload PDFs, DOCX, and images",
      "Engineered a plugin system that integrates with Google Scholar and other academic resources",
    ],
  },
  {
    title: "Shanghai Fudan Microelectronics Group Co., Ltd.",
    meta: "Shanghai, China | 2023.02 – 2023.05",
    bullets: [
      "Executed research and development initiatives for enterprise-owned lightweight GPT-like models",
      "Built a Q&A pipeline with LangChain and OpenAI API for context-based responses",
      "Utilized LangChain's SQL Agent to create and run SQL queries",
    ],
  },
  {
    title: "Associated Students UCLA - Customer Service Representative",
    meta: "Jun 2021 - Dec 2021",
    bullets: [
      "Assisted with food preparation, financial transactions, and customer service at UCLA Campus",
      "Managed restaurant operations in a fast-paced, collaborative environment",
      "Developed strong communication and problem-solving skills while ensuring customer satisfaction",
    ],
  },
  {
    title: "Dell EMC - Technical Support Engineer",
    meta: "Jul 2021 - Sep 2021",
    bullets: [
      "Provided user support and troubleshooting for PC desktop and application systems",
      "Responded promptly to users in both English and Chinese; diagnosed and resolved technical issues",
      "Collaborated with engineering teams to drive the resolution of major incidents",
    ],
  },
  {
    title: "iFLYTEK - Product & UIUX Intern",
    meta: "Shanghai, China | Mar 2021 - Jun 2021",
    bullets: [
      "Developed an iPad application enhancing children's learning experience through interactive functionality",
      "Applied best practices for mobile application development, focusing on scalability and maintainability",
      "Collaborated with development team to implement user-centered design principles",
    ],
  },
];

const projects = [
  {
    name: "SMART Trial Simulator - Multi-Agent Clinical Diagnosis",
    badge: "Research · USC Agent for Clinical Trials Lab",
    summary:
      "An adaptive three-stage clinical encounter simulator with re-randomization and JSONL trajectory logging, built for pilot experiments on MediQ-style cases. Patient, doctor, and judge agents run under configurable trial arms, with confidence-based routing between reasoning strategies.",
    bullets: [
      "Implements a 3-stage SMART trial design over 2,000+ MedQA cases, with an LLM judge, category-level red flags, and per-arm clinician behavior defined in YAML",
      "Unified model client supporting Groq, OpenAI, Anthropic, and Gemini with rate-limit retry; mock models for deterministic tests",
      "Optimized strategy selection with Q-learning and validated via bootstrap resampling, improving diagnostic accuracy by 20% over the best fixed-strategy baseline",
    ],
    tags: ["Python", "Multi-Agent LLMs", "RAG", "Q-learning", "MedQA", "pytest"],
    github: "https://github.com/ZoeCreates/Agent_Trial_Design",
  },
  {
    name: "DIZA - Multilingual AI Crisis Voice Line",
    badge: "USC Dual Use Hackathon",
    image: "/images/projects/diza.png",
    summary:
      "A multilingual AI voice hotline that triages emergency calls from older adults and people with disabilities and escalates urgent cases to human responders. Includes a 911 operations dashboard and a senior-care building dashboard.",
    bullets: [
      "Built the hotline with 8 Retell AI voice agents and a FastAPI backend",
      "Designed a 3-layer triage pipeline (keyword rules → LLM classification → space-time DBSCAN clustering), validated with 40 golden test cases and prompt-injection checks",
      "Made backend write APIs idempotent to tolerate retries, implemented responder matching by skill and language, and built a React/MapLibre 3D live incident map",
    ],
    tags: ["FastAPI", "Retell AI", "React", "MapLibre", "DBSCAN", "Railway"],
    demo: "https://diza-production.up.railway.app/",
    github: "https://github.com/ZoeCreates/DIZA",
  },
  {
    name: "BiteBrief - Food Notification & Recommendation Platform",
    badge: "UCLA",
    image: "/images/projects/bitebrief.png",
    summary:
      "A dining notification and recommendation platform delivering real-time UCLA dining hall updates. Users set diets and allergies, favorite dishes, and get emailed when those dishes are served.",
    bullets: [
      "Designed a normalized MySQL schema and a Python (BeautifulSoup) ETL pipeline that scrapes menus by dining hall, meal period, and allergen/diet tags, loading data via deduplicated upserts; covered parsing and upsert logic with pytest unit tests",
      "Implemented automated email alerts and a personalized recommendation engine backed by complex SQL queries",
    ],
    tags: ["React", "REST APIs", "MySQL", "Python", "BeautifulSoup", "pytest", "Railway"],
    demo: "https://web-production-5951e.up.railway.app/",
    github: "https://github.com/ZoeCreates/Bite_brief",
  },
  {
    name: "Personal AI Agent Runtime",
    badge: "Password-protected demo",
    summary:
      "A personal AI agent runtime with persistent, session-aware memory, MCP-based tool integration, and multi-channel interaction (CLI, web UI, Telegram) to automate information retrieval, summarization, and communication workflows.",
    bullets: [
      "Developed 4 reusable workflow modules for information retrieval, content generation, summarization, and context-aware tool execution",
      "Fine-tuned an LLM on user-provided writing samples to match the user's vocabulary, tone, and phrasing when drafting emails and messages",
    ],
    tags: ["Python", "Flask", "MCP", "Anthropic / OpenAI APIs", "QLoRA", "Railway"],
    demo: "https://web-production-ffd16.up.railway.app/",
    github: "https://github.com/ZoeCreates/Personal-Agent-Project-",
  },
  {
    name: "Spotify Lite - Full-Stack Music Streaming App",
    summary:
      "A Spotify-inspired full-stack music app with a dark Material-UI interface for searching songs, liking tracks, and following artists, backed by a RESTful Node.js/Express API and MongoDB.",
    bullets: [
      "Song search by title, artist, genre, and language; like/unlike songs and follow/unfollow artists; editable user profiles and a personal liked-songs library",
      "Clean REST API with controllers, Mongoose models, and Jest + Supertest API tests; responsive React frontend",
    ],
    tags: ["React", "Material-UI", "Node.js", "Express", "MongoDB", "Jest", "Railway"],
    demo: "https://spotify-lite-web-production.up.railway.app/",
    github: "https://github.com/ZoeCreates/Spotify-Lite",
  },
];

const olderProjects = [
  {
    name: "Brallium - E-commerce Website",
    badge: "Creative Labs at UCLA",
    summary: "An e-commerce website built as part of Creative Labs at UCLA.",
    bullets: [
      "Handled backend development using Node.js, Express.js, and MongoDB",
      "Facilitated cross-functional collaboration with product and front-end teams",
    ],
    tags: ["Node.js", "Express", "MongoDB", "Vercel"],
    demo: "https://brallium-nine.vercel.app/shop",
    links: [{ label: "Static Site", href: "https://bellayu17.github.io/brallium/purchase.html" }],
  },
  {
    name: "BreakDiving - Non-profit Organization Platform",
    summary:
      "A comprehensive platform for a non-profit organization focused on personal development and community building.",
    bullets: [
      "Implemented user authentication, community features, and content management system",
      "Created responsive design ensuring accessibility across all devices",
    ],
    tags: ["Full-Stack", "Authentication", "CMS", "Responsive Design"],
    demo: "https://www.breakdiving.io/",
  },
  {
    name: "StarWise Education - Education Consulting Platform",
    summary:
      "A modern education consulting platform for high school students pursuing college admissions.",
    bullets: [
      "Implemented booking system for counseling sessions, resource management, and student progress tracking",
      "Integrated payment processing and automated scheduling functionalities for counseling services",
    ],
    tags: ["Full-Stack", "Payments", "Scheduling"],
    demo: "https://www.starwise-edu.com/",
  },
  {
    name: "Aeyesky - Casino Surveillance Software",
    summary:
      "The user interface for a sophisticated casino surveillance system.",
    bullets: [
      "Created intuitive dashboards and real-time monitoring interfaces with modern UI/UX principles",
      "Developed responsive and accessible design components for security personnel",
    ],
    tags: ["UI/UX", "Dashboards", "React"],
    demo: "https://aeyesky.com/",
  },
];

const moreLinks = [
  { label: "DeliverMore AI", href: "https://www.delivermore.ai/" },
  { label: "CoursePals AI", href: "https://www.coursepals.ai/" },
  { label: "Project Demo Video", href: "https://www.youtube.com/watch?v=MbrtaSYJpqA&t=148s" },
];

const skills = [
  { title: "Languages", Icon: MdCode, text: "Java, Python, JavaScript/TypeScript, SQL, C++, C" },
  { title: "CS Fundamentals", Icon: MdLightbulb, text: "Data Structures & Algorithms, OOP, API Design, Data Modeling, Unit Testing" },
  { title: "Backend & Data", Icon: BsLaptopFill, text: "Node.js, Express, FastAPI, Django, REST APIs, GraphQL, PostgreSQL, MySQL, MongoDB" },
  { title: "AI / ML", Icon: MdLightbulb, text: "LangChain, LangGraph, OpenAI & Anthropic APIs, MCP, Embeddings, Vector Search, RAG, NLP Pipelines" },
  { title: "Cloud & DevOps", Icon: BsLaptopFill, text: "Docker, AWS (S3, EC2), Firebase, Git, Linux, pytest, Jest, Railway, Vercel" },
  { title: "Frontend", Icon: MdCode, text: "React, Next.js, Redux, Tailwind CSS, Material UI, MapLibre, HTML/CSS" },
];

const renderProject = (p) => (
  <div className="card project-card" key={p.name}>
    {p.image && (
      <a
        className="project-thumb"
        href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
      </a>
    )}
    <div className="project-body">
      <h4>
        {p.name}
        {p.badge && <span className="project-badge">{p.badge}</span>}
      </h4>
      <p className="project-summary">{p.summary}</p>
      <ul>
        {p.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="tag-list">
        {p.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="project-actions">
        {p.demo && (
          <a
            className="btn-primary"
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        {p.github && (
          <a
            className="btn-secondary"
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {(p.links || []).map((l) => (
          <a
            className="btn-secondary"
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> {l.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

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
              A Software Engineer based in Los Angeles, currently pursuing an
              M.S. in Computer Science at USC. With experience in full-stack
              development, AI/ML, and a passion for creating innovative
              solutions that make a difference.
            </p>
            <p className="status-badge">
              <MdSchool /> Currently a student at USC · M.S. Computer Science
              (2026 – 2027)
            </p>
            <div className="cta-container">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
                onClick={() =>
                  (window.location.href =
                    `mailto:${EMAIL}?subject=Job Opportunity`)
                }
              />
              <button
                className="hire-me-btn"
                onClick={() =>
                  (window.location.href =
                    `mailto:${EMAIL}?subject=Job Opportunity`)
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
                  <h4>University of Southern California</h4>
                  <p className="date">Los Angeles, CA | Jan 2026 – Dec 2027 (Current Student)</p>
                  <p className="degree">Master of Science: Computer Science (General)</p>
                  <p className="coursework">
                    Relevant Coursework: CSCI 561 Foundations of Artificial
                    Intelligence, DSCI 552 Machine Learning, CSCI 570 Analysis of
                    Algorithms, CSCI 585 Database Systems.
                  </p>
                </div>
                <div className="card">
                  <h4>University of California - Los Angeles</h4>
                  <p className="date">Los Angeles, CA | 2021 – 2025</p>
                  <p className="degree">
                    Bachelor of Science: Computational Cognitive Science,
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
                {skills.map(({ title, Icon, text }) => (
                  <div className="card" key={title}>
                    <h4>
                      <Icon className="icon" /> {title}
                    </h4>
                    <p>{text}</p>
                  </div>
                ))}
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
              {experiences.map((exp) => (
                <div className="card" key={exp.title}>
                  <h4>
                    <BsBriefcaseFill className="icon" /> {exp.title}
                  </h4>
                  <p className="date">{exp.meta}</p>
                  {exp.bullets.length > 0 && (
                    <ul>
                      {exp.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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
                <MdCode className="section-icon" /> Featured Projects & Live Demos
              </h3>
              {projects.map(renderProject)}
              <h3 className="projects-subhead">
                <MdLightbulb className="section-icon" /> More Projects
              </h3>
              {olderProjects.map(renderProject)}
              <h3 className="projects-subhead">
                <MdLightbulb className="section-icon" /> More Links
              </h3>
              <div className="project-actions more-links">
                {moreLinks.map((l) => (
                  <a
                    className="btn-secondary"
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> {l.label}
                  </a>
                ))}
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
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </div>
              <div className="card contact-card">
                <FaEnvelope className="contact-icon" />
                <h4>Email</h4>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="card contact-card">
                <FaMapMarkerAlt className="contact-icon" />
                <h4>Location</h4>
                <p>1120 W 27th St, Los Angeles, CA 90007</p>
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
