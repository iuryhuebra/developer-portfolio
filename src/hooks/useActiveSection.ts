"use client";

import { useEffect, useState, useRef } from "react";

const SECTIONS = ["hero", "skills", "projects", "experience", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const entries = new Map<string, IntersectionObserverEntry>();

    observerRef.current = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          entries.set(entry.target.id, entry);
        });

        let maxRatio = 0;
        let mostVisible = "hero";

        entries.forEach((entry, id) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(mostVisible);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return activeSection;
}
