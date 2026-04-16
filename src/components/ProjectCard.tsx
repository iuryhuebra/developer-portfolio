"use client";

import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { dict, language } = useLanguage();

  return (
    <div className="group relative grid items-center gap-8 md:grid-cols-2 md:gap-12">
      {/* Image container */}
      <div
        className={`relative overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-tertiary">
          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-[100%_100%] transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="relative font-mono text-lg text-text-muted">
              {project.title}
            </span>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className={index % 2 === 1 ? "md:order-1" : ""}>
        {/* Project number */}
        <span className="mb-3 inline-block font-mono text-xs text-accent-primary">
          {`// ${language === "pt" ? "Projeto" : "Project"} ${String(index + 1).padStart(2, "0")}`}
        </span>

        <h3 className="mb-4 font-display text-2xl font-bold text-text-primary md:text-3xl">
          {project.title}
        </h3>

        <p className="mb-6 leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-subtle bg-bg-tertiary/50 px-3 py-1 text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-4 py-2 text-sm font-medium text-text-primary transition-all duration-200 hover:border-border-hover hover:shadow-glow-sm"
            >
              <ExternalLink size={16} strokeWidth={1.5} />
              {dict.projects.demo}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              <GitBranch size={16} strokeWidth={1.5} />
              {dict.projects.repo}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
