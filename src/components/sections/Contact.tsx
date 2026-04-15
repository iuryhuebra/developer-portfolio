"use client";

import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";
import ScrollReveal from "@/components/ScrollReveal";
import { contactInfo } from "@/data/contact";
import { useLanguage } from "@/hooks/useLanguage";

export default function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow background */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent-primary), var(--accent-secondary))",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
        <ScrollReveal>
          <div className="mb-12">
            <p className="mb-2 font-mono text-sm text-accent-primary">
              {dict.contact.tag}
            </p>
            <h2 className="font-display text-4xl font-bold text-text-primary md:text-6xl mb-6">
              {dict.contact.title}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              {dict.contact.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
              aria-label="Email"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-subtle bg-bg-secondary transition-all duration-300 group-hover:border-accent-primary group-hover:shadow-glow-sm group-hover:text-accent-primary">
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono text-text-muted group-hover:text-text-primary">
                Email
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
              aria-label="LinkedIn"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-subtle bg-bg-secondary transition-all duration-300 group-hover:border-[#0077B5] group-hover:shadow-[0_0_20px_rgba(0,119,181,0.2)] group-hover:text-[#0077B5]">
                <TbBrandLinkedin size={32} />
              </div>
              <span className="text-xs font-mono text-text-muted group-hover:text-text-primary">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2"
              aria-label="GitHub"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border-subtle bg-bg-secondary transition-all duration-300 group-hover:border-text-primary group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:text-text-primary">
                <SiGithub size={28} />
              </div>
              <span className="text-xs font-mono text-text-muted group-hover:text-text-primary">
                GitHub
              </span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <footer className="mt-32 pt-8 border-t border-border-subtle">
            <p className="text-text-muted text-xs font-mono">
              © {new Date().getFullYear()} — {dict.contact.footer}
            </p>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
}
