"use client";

import {
  Home,
  Cpu,
  FolderKanban,
  Briefcase,
  Send,
  GitBranch,
  CircleUserIcon,
  Globe,
} from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/hooks/useLanguage";

const SOCIAL_LINKS = [
  { href: "https://github.com/iuryhuebra", icon: GitBranch, label: "GitHub" },
  { href: "https://linkedin.com/in/iuryhuebra", icon: CircleUserIcon, label: "LinkedIn" },
];

export default function Sidebar() {
  const activeSection = useActiveSection();
  const { dict, language, toggleLanguage } = useLanguage();

  const NAV_ITEMS = [
    { id: "hero", label: dict.sidebar.home, icon: Home },
    { id: "skills", label: dict.sidebar.skills, icon: Cpu },
    { id: "projects", label: dict.sidebar.projects, icon: FolderKanban },
    { id: "experience", label: dict.sidebar.experience, icon: Briefcase },
    { id: "contact", label: dict.sidebar.contact, icon: Send },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-50 hidden h-dvh w-16 flex-col items-center justify-between border-r border-border-subtle bg-bg-primary/80 py-8 backdrop-blur-xl md:flex">
        {/* Nav items */}
        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex items-center justify-center"
                aria-label={item.label}
              >
                {/* Active indicator */}
                <span
                  className={`absolute -left-[21px] h-6 w-0.5 rounded-r-full transition-all duration-300 ${
                    isActive
                      ? "bg-accent-primary opacity-100 shadow-glow-sm"
                      : "bg-transparent opacity-0"
                  }`}
                />

                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-accent-primary/10 text-accent-primary"
                      : "text-text-muted hover:bg-bg-tertiary hover:text-text-primary"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </span>

                {/* Tooltip */}
                <span className="pointer-events-none absolute left-14 whitespace-nowrap rounded-md bg-bg-secondary px-3 py-1.5 font-sans text-xs text-text-primary opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Social links & Language Toggle */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:text-accent-primary"
            aria-label="Trocar idioma"
          >
            <Globe size={18} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-primary text-[8px] font-bold text-bg-primary">
              {language.toUpperCase()}
            </span>
            <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md bg-bg-secondary px-3 py-1.5 font-sans text-xs text-text-primary opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {language === "pt" ? "English" : "Português"}
            </span>
          </button>

          <div className="my-2 h-px w-8 bg-border-subtle" />

          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:text-accent-primary"
                aria-label={link.label}
              >
                <Icon size={18} strokeWidth={1.5} />
                <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md bg-bg-secondary px-3 py-1.5 font-sans text-xs text-text-primary opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </aside>

      {/* Mobile Header / Language Switcher */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={toggleLanguage}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-bg-primary/80 text-text-muted shadow-sm backdrop-blur-xl transition-all active:scale-95"
          aria-label="Trocar idioma"
        >
          <Globe size={18} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-0 flex h-4 w-4 items-center justify-center rounded-full border border-bg-primary bg-accent-primary text-[8px] font-bold text-bg-primary">
            {language.toUpperCase()}
          </span>
        </button>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border-subtle bg-bg-primary/90 px-2 py-2 backdrop-blur-xl md:hidden">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 transition-colors duration-200 ${
                isActive
                  ? "text-accent-primary"
                  : "text-text-muted"
              }`}
              aria-label={item.label}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
