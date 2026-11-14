const items = [
  {
    period: "2025 — Present",
    title: "Developer — Independent Project",
    org: "DevX POS",
    text: "Designed and built DevX POS, a complete point-of-sale and business management system (Next.js, TypeScript, Prisma, MySQL) with inventory, orders, reporting and role-based access — handled everything from database design to UI on my own.",
  },
  {
    period: "Ongoing",
    title: "Co-founder & Developer",
    org: "JNX — Software Agency",
    text: "Co-running a small software agency with a friend, building websites and web applications and working toward serving international clients.",
  },
  {
    period: "2022 — 2023",
    title: "Web Development Projects",
    org: "Freelance",
    text: "Built interactive and user-friendly web interfaces with JavaScript, TypeScript and modern frameworks, improving website performance and responsiveness.",
  },
  {
    period: "2021 — 2022",
    title: "Front-End Web Developer",
    org: "Freelance",
    text: "Created responsive and mobile-friendly layouts, converted UI designs into functional web pages, and improved user experience and usability for client projects.",
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          {items.map((i) => (
            <div className="timeline-item" key={i.title + i.period}>
              <span className="timeline-period">{i.period}</span>
              <h3>{i.title}</h3>
              <div className="timeline-org">{i.org}</div>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
