"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || motion.matches || !("IntersectionObserver" in window)) return;
    // SSR and the first viewport stay readable. Only upcoming sections are hidden.
    if (element.getBoundingClientRect().top > window.innerHeight * 0.95) element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.reveal = "visible";
        observer.disconnect();
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    const show = () => { if (motion.matches) { element.dataset.reveal = "visible"; observer.disconnect(); } };
    observer.observe(element);
    motion.addEventListener("change", show);
    return () => { observer.disconnect(); motion.removeEventListener("change", show); };
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
