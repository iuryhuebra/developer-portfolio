"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { getExperiences } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

export default function Experience() {
  const { language, dict } = useLanguage();
  const experiences = getExperiences(language);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm text-accent-primary">
              {dict.experience.tag}
            </p>
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              {dict.experience.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          <div className="relative border-l border-border-subtle pl-8 md:pl-12 ml-4 md:ml-0">
            {experiences.map((exp, index) => {
              const isFirst = index === 0;

              return (
                <ScrollReveal key={`${exp.company}-${exp.period}`} delay={index * 0.1}>
                  <div className="relative mb-12 last:mb-0">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[41px] md:-left-[57px] top-1.5 h-4 w-4 rounded-full border-2 ${
                        isFirst
                          ? "border-accent-primary bg-accent-primary shadow-glow-sm"
                          : "border-text-muted bg-bg-primary"
                      }`}
                    />

                    {/* Card container */}
                    <div
                      className={`glow-hover group relative rounded-2xl border bg-bg-secondary p-8 transition-colors duration-300 ${
                        isFirst ? "border-accent-primary/20" : "border-border-subtle hover:border-border-hover"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="mt-1 font-medium text-accent-secondary">
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className={`inline-block rounded-full px-3 py-1 font-mono text-xs border ${
                            isFirst
                              ? "border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                              : "border-border-subtle bg-bg-primary text-text-muted"
                          }`}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-base leading-relaxed text-text-secondary whitespace-pre-line">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
