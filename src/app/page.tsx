"use client";

import { useState } from "react";
import { Beat, beats, getBeatOfDay, BOTD_DISCOUNT } from "@/lib/beats";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeatOfDay from "@/components/BeatOfDay";
import BeatCard from "@/components/BeatCard";
import AudioPlayer from "@/components/AudioPlayer";
import LicenseModal from "@/components/LicenseModal";
import LicensingInfo from "@/components/LicensingInfo";
import PopularBeats from "@/components/PopularBeats";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentBeat, setCurrentBeat] = useState<Beat | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [licenseBeat, setLicenseBeat] = useState<Beat | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const beatOfDay = getBeatOfDay();
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

  const handleLicense = (beat: Beat) => {
    setLicenseBeat(beat);
  };

  return (
    <>
      <Navbar />

      <main className={`min-h-screen ${currentBeat ? "pb-16 sm:pb-20" : ""}`}>
        <Hero />

        {/* Most Popular */}
        <PopularBeats />

        {/* Beat of the Day */}
        <BeatOfDay
          beat={beatOfDay}
          isPlaying={isPlaying && currentBeat?.id === beatOfDay.id}
          onPlay={() => handlePlay(beatOfDay)}
          onLicense={handleLicense}
        />

        {/* Beat Catalog */}
        <section id="beats" className="py-10 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">Catalog</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] sm:text-xs text-muted">{filteredBeats.length} beats</span>
            </div>

            <div className="flex flex-col gap-4 mb-8 sm:mb-10">
              {/* Tag filters */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-3 py-1.5 sm:py-1 text-[10px] sm:text-xs uppercase tracking-wider transition-colors flex-shrink-0 ${
                      filter === tag
                        ? "bg-accent text-background font-bold"
                        : "bg-surface border border-border text-muted hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Beat list — key on filter so stagger animation reruns on category change */}
            <div key={filter} className="border-t border-border">
              {filteredBeats.map((beat, i) => (
                <BeatCard
                  key={beat.id}
                  beat={beat}
                  index={i}
                  isPlaying={isPlaying && currentBeat?.id === beat.id}
                  onPlay={() => handlePlay(beat)}
                  onLicense={handleLicense}
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
        <LicenseModal
          beat={licenseBeat}
          isBeatOfDay={licenseBeat.id === beatOfDay.id}
          discount={BOTD_DISCOUNT}
          onClose={() => setLicenseBeat(null)}
        />
      )}
    </>
  );
}
