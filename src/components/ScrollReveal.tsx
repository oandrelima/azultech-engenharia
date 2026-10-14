"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom";
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"ready" | "waiting" | "visible">("ready");

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    setState("waiting");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setState("visible"); observer.disconnect(); }
    }, { threshold: 0.06, rootMargin: "0px 0px -24px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} data-reveal={state} data-direction={direction}
    style={{ "--reveal-delay": `${Math.min(delay, 240)}ms` } as CSSProperties}
    className={`scroll-reveal ${className}`}>{children}</div>;
}
