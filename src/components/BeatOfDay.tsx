"use client";

import { Beat } from "@/lib/beats";
import { useInView } from "@/hooks/useInView";

interface BeatOfDayProps {
  beat: Beat;
  onLicense: (beat: Beat) => void;
}

export default function BeatOfDay({ beat, onLicense }: BeatOfDayProps) {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-4 sm:px-6 pt-10 sm:pt-16 pb-0"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`flex items-center gap-3 mb-5 sm:mb-6 ${inView ? "animate-fade-in delay-0" : "opacity-0"}`}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">Beat of the Day</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider">
            Monthly lease deal
          </span>
        </div>

        {/* Featured beat row */}
        <div className={`flex items-center gap-3 sm:gap-5 px-3 sm:px-5 py-3 sm:py-4 border border-accent/30 bg-accent/[0.03] relative overflow-hidden ${inView ? "animate-fade-up delay-100" : "opacity-0"}`}>
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(255,45,45,0.06)_0%,_transparent_70%)] pointer-events-none" />

          {/* Title */}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold truncate text-foreground">
              {beat.title}
            </p>
            <div className="flex gap-2 mt-0.5">
              {beat.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[9px] text-muted uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* BPM + Key — desktop */}
          <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
            <span className="text-xs text-muted tabular-nums w-12 text-right">{beat.bpm} BPM</span>
            <span className="text-xs text-muted w-8">{beat.key}</span>
          </div>

          {/* Pricing + Buy */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] text-muted">Lease</span>
            </div>
            <button
              onClick={() => onLicense(beat)}
              className="px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-accent text-background hover:bg-accent-dim active:scale-95 transition-all"
            >
              <span className="hidden sm:inline">Request — </span>${beat.pricing.basic}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
