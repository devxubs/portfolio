import { useState } from "react";
import { Code2, Database, MonitorSmartphone, Wrench } from "lucide-react";
import { skillCategories, skills, type SkillCategory } from "../data/skills";

const tabIcons: Record<SkillCategory, typeof Code2> = {
  Frontend: MonitorSmartphone,
  Backend: Code2,
  Database: Database,
  "Tools & Others": Wrench,
};

export default function Skills() {
  const [tab, setTab] = useState<SkillCategory>("Frontend");

  return (
    <section className="section" id="skills" style={{ paddingTop: 20 }}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">My Skills</span>
          <h2 className="section-title">Technologies I Use</h2>
        </div>

        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {skillCategories.map((c) => {
            const Icon = tabIcons[c];
            return (
              <button
                key={c}
                role="tab"
                aria-selected={tab === c}
                className={`tab-btn${tab === c ? " active" : ""}`}
                onClick={() => setTab(c)}
              >
                <Icon size={16} /> {c}
              </button>
            );
          })}
        </div>

        <div className="skills-grid">
          {skills[tab].map((s) => (
            <div className="skill-tile" key={s.name}>
              <s.icon style={{ color: s.color }} />
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
