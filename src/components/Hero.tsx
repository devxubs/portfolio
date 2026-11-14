import { ArrowRight, Briefcase, FolderGit2, Layers, Mail, Wrench } from "lucide-react";
import { SiGithub, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const stats = [
  { icon: FolderGit2, value: "6", label: "Completed Projects" },
  { icon: Layers, value: "12", label: "GitHub Repositories" },
  { icon: Wrench, value: "20+", label: "Technologies & Tools" },
  { icon: Briefcase, value: "2021", label: "Freelancing Since" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="hero-hello">👋 Hello, I'm</span>
            <h1>
              Xubayer <span className="green">Ahmed</span>
            </h1>
            <p className="hero-role">
              Full Stack Web <span className="green">Developer</span>
            </p>
            <p className="hero-tagline">
              I build modern, responsive, and scalable web applications with a strong focus on
              performance, functionality, and user experience.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#projects">
                View My Work <ArrowRight size={17} />
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Me <Mail size={16} />
              </a>
            </div>
            <div className="hero-socials">
              <span>Connect with me</span>
              <div className="social-row">
                <a href="https://github.com/devxubs" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <SiGithub size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/devxubs/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={15} />
                </a>
                <a href="mailto:devxub@gmail.com" aria-label="Email">
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          <div className="code-window" aria-hidden="true">
            <div className="code-head">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="code-file">developer.ts</span>
            </div>
            <div className="code-body">
              <span className="tok-k">const</span> <span className="tok-v">developer</span>{" "}
              <span className="tok-p">=</span> {"{\n"}
              {"  "}name: <span className="tok-s">"Xubayer Ahmed"</span>,{"\n"}
              {"  "}role: <span className="tok-s">"Full-Stack Web Developer"</span>,{"\n"}
              {"  "}stack: [<span className="tok-s">"React"</span>,{" "}
              <span className="tok-s">"Next.js"</span>, <span className="tok-s">"Node.js"</span>,
              {"\n"}
              {"          "}
              <span className="tok-s">"TypeScript"</span>, <span className="tok-s">"MySQL"</span>],
              {"\n"}
              {"  "}focus: <span className="tok-s">"Clean, scalable web apps"</span>,{"\n"}
              {"  "}available: <span className="tok-n">true</span>
              {"\n"}
              {"};"}
              {"\n\n"}
              <span className="tok-k">function</span> <span className="tok-f">hireMe</span>() {"{\n"}
              {"  "}
              <span className="tok-k">return</span>{" "}
              <span className="tok-s">"Let's build something amazing!"</span>;{"\n"}
              {"}"}
            </div>
            <span className="float-badge fb-1">
              <SiReact color="#61DAFB" /> React
            </span>
            <span className="float-badge fb-2">
              <SiNextdotjs /> Next.js
            </span>
            <span className="float-badge fb-3">
              <SiTypescript color="#3178C6" /> TypeScript
            </span>
          </div>
        </div>

        <div className="stats-bar">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-icon">
                <s.icon size={20} />
              </span>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
