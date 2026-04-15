"use client";

import { useMemo } from "react";
import { skills, categoryColors, getCategoryLabels, type Skill } from "@/data/skills";
import { useLanguage } from "@/hooks/useLanguage";

interface OrbitRing {
  category: Skill["category"];
  items: Skill[];
  radius: number;
  duration: number;
  color: string;
}

export default function OrbitalSkills() {
  const { language } = useLanguage();
  const categoryLabels = getCategoryLabels(language);

  const rings: OrbitRing[] = useMemo(() => {
    const frontend = skills.filter((s) => s.category === "frontend");
    const backend = skills.filter((s) => s.category === "backend");
    const tools = skills.filter((s) => s.category === "tools");

    return [
      {
        category: "frontend",
        items: frontend,
        radius: 120,
        duration: 40,
        color: categoryColors.frontend,
      },
      {
        category: "backend",
        items: backend,
        radius: 200,
        duration: 55,
        color: categoryColors.backend,
      },
      {
        category: "tools",
        items: tools,
        radius: 280,
        duration: 70,
        color: categoryColors.tools,
      },
    ];
  }, []);

  return (
    <div className="relative mx-auto flex items-center justify-center -mb-20" style={{ width: 620, height: 620 }}>
      {/* Center element */}
      <div className="absolute z-10 flex h-20 w-20 items-center justify-center rounded-full border border-border-subtle bg-bg-secondary shadow-glow-sm">
        <span className="font-mono text-xl text-accent-primary">{"</>"}</span>
      </div>

      {/* Orbit rings */}
      {rings.map((ring) => (
        <div key={ring.category} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Ring border */}
          <div
            className="absolute rounded-full border"
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              borderColor: `${ring.color}15`,
            }}
          />

          {/* Rotating container */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              animation: `orbit ${ring.duration}s linear infinite`,
            }}
          >
            {ring.items.map((skill, i) => {
              const angle = (360 / ring.items.length) * i;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * ring.radius;
              const y = Math.sin(rad) * ring.radius;

              return (
                <div
                  key={skill.name}
                  className="absolute pointer-events-auto"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(${x - 24}px, ${y - 24}px)`,
                    width: 48,
                    height: 48,
                  }}
                >
                  {/* Counter-rotation wrapper fixes tooltip position and upright icon */}
                  <div
                    className="group relative flex h-full w-full items-center justify-center"
                    style={{
                      animation: `orbit ${ring.duration}s linear infinite reverse`,
                    }}
                  >
                    {/* Icon Container */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-bg-secondary transition-all duration-300 shadow-sm cursor-pointer hover:scale-110"
                      style={{
                        borderColor: "var(--border-subtle)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = skill.color;
                        e.currentTarget.style.boxShadow = `0 0 15px ${skill.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <skill.icon 
                        size={22}
                        style={{ color: skill.color }} 
                      />
                    </div>

                    {/* Tooltip */}
                    <div
                      className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg-secondary border border-border-subtle px-3 py-1.5 text-xs font-medium text-text-primary opacity-0 shadow-xl transition-all duration-200 group-hover:-top-12 group-hover:opacity-100 z-50"
                    >
                      {skill.name}
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border-subtle bg-bg-secondary" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute -bottom-24 flex gap-8">
        {rings.map((ring, idx) => (
          <div key={ring.category} className="flex items-center gap-2">
            <div className="relative flex h-5 w-5 items-center justify-center">
              {/* Outer orbit (idx === 2) */}
              <div 
                className={`absolute h-5 w-5 rounded-full border ${idx === 2 ? 'border-solid' : 'border-dashed opacity-40'}`}
                style={{ 
                  borderColor: idx === 2 ? ring.color : 'var(--border-subtle)',
                  boxShadow: idx === 2 ? `0 0 8px ${ring.color}40` : 'none'
                }}
              />
              {/* Middle orbit (idx === 1) */}
              <div 
                className={`absolute w-3.5 h-3.5 rounded-full border ${idx === 1 ? 'border-solid' : 'border-dashed opacity-40'}`}
                style={{ 
                  borderColor: idx === 1 ? ring.color : 'var(--border-subtle)',
                  boxShadow: idx === 1 ? `0 0 8px ${ring.color}40` : 'none'
                }}
              />
              {/* Inner orbit (idx === 0) */}
              <div 
                className={`absolute h-2 w-2 rounded-full border ${idx === 0 ? 'border-solid' : 'border-dashed opacity-40'}`}
                style={{ 
                  borderColor: idx === 0 ? ring.color : 'var(--border-subtle)',
                  boxShadow: idx === 0 ? `0 0 8px ${ring.color}40` : 'none'
                }}
              />
            </div>
            <span className="text-sm font-medium text-text-secondary">
              {categoryLabels[ring.category]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
