"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";

export default function Projects() {
  const { language, dict } = useLanguage();
  const projects = getProjects(language);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-2 font-mono text-sm text-accent-primary">
              {dict.projects.tag}
            </p>
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              {dict.projects.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
