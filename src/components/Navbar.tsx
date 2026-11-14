import { useEffect, useState } from "react";
import { Code2, Download, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="DevXub home">
          <span className="logo-icon">
            <Code2 size={26} strokeWidth={2.4} />
          </span>
          dev<em>xub</em>
        </a>

        <nav aria-label="Primary">
          <ul className={`nav-links${open ? " open" : ""}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.href.slice(1) ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary btn-sm nav-cv" href="/Xubayer_Ahmed_CV.pdf" download>
            <Download size={16} /> Download CV
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
