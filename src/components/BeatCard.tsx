"use client";

import { Beat } from "@/lib/beats";

interface BeatCardProps {
  beat: Beat;
  isPlaying: boolean;
  onPlay: () => void;
  onLicense: (beat: Beat) => void;
}

const gradients = [
  "from-accent/20 via-surface to-background",
  "from-purple-900/30 via-surface to-background",
  "from-red-900/20 via-surface to-background",
  "from-blue-900/20 via-surface to-background",
  "from-amber-900/20 via-surface to-background",
  "from-emerald-900/20 via-surface to-background",
  "from-pink-900/20 via-surface to-background",
  "from-cyan-900/20 via-surface to-background",
];

export default function BeatCard({ beat, isPlaying, onPlay, onLicense }: BeatCardProps) {
  const gradientIdx = (parseInt(beat.id) - 1) % gradients.length;

  return (
    <div className="group bg-surface border border-border rounded-sm overflow-hidden hover:border-accent/20 transition-all duration-300 active:scale-[0.98] sm:active:scale-100">
      {/* Beat image / play area */}
      <div
        className="relative aspect-square bg-surface-light cursor-pointer overflow-hidden"
        onClick={onPlay}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[gradientIdx]}`} />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 sm:bg-black/0 sm:group-hover:bg-black/30 transition-colors">
          <div
            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${
              isPlaying
                ? "bg-accent text-background scale-100"
                : "bg-white/15 text-white scale-100 sm:scale-90 sm:group-hover:scale-100"
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

        {/* BPM + Key badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1">
          <span className="px-1.5 py-0.5 bg-black/70 text-[9px] sm:text-[10px] text-foreground/70 uppercase tracking-wider">
            {beat.bpm}
          </span>
          <span className="px-1.5 py-0.5 bg-black/70 text-[9px] sm:text-[10px] text-foreground/70 uppercase tracking-wider">
            {beat.key}
          </span>
        </div>
      </div>

      {/* Beat info */}
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1 truncate">{beat.title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {beat.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[8px] sm:text-[9px] text-muted uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + License button */}
        <div className="flex items-center justify-between">
          <span className="text-accent font-bold text-xs sm:text-sm">${beat.pricing.basic}+</span>
          <button
            onClick={() => onLicense(beat)}
            className="px-3 py-1.5 text-[9px] sm:text-[10px] font-bold bg-accent/10 text-accent uppercase tracking-wider hover:bg-accent hover:text-background active:bg-accent active:text-background transition-colors"
          >
            License
          </button>
        </div>
      </div>
    </div>
  );
}
