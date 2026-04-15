"use client";

import { skills, getCategoryLabels, categoryColors, type Skill } from "@/data/skills";
import { useLanguage } from "@/hooks/useLanguage";

export default function SkillsGrid() {
  const { language } = useLanguage();
  const categoryLabels = getCategoryLabels(language);
  const categories = Object.keys(categoryLabels) as Skill["category"][];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const categorySkills = skills.filter((s) => s.category === category);
        const color = categoryColors[category];

        return (
          <div
            key={category}
            className="glow-hover rounded-xl border border-border-subtle bg-bg-secondary p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <h3 className="font-display text-sm font-semibold text-text-primary">
                {categoryLabels[category]}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200"
                  style={{
                    borderColor: `${color}30`,
                    color: color,
                    backgroundColor: `${color}08`,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
