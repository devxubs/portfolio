import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projectFilters, projects, type ProjectCategory } from "../data/projects";

type Filter = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">Real-world applications and products I've built.</p>
        </div>

        <div className="skills-tabs" role="tablist" aria-label="Project categories">
          {projectFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`tab-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p) => (
            <article className="project-card" key={p.id}>
              <div className="project-preview">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} — application screenshot`} loading="lazy" />
                ) : (
                  <div className="preview-placeholder" aria-hidden="true">
                    <span className="mono">{p.initials}</span>
                    <span className="pt">{p.title}</span>
                  </div>
                )}
                <span className="status-badge">{p.liveUrl ? "Live" : "Completed"}</span>
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tech-tags">
                  {p.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.liveUrl && (
                    <a className="live" href={p.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a className="code" href={p.githubUrl} target="_blank" rel="noreferrer">
                    <SiGithub size={15} /> View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
