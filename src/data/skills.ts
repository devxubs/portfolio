import type { ComponentType, CSSProperties } from "react";
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { Globe } from "lucide-react";

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools & Others";

export interface Skill {
  name: string;
  icon: ComponentType<{ style?: CSSProperties; className?: string }>;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools & Others",
];

export const skills: Record<SkillCategory, Skill[]> = {
  Frontend: [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: "REST APIs", icon: Globe, color: "#00A76F" },
    { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
  ],
  Database: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ],
  "Tools & Others": [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "Prisma", icon: SiPrisma, color: "#5EEAD4" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Framer Motion", icon: SiFramer, color: "#FF0080" },
  ],
};
