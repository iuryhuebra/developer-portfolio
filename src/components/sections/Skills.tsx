"use client";

import ScrollReveal from "@/components/ScrollReveal";
import OrbitalSkills from "@/components/OrbitalSkills";
import SkillsGrid from "@/components/SkillsGrid";
import { useLanguage } from "@/hooks/useLanguage";

export default function Skills() {
  const { dict } = useLanguage();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm text-accent-primary">
              {dict.skills.tag}
            </p>
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              {dict.skills.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Desktop: Orbital */}
        <ScrollReveal className="hidden md:flex md:justify-center md:pb-20">
          <OrbitalSkills />
        </ScrollReveal>

        {/* Mobile: Grid */}
        <ScrollReveal className="md:hidden">
          <SkillsGrid />
        </ScrollReveal>
      </div>
    </section>
  );
}
