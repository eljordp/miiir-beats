"use client";

import { useInView } from "@/hooks/useInView";

const videos = [
  { id: "Gld77nmF7Xs" },
  { id: "CEFfJUJmGzU" },
];

export default function PopularBeats() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-4 sm:px-6 py-16 sm:py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`flex items-center gap-3 mb-8 sm:mb-12 ${inView ? "animate-fade-in delay-0" : "opacity-0"}`}>
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">Most Popular</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {videos.map(({ id }, i) => (
            <div
              key={id}
              className={`relative w-full overflow-hidden border border-border bg-surface ${
                inView ? `animate-fade-up ${i === 0 ? "delay-100" : "delay-200"}` : "opacity-0"
              }`}
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                  title={`415miiir — YouTube video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
