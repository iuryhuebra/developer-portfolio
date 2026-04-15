import { SupportedLanguage } from "@/i18n/dictionaries";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const getProjects = (lang: SupportedLanguage): Project[] => {
  if (lang === "en") {
    return [
      {
        title: "Webhook Inspector",
        description:
          "Advanced platform for real-time webhook inspection and monitoring. Developed to facilitate debugging of external integrations, allowing detailed analysis of received payloads and headers.",
        technologies: ["React", "TanStack Router", "Node.js", "Fastify", "Zod", "Swagger API", "TypeScript"],
        githubUrl: "https://github.com/iuryhuebra/webhook-inspector",
      },
      {
        title: "Task Management",
        description:
          "Robust application for task management and productivity. Features an intuitive interface for organizing daily demands, prioritizing activities, and tracking progress.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
        githubUrl: "https://github.com/iuryhuebra/task-management-react",
      },
    ];
  }

  return [
    {
      title: "Webhook Inspector",
      description:
        "Plataforma avançada para inspeção e monitoramento de webhooks em tempo real. Desenvolvida para facilitar o debug de integrações externas, permitindo análise detalhada de payloads e headers recebidos.",
      technologies: ["React", "TanStack Router", "Node.js", "Fastify", "Zod", "Swagger API", "TypeScript"],
      githubUrl: "https://github.com/iuryhuebra/webhook-inspector",
    },
    {
      title: "Task Management",
      description:
        "Aplicação robusta para gestão de tarefas e produtividade. Conta com interface intuitiva para organização de demandas diárias, priorização de atividades e controle de progresso.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      githubUrl: "https://github.com/iuryhuebra/task-management-react",
    },
  ];
};
