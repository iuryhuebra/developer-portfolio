"use client";

import { ChevronDown } from "lucide-react";
import TypeWriter from "@/components/TypeWriter";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26, 26, 46, 0.4) 0%, rgba(10, 10, 15, 0) 70%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Greeting */}
          <p className="mb-4 font-mono text-sm tracking-widest text-accent-primary">
            {dict.hero.greeting}
          </p>

          {/* Name */}
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-text-primary md:text-7xl">
            Iury Huebra
          </h1>

          {/* TypeWriter subtitle */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-x-2 text-lg text-text-secondary md:text-2xl">
            <span className="font-sans">{dict.hero.iam}</span>
            <TypeWriter
              key={dict.hero.words.join("")} /* Remount so text changes on translate */
              words={dict.hero.words}
              className="font-mono font-medium text-accent-primary"
              typingSpeed={80}
              deletingSpeed={50}
            />
          </div>

          {/* CTA */}
          <motion.a
            href="#projects"
            className="border-gradient inline-flex items-center gap-2 rounded-full px-8 py-3 font-sans text-sm font-medium text-text-primary transition-shadow duration-300 hover:shadow-glow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {dict.hero.cta}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
