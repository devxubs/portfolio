import { ArrowRight, GraduationCap, Mail, MapPin, User } from "lucide-react";

const info = [
  { icon: User, k: "Name", v: "Xubayer Ahmed" },
  { icon: Mail, k: "Email", v: "devxub@gmail.com" },
  { icon: MapPin, k: "Location", v: "Dhaka, Bangladesh" },
  { icon: GraduationCap, k: "Education", v: "HSC 2024 · Self-taught Developer" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-grid">
          <div>
            <p>
              I'm a self-taught Full-Stack Web Developer passionate about building modern web
              applications and solving practical problems through technology. I enjoy working
              across frontend and backend development — creating responsive interfaces,
              developing APIs, and building functional digital products.
            </p>
            <p>
              My main project is DevX POS, a complete point-of-sale and business management
              system I designed and built on my own. I focus on clean, maintainable code, and I
              am always eager to learn new technologies and solve challenging problems.
            </p>

            <ul className="info-list">
              {info.map((i) => (
                <li key={i.k}>
                  <span className="k">
                    <i.icon size={15} /> {i.k}:
                  </span>
                  <span className="v">{i.v}</span>
                </li>
              ))}
              <li>
                <span className="k">Freelance:</span>
                <span className="v" style={{ color: "var(--green-bright)", fontWeight: 600 }}>
                  Available
                </span>
              </li>
            </ul>

            <a className="btn btn-primary" href="#experience">
              My Experience <ArrowRight size={16} />
            </a>
          </div>

          <div className="about-code">
            <div className="code-head">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="code-file">about.ts</span>
            </div>
            <div className="code-body">
              <span className="tok-k">const</span> <span className="tok-v">developer</span>{" "}
              <span className="tok-p">=</span> {"{\n"}
              {"  "}name: <span className="tok-s">"Xubayer Ahmed"</span>,{"\n"}
              {"  "}role: <span className="tok-s">"Full Stack Developer"</span>,{"\n"}
              {"  "}skills: [<span className="tok-s">"React"</span>,{" "}
              <span className="tok-s">"Next.js"</span>, <span className="tok-s">"Node.js"</span>,
              {"\n"}
              {"           "}
              <span className="tok-s">"TypeScript"</span>,{" "}
              <span className="tok-s">"PostgreSQL"</span>],{"\n"}
              {"  "}passion: <span className="tok-s">"Building amazing web apps"</span>,{"\n"}
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
          </div>
        </div>
      </div>
    </section>
  );
}
