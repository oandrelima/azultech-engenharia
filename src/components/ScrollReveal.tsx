"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransformClass = () => {
    if (visible) return "opacity-100 translate-x-0 translate-y-0 scale-100";
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-10 scale-[0.98]";
      case "left":
        return "opacity-0 -translate-x-10";
      case "right":
        return "opacity-0 translate-x-10";
      case "zoom":
        return "opacity-0 scale-90";
      default:
        return "opacity-0 translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform-gpu ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
