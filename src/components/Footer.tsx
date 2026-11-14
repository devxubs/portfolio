import { Code2, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "API Development",
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="logo">
              <span className="logo-icon">
                <Code2 size={24} strokeWidth={2.4} />
              </span>
              dev<em>xub</em>
            </a>
            <p>
              Passionate Full Stack Developer building modern web applications with React,
              Next.js, Node.js and MySQL.
            </p>
            <div className="social-row footer-socials">
              <a href="https://github.com/devxubs" target="_blank" rel="noreferrer" aria-label="GitHub">
                <SiGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/devxubs/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a href="mailto:devxub@gmail.com" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <a href="mailto:devxub@gmail.com">devxub@gmail.com</a>
              </li>
              <li>
                <a href="tel:+8801325584606">+880 1325-584606</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={14} /> Dhaka, Bangladesh
              </li>
              <li>Open to remote &amp; full-time roles</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Xubayer Ahmed. All rights reserved.</span>
          <span>Built with React &amp; TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
