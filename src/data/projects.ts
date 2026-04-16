import { SupportedLanguage } from "@/i18n/dictionaries";
import webhookInspectorImage from "../images/webhook-inspector.png";
import taskManagementImage from "../images/task-management.png";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string | StaticImageData;
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
      image: webhookInspectorImage,
      },
      {
        title: "Task Management",
        description:
          "Robust application for task management and productivity. Features an intuitive interface for organizing daily demands, prioritizing activities, and tracking progress.",
        technologies: ["React", "TypeScript", "Styled Components"],
        githubUrl: "https://github.com/iuryhuebra/task-management-react",
        image: taskManagementImage,
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
      image: webhookInspectorImage,
    },
    {
      title: "Task Management",
      description:
        "Aplicação robusta para gestão de tarefas e produtividade. Conta com interface intuitiva para organização de demandas diárias, priorização de atividades e controle de progresso.",
      technologies: ["React", "TypeScript", "Styled Components"],
      githubUrl: "https://github.com/iuryhuebra/task-management-react",
      image: taskManagementImage,
    },
  ];
};
