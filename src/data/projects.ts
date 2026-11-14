export type ProjectCategory = "Full-Stack" | "Frontend" | "Tools & Utilities";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  /** Path to a real screenshot, or null to render a styled placeholder preview. */
  image: string | null;
  /** Short monogram shown on the placeholder preview. */
  initials: string;
  githubUrl: string;
  /** Verified live deployment URL, or null when there is no verified live demo. */
  liveUrl: string | null;
  status: "Live" | "Completed";
  featured: boolean;
}

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Full-Stack",
  "Frontend",
  "Tools & Utilities",
];

export const projects: Project[] = [
  {
    id: "devx-pos",
    title: "DevX POS",
    description:
      "A point-of-sale and business management system for Bangladeshi shops — orders, inventory, customers, suppliers, purchases and reports, with BDT pricing, Cash / bKash / Nagad / Rocket payments, and role-based access for Admin, Manager and Cashier. My main project, designed and built end to end by me.",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "Material UI", "Prisma", "MySQL"],
    image: "/assets/devx-pos.png",
    initials: "DX",
    githubUrl: "https://github.com/devxubs/devx",
    liveUrl: null,
    status: "Completed",
    featured: true,
  },
  {
    id: "biztracker",
    title: "BizTracker",
    description:
      "A business expense and profit tracker built for two business partners — track sales, expenses, stock, investments and withdrawals, with profit calculated automatically on a clean dashboard.",
    category: "Full-Stack",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    image: null,
    initials: "BT",
    githubUrl: "https://github.com/devxubs/popTracker",
    liveUrl: "https://pop-tracker-seven.vercel.app",
    status: "Live",
    featured: true,
  },
  {
    id: "qr-toolkit",
    title: "QR Toolkit",
    description:
      "An all-in-one QR code platform — create, customize, scan, validate and manage QR codes. Everything runs locally inside the browser, so user data stays private.",
    category: "Tools & Utilities",
    technologies: ["React", "TypeScript", "Vite"],
    image: null,
    initials: "QR",
    githubUrl: "https://github.com/devxubs/qr-toolkit",
    liveUrl: null,
    status: "Completed",
    featured: true,
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management App",
    description:
      "A portfolio management web application with a React + TypeScript front end and an Express back-end API, presented through a clean and responsive interface.",
    category: "Full-Stack",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "Vite"],
    image: null,
    initials: "PM",
    githubUrl: "https://github.com/devxubs/portfolio-management",
    liveUrl: "https://portfolio-management-wheat-six.vercel.app",
    status: "Live",
    featured: false,
  },
  {
    id: "sijan-portfolio",
    title: "Video Editor Portfolio",
    description:
      "A portfolio website built for a client — video editor Ahsanull Sijan — to present his work, services and contact details in a fast, modern single-page site.",
    category: "Frontend",
    technologies: ["React", "TypeScript", "Vite"],
    image: null,
    initials: "SP",
    githubUrl: "https://github.com/devxubs/sijan-video-editor-portfolio",
    liveUrl: "https://sijan-video-editor.vercel.app",
    status: "Live",
    featured: false,
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    description:
      "This website — my personal portfolio. A responsive React + TypeScript site with a project showcase, skill categories and a working project filter, designed and built by me.",
    category: "Frontend",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    image: null,
    initials: "XA",
    githubUrl: "https://github.com/devxubs/portfolio",
    liveUrl: "https://devxub-3d-portfolio.vercel.app",
    status: "Live",
    featured: false,
  },
];
