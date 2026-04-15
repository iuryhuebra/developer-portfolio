"use client";

import { useState, useEffect, useCallback } from "react";

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  className = "",
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleTyping = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        // Word complete, pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      <span>{currentText}</span>
      <span
        className="ml-0.5 inline-block w-[3px] bg-accent-primary"
        style={{
          height: "1em",
          animation: "typewriter-blink 0.8s step-end infinite",
          verticalAlign: "text-bottom",
        }}
        aria-hidden="true"
      />
    </span>
  );
}
