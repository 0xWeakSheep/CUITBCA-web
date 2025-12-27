"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";

interface CyberpunkTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
}

export function CyberpunkText({
  text,
  className = "",
  typingSpeed = 60,
}: CyberpunkTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTypingComplete(false);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      {!isTypingComplete && (
        <span className="ml-1 w-0.5 h-5 bg-[#38bdf8] animate-pulse" />
      )}
    </span>
  );
}



