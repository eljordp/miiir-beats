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

      <main className="min-h-screen">
        <Hero />

        {/* Beat Catalog */}
        <section id="beats" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Beat <span className="text-accent">Catalog</span>
                </h2>
                <p className="text-foreground/40 mt-2">
                  {filteredBeats.length} beats available
                </p>
              </div>

              {/* Tag filters */}
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
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

            {/* Beat grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
