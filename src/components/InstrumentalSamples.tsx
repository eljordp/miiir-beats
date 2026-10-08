"use client";

import Image from "next/image";
import { useSound } from "@/components/SoundSession";
import { instrumentals } from "@/lib/instrumentals";

export default function InstrumentalSamples() {
  const { activeId, playing, playTrack } = useSound();

  return <section className="shell instrumental-section" id="instrumentals" aria-labelledby="instrumental-heading">
    <div className="section-heading">
      <div><p className="eyebrow">INSTRUMENTAL SAMPLES</p><h2 className="section-title" id="instrumental-heading">Hear the production<span>.</span></h2></div>
      <a href="https://www.youtube.com/@415miiir" target="_blank" rel="noopener noreferrer" className="text-link">Miiir on YouTube ↗</a>
    </div>
    <p className="instrumental-description">Official instrumental uploads. Pick a track and press play.</p>
    <div className="instrumental-tracks">
      {instrumentals.map(sample => <button key={sample.id} onClick={() => playTrack(sample.id)} aria-label={`${activeId === sample.id && playing ? "Pause" : "Play"} ${sample.title} instrumental by ${sample.artist}`} aria-pressed={activeId === sample.id}  className="instrumental-track">
        <span className="instrumental-cover"><Image src={`https://i.ytimg.com/vi/${sample.id}/hqdefault.jpg`} alt="" fill sizes="64px" className="object-cover" /></span>
        <span className="instrumental-track-text"><span className="instrumental-title">{sample.title}</span><span className="instrumental-artist">{sample.artist}</span></span>
        <span className="instrumental-duration">{sample.duration}</span><span aria-hidden="true" className="instrumental-play">{activeId === sample.id && playing ? "Ⅱ" : "▷"}</span>
      </button>)}
    </div>
  </section>;
}
