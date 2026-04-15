import { SupportedLanguage } from "@/i18n/dictionaries";

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export const getExperiences = (lang: SupportedLanguage): Experience[] => {
  if (lang === "en") {
    return [
      {
        period: "2025 - Present",
        role: "Software Developer",
        company: "Grupo Royal Supermercados",
        description:
          "Full-stack web development (React, Node, Fastify, PHP) and strategic reporting. Massive query creation, transcription, and modeling of multiple databases (SQL Server, MySQL, Oracle). As a strategic differential, I daily integrate native Artificial Intelligence workflows using Codex, Claude, and Antigravity, orchestrating AI engineering solutions to elevate productivity, scale services, and create complex agents/skills tailored to the company's ecosystem.",
      },
      {
        period: "2022 - 2025",
        role: "Planning Analyst",
        company: "Youtility Center do Brasil",
        description:
          "Led the sector's digital transformation through massive automation of rigid routines via scripts (VBA and Python using Selenium and Pandas). Built robust data pipelines (ETL) and deployed dashboards for real-time monitoring of KPIs (Grafana, Excel, SQL). My solutions represented drastic reductions in manual labor and a substantial increase in reliability for operational strategic decision-making.",
      },
    ];
  }

  return [
    {
      period: "2025 - Presente",
      role: "Programador",
      company: "Grupo Royal Supermercados",
      description:
        "Desenvolvimento de sistemas full-stack (React, Node, Fastify, PHP) e relatórios estratégicos. Criação massiva de consultas, transcrição e modelagem de múltiplos banco de dados (SQL Server, MySQL, Oracle). Como diferencial estratégico, integro diariamente workflows nativos de Inteligência Artificial usando Codex, Claude e Antigravity, orquestrando soluções de engenharia por IA para elevar a produtividade, escalar serviços e criar agentes/skills complexos adaptados ao ecossistema da empresa.",
    },
    {
      period: "2022 - 2025",
      role: "Analista de Planejamento",
      company: "Youtility Center do Brasil",
      description:
        "Liderança na transformação digital do setor através da automação massiva de rotinas engessadas via scripts (VBA e Python usando Selenium e Pandas). Construção de robustas pipelines de dados (ETL) e implantação de painéis para monitoria em tempo real de KPIs (Grafana, Excel, SQL). Minhas soluções representaram drásticas reduções de carga laboriosa e aumento substancial na confiabilidade na tomada de decisões estratégicas operacionais.",
    },
  ];
};
