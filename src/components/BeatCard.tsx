"use client";

import { Beat } from "@/lib/beats";

interface BeatCardProps {
  beat: Beat;
  isPlaying: boolean;
  onPlay: () => void;
  onLicense: (beat: Beat) => void;
  index: number;
}

export default function BeatCard({ beat, isPlaying, onPlay, onLicense, index }: BeatCardProps) {
  return (
    <div
      className={`flex items-center gap-3 sm:gap-5 px-3 sm:px-5 py-3 sm:py-4 border-b border-border transition-colors animate-fade-up ${
        isPlaying ? "bg-surface-light" : "hover:bg-surface"
      }`}
      style={{ animationDelay: `${index * 0.045}s` }}
    >
      {/* Play button */}
      <button
        onClick={onPlay}
        className={`w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center transition-all active:scale-95 ${
          isPlaying
            ? "bg-accent text-background"
            : "border border-border text-muted hover:border-accent hover:text-accent"
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

      {/* BPM + Key — desktop only */}
      <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
        <span className="text-xs text-muted tabular-nums w-12 text-right">{beat.bpm} BPM</span>
        <span className="text-xs text-muted w-8">{beat.key}</span>
      </div>

      {/* Buy button */}
      <button
        onClick={() => onLicense(beat)}
        className="flex-shrink-0 px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-accent text-background hover:bg-accent-dim active:scale-95 transition-all"
      >
        <span className="hidden sm:inline">Buy — </span>${beat.pricing.basic}
      </button>
    </div>
  );
}
