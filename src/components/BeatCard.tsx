"use client";

import { Beat } from "@/lib/beats";

interface BeatCardProps {
  beat: Beat;
  isPlaying: boolean;
  onPlay: () => void;
  onLicense: (beat: Beat) => void;
}

export default function BeatCard({ beat, isPlaying, onPlay, onLicense }: BeatCardProps) {
  return (
    <div className="group bg-surface border border-border rounded-xl p-3 sm:p-4 hover:border-accent/30 transition-all duration-300 active:scale-[0.98] sm:active:scale-100 sm:hover:glow-accent">
      {/* Beat image / play area */}
      <div
        className="relative aspect-square rounded-lg bg-surface-light mb-3 sm:mb-4 overflow-hidden cursor-pointer"
        onClick={onPlay}
      >
        {/* Placeholder gradient for beat art */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface-light to-background" />

        {/* Play button overlay — always visible on mobile */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 sm:bg-black/0 sm:group-hover:bg-black/30 transition-colors">
          <div
            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${
              isPlaying
                ? "bg-accent text-background scale-100"
                : "bg-white/20 sm:bg-white/10 text-white scale-100 sm:scale-90 sm:group-hover:scale-100"
            }`}
          >
            {isPlaying ? (
              <div className="flex gap-1 items-end h-4 sm:h-5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-background rounded-full waveform-bar"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

        {/* BPM badge */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] sm:text-xs text-foreground/80">
          {beat.bpm} BPM
        </div>
      </div>

      {/* Beat info */}
      <h3 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1 truncate">{beat.title}</h3>
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <span className="text-[10px] sm:text-xs text-foreground/40">{beat.key}</span>
        <span className="text-[10px] sm:text-xs text-foreground/20">&middot;</span>
        <span className="text-[10px] sm:text-xs text-foreground/40">{beat.duration}</span>
      </div>

      {/* Tags — hide on very small cards */}
      <div className="hidden xs:flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
        {beat.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-accent/10 text-accent/70 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Price + License button */}
      <div className="flex items-center justify-between">
        <span className="text-accent font-bold text-sm sm:text-base">${beat.pricing.basic}</span>
        <button
          onClick={() => onLicense(beat)}
          className="px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-background active:bg-accent active:text-background transition-colors"
        >
          License
        </button>
      </div>
    </div>
  );
}
