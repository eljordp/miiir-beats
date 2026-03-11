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
    <div className="group bg-surface border border-border rounded-xl p-4 hover:border-accent/30 transition-all duration-300 hover:glow-accent">
      {/* Beat image / play area */}
      <div
        className="relative aspect-square rounded-lg bg-surface-light mb-4 overflow-hidden cursor-pointer"
        onClick={onPlay}
      >
        {/* Placeholder gradient for beat art */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface-light to-background" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              isPlaying
                ? "bg-accent text-background scale-100"
                : "bg-white/10 text-white scale-90 group-hover:scale-100"
            }`}
          >
            {isPlaying ? (
              <div className="flex gap-1 items-end h-5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-background rounded-full waveform-bar"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            ) : (
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

        {/* BPM badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-foreground/80">
          {beat.bpm} BPM
        </div>
      </div>

      {/* Beat info */}
      <h3 className="font-semibold text-foreground mb-1 truncate">{beat.title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-foreground/40">{beat.key}</span>
        <span className="text-xs text-foreground/20">&middot;</span>
        <span className="text-xs text-foreground/40">{beat.duration}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {beat.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/70 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Price + License button */}
      <div className="flex items-center justify-between">
        <span className="text-accent font-bold">${beat.pricing.basic}</span>
        <button
          onClick={() => onLicense(beat)}
          className="px-4 py-1.5 text-xs font-semibold bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-background transition-colors"
        >
          License
        </button>
      </div>
    </div>
  );
}
