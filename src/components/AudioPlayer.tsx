"use client";

import { Beat } from "@/lib/beats";

interface AudioPlayerProps {
  beat: Beat | null;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export default function AudioPlayer({ beat, isPlaying, onPlayPause }: AudioPlayerProps) {
  if (!beat) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border safe-bottom">
      {/* Progress bar */}
      <div className="h-0.5 bg-border">
        <div
          className={`h-full bg-accent transition-all duration-1000 ${
            isPlaying ? "w-1/3" : "w-0"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center gap-3 sm:gap-6">
        {/* Play/Pause */}
        <button
          onClick={onPlayPause}
          className="w-9 h-9 sm:w-10 sm:h-10 bg-accent text-background flex items-center justify-center flex-shrink-0 hover:bg-accent-dim active:scale-95 transition-all"
        >
          {isPlaying ? (
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Beat info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-semibold truncate">{beat.title}</p>
          <p className="text-[10px] sm:text-xs text-muted">
            {beat.bpm} BPM &middot; {beat.key}
          </p>
        </div>

        {/* Desktop: timestamps */}
        <div className="hidden sm:flex items-center gap-3 text-xs text-muted tabular-nums">
          <span>0:00</span>
          <span>/</span>
          <span>{beat.duration}</span>
        </div>

        {/* Mobile: duration */}
        <span className="sm:hidden text-[10px] text-muted tabular-nums">{beat.duration}</span>

        {/* Tags — desktop only */}
        <div className="hidden md:flex gap-2">
          {beat.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[9px] text-muted uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
