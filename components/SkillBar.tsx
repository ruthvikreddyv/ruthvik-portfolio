"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  level: number; // 0-100
}

export function SkillBar({ label, level }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="font-mono text-xs text-ink-faint">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${visible ? "is-visible" : ""}`}
          style={{ "--fill": `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
