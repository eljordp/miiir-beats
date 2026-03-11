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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center gap-6">
        {/* Play/Pause */}
        <button
          onClick={onPlayPause}
          className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center flex-shrink-0 hover:bg-accent-dim transition-colors"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Beat info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">{beat.title}</p>
          <p className="text-xs text-foreground/40">
            {beat.bpm} BPM &middot; {beat.key}
          </p>
        </div>

        {/* Fake progress bar (demo) */}
        <div className="hidden sm:flex items-center gap-3 flex-1 max-w-md">
          <span className="text-xs text-foreground/40 tabular-nums">0:00</span>
          <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
            <div
              className={`h-full bg-accent rounded-full transition-all duration-1000 ${
                isPlaying ? "w-1/3" : "w-0"
              }`}
            />
          </div>
          <span className="text-xs text-foreground/40 tabular-nums">{beat.duration}</span>
        </div>

        {/* Tags */}
        <div className="hidden md:flex gap-2">
          {beat.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/70 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
