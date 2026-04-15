"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getExperiences } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

export default function HorizontalTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const experiences = getExperiences(language);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border-subtle bg-bg-secondary p-2 text-text-muted transition-all duration-200 hover:border-border-hover hover:text-text-primary hover:shadow-glow-sm md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border-subtle bg-bg-secondary p-2 text-text-muted transition-all duration-200 hover:border-border-hover hover:text-text-primary hover:shadow-glow-sm md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {experiences.map((exp, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={`${exp.company}-${exp.period}`}
              className="relative flex-shrink-0 snap-center"
              style={{ width: "min(300px, 80vw)" }}
            >
              {/* Timeline dot and line */}
              <div className="mb-6 flex items-center">
                {/* Connecting line */}
                {index > 0 && (
                  <div className="h-px w-6 -ml-6 bg-border-subtle" />
                )}

                {/* Dot */}
                <div
                  className={`h-3 w-3 rounded-full border-2 ${
                    isFirst
                      ? "border-accent-primary bg-accent-primary shadow-glow-sm"
                      : "border-text-muted bg-bg-primary"
                  }`}
                />

                {/* Line after dot */}
                <div className="h-px flex-1 bg-border-subtle" />
              </div>

              {/* Card */}
              <div
                className={`glow-hover rounded-xl border bg-bg-secondary p-6 ${
                  isFirst
                    ? "border-accent-primary/20"
                    : "border-border-subtle"
                }`}
              >
                {/* Period */}
                <span
                  className={`mb-2 inline-block font-mono text-xs ${
                    isFirst ? "text-accent-primary" : "text-text-muted"
                  }`}
                >
                  {exp.period}
                </span>

                {/* Role */}
                <h3 className="mb-1 font-display text-lg font-semibold text-text-primary">
                  {exp.role}
                </h3>

                {/* Company */}
                <p className="mb-3 text-sm font-medium text-accent-secondary">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-secondary whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
