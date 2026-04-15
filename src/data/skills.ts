import { SupportedLanguage } from "@/i18n/dictionaries";

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
  icon: IconType;
  color: string;
}

import { 
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiNodedotjs, SiDotnet, 
  SiGit, SiGithub, SiPostgresql, SiNextdotjs, SiReactrouter, SiFastify, 
  SiPrisma, SiDrizzle, SiMysql, SiAnthropic, SiOpenai, SiGrafana, SiN8N
} from "react-icons/si";
import { TbApi, TbDatabase, TbBrandCSharp, TbRoute, TbBrandPhp } from "react-icons/tb";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", category: "frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React Router", category: "frontend", icon: SiReactrouter, color: "#CA4245" },
  { name: "TanStack Router", category: "frontend", icon: TbRoute, color: "#FF4154" },
  { name: "HTML/CSS", category: "frontend", icon: SiHtml5, color: "#E34F26" },

  // Backend & Databases
  { name: "Node.js", category: "backend", icon: SiNodedotjs, color: "#339933" },
  { name: "C#", category: "backend", icon: TbBrandCSharp, color: "#239120" },
  { name: ".NET", category: "backend", icon: SiDotnet, color: "#512BD4" },
  { name: "Fastify", category: "backend", icon: SiFastify, color: "#FFFFFF" },
  { name: "Prisma", category: "backend", icon: SiPrisma, color: "#2D3748" },
  { name: "Drizzle", category: "backend", icon: SiDrizzle, color: "#C5F74F" },
  { name: "MySQL", category: "backend", icon: SiMysql, color: "#4479A1" },
  { name: "PHP", category: "backend", icon: TbBrandPhp, color: "#777BB4" },
  { name: "SQL Server", category: "backend", icon: TbDatabase, color: "#CC2927" },
  { name: "Oracle", category: "backend", icon: TbDatabase, color: "#F80000" },
  { name: "Entity Framework", category: "backend", icon: TbDatabase, color: "#512BD4" },
  { name: "REST APIs", category: "backend", icon: TbApi, color: "#00A3E0" },

  // Tools & Others
  { name: "Git", category: "tools", icon: SiGit, color: "#F05032" },
  { name: "GitHub", category: "tools", icon: SiGithub, color: "#FFFFFF" },
  { name: "Claude Code", category: "tools", icon: SiAnthropic, color: "#D97757" },
  { name: "Codex", category: "tools", icon: SiOpenai, color: "#412991" },
  { name: "Grafana", category: "tools", icon: SiGrafana, color: "#F46800" },
  { name: "n8n", category: "tools", icon: SiN8N, color: "#FF6D5A" },
  { name: "PostgreSQL", category: "tools", icon: SiPostgresql, color: "#4169E1" },
];

export const getCategoryLabels = (lang: SupportedLanguage): Record<Skill["category"], string> => {
  if (lang === "en") {
    return {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    };
  }
  return {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Ferramentas",
  };
};

export const categoryColors: Record<Skill["category"], string> = {
  frontend: "#00f0ff",
  backend: "#7c3aed",
  tools: "#22c55e",
};
