"use client";

import { useState, useEffect, useRef } from "react";

function useCounter(target: number, duration: number = 1800) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return count;
}

export default function Hero() {
  const artists = [
    "EBK Jaaybo", "Mike Sherm", "Babytron", "Jaymoney30", "Daboii",
    "SlimmyB", "Yhung To", "Fredo Bagz", "Zaybang", "Lil Bean", "Lil Yee",
  ];
  const credits = [...artists, ...artists];

  const streams = useCounter(107);
  const placements = useCounter(200);
  const views = useCounter(46);

  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex flex-col justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,45,45,0.04)_0%,_transparent_60%)]" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 px-5 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 animate-fade-in delay-100">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">Bay Area Producer</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Main title */}
        <h1 className="text-[4rem] sm:text-[8rem] lg:text-[10rem] font-bold tracking-[-0.05em] leading-[0.85] mb-4 sm:mb-6 animate-fade-up delay-200">
          <span className="text-accent">415miiir</span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-12 mb-10 sm:mb-14">
          <div className="max-w-md animate-fade-up delay-300">
            <p className="text-sm sm:text-base text-foreground/50 leading-relaxed mb-2">
              Producer. Songwriter. Artist.<br />
              107M+ streams. 200+ placements. 46M+ views — in 2025 alone.<br />
              Get the sound you need.
            </p>
            <p className="text-[10px] text-muted/40 leading-relaxed mb-6 italic">
              *Doesn&rsquo;t count the ones ripping YouTube beats because they can&rsquo;t afford them.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#beats"
                className="px-6 py-3 bg-accent text-background font-bold rounded-sm hover:bg-accent-dim active:scale-[0.98] transition-all text-sm uppercase tracking-wider text-center"
              >
                Browse Beats
              </a>
              <a
                href="#licensing"
                className="px-6 py-3 border border-border text-foreground/60 rounded-sm hover:bg-surface-light active:scale-[0.98] transition-all text-sm uppercase tracking-wider text-center"
              >
                Licensing
              </a>
            </div>
          </div>

          {/* Stats — animated counters, staggered */}
          <div className="flex sm:flex-col gap-6 sm:gap-4 sm:text-right">
            <div className="animate-fade-up delay-400">
              <p className="text-2xl sm:text-3xl font-bold text-accent tabular-nums">{streams}M+</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">Streams</p>
            </div>
            <div className="animate-fade-up delay-500">
              <p className="text-2xl sm:text-3xl font-bold tabular-nums">{placements}+</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">Placements</p>
            </div>
            <div className="animate-fade-up delay-600">
              <p className="text-2xl sm:text-3xl font-bold tabular-nums">{views}M+</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">Views</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling credits marquee */}
      <div className="relative z-10 border-t border-b border-border py-3 overflow-hidden animate-fade-in delay-700">
        <div className="flex animate-marquee whitespace-nowrap">
          {credits.map((name, i) => (
            <span key={i} className="text-xs text-muted uppercase tracking-[0.15em] mx-6 sm:mx-10 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-accent/50" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
