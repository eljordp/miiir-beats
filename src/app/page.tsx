"use client";

import { useState } from "react";
import { Beat, beats } from "@/lib/beats";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeatCard from "@/components/BeatCard";
import AudioPlayer from "@/components/AudioPlayer";
import LicenseModal from "@/components/LicenseModal";
import LicensingInfo from "@/components/LicensingInfo";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentBeat, setCurrentBeat] = useState<Beat | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [licenseBeat, setLicenseBeat] = useState<Beat | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const allTags = ["All", ...Array.from(new Set(beats.flatMap((b) => b.tags)))];

  const filteredBeats =
    filter === "All" ? beats : beats.filter((b) => b.tags.includes(filter));

  const handlePlay = (beat: Beat) => {
    if (currentBeat?.id === beat.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentBeat(beat);
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Navbar />

      <main className={`min-h-screen ${currentBeat ? "pb-16 sm:pb-20" : ""}`}>
        <Hero />

        {/* Beat Catalog */}
        <section id="beats" className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-8 sm:mb-10">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                  Beat <span className="text-accent">Catalog</span>
                </h2>
                <p className="text-sm sm:text-base text-foreground/40 mt-1 sm:mt-2">
                  {filteredBeats.length} beats available
                </p>
              </div>

              {/* Tag filters — horizontal scroll on mobile */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-3 py-1.5 sm:py-1 text-xs rounded-full transition-colors flex-shrink-0 ${
                      filter === tag
                        ? "bg-accent text-background font-semibold"
                        : "bg-surface border border-border text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Beat grid — 2 cols on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {filteredBeats.map((beat) => (
                <BeatCard
                  key={beat.id}
                  beat={beat}
                  isPlaying={isPlaying && currentBeat?.id === beat.id}
                  onPlay={() => handlePlay(beat)}
                  onLicense={setLicenseBeat}
                />
              ))}
            </div>
          </div>
        </section>

        <LicensingInfo />
        <Footer />
      </main>

      {/* Audio Player */}
      <AudioPlayer
        beat={currentBeat}
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
      />

      {/* License Modal */}
      {licenseBeat && (
        <LicenseModal beat={licenseBeat} onClose={() => setLicenseBeat(null)} />
      )}
    </>
  );
}
