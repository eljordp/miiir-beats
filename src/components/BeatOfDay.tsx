"use client";

import { Beat, BOTD_DISCOUNT } from "@/lib/beats";

interface BeatOfDayProps {
  beat: Beat;
  isPlaying: boolean;
  onPlay: () => void;
  onLicense: (beat: Beat) => void;
}

export default function BeatOfDay({ beat, isPlaying, onPlay, onLicense }: BeatOfDayProps) {
  const discountedPrice = (beat.pricing.basic - BOTD_DISCOUNT).toFixed(2);

  return (
    <section className="px-4 sm:px-6 pt-10 sm:pt-16 pb-0">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">Beat of the Day</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-wider">
            ${BOTD_DISCOUNT} Off Today Only
          </span>
        </div>

        {/* Featured beat row */}
        <div className="flex items-center gap-3 sm:gap-5 px-3 sm:px-5 py-3 sm:py-4 border border-accent/30 bg-accent/[0.03] relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(255,45,45,0.06)_0%,_transparent_70%)] pointer-events-none" />

          {/* Play button */}
          <button
            onClick={onPlay}
            className={`w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center transition-all active:scale-95 ${
              isPlaying
                ? "bg-accent text-background"
                : "border border-accent/60 text-accent hover:bg-accent hover:text-background"
            }`}
          >
            {isPlaying ? (
              <div className="flex gap-[3px] items-end h-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-background rounded-full waveform-bar"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            ) : (
              <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Title */}
          <div className="flex-1 min-w-0">
            <p className={`text-xs sm:text-sm font-semibold truncate ${isPlaying ? "text-accent" : "text-foreground"}`}>
              {beat.title}
            </p>
            <div className="hidden xs:flex gap-2 mt-0.5">
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
              <span className="text-[10px] text-muted line-through tabular-nums">${beat.pricing.basic}</span>
            </div>
            <button
              onClick={() => onLicense(beat)}
              className="px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-accent text-background hover:bg-accent-dim active:scale-95 transition-all"
            >
              <span className="hidden sm:inline">Buy — </span>${discountedPrice}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
