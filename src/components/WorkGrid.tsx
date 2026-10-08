"use client";

import Image from "next/image";
import { useState } from "react";
import { useSound } from "@/components/SoundSession";
import Reveal from "@/components/Reveal";

export default function WorkGrid({ embed = false }: { embed?: boolean }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { pauseMusic, playing } = useSound();
  function selectVideo(id: string) { pauseMusic(); setActiveVideo(id); }
  return <div className="work-grid">
    <Reveal className="work-card">
      {embed && !playing && activeVideo === "CEFfJUJmGzU" ? <iframe src="https://www.youtube.com/embed/CEFfJUJmGzU?autoplay=1&rel=0&playsinline=1" title="FREDOBAGZ, Chai Benjii and Lul Freeze — Score Again" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="work-video" /> : embed ? <button className="work-image-link" onClick={() => selectVideo("CEFfJUJmGzU")} aria-label="Play Score Again music video"><Image src="https://i.ytimg.com/vi/CEFfJUJmGzU/hqdefault.jpg" alt="" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /><span className="play-circle" aria-hidden="true">▷</span></button> : <a href="https://www.youtube.com/watch?v=CEFfJUJmGzU" target="_blank" rel="noopener noreferrer" className="work-image-link"><Image src="https://i.ytimg.com/vi/CEFfJUJmGzU/hqdefault.jpg" alt="Score Again music video artwork" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /><span className="play-circle" aria-hidden="true">▷</span><span className="sr-only">Watch Score Again on YouTube</span></a>}
      <div className="work-caption"><div><p className="eyebrow">MUSIC VIDEO / SELECTED WORK</p><h3>Score Again</h3><p>FREDOBAGZ · Chai Benjii · Lul Freeze</p></div><a href="https://www.youtube.com/watch?v=CEFfJUJmGzU" target="_blank" rel="noopener noreferrer" aria-label="Watch Score Again" className="circle-link">↗</a></div>
    </Reveal>
    <Reveal delay={100} className="work-card">
      {embed && !playing && activeVideo === "oo1GBW9xoUU" ? <iframe src="https://www.youtube.com/embed/oo1GBW9xoUU?autoplay=1&rel=0&playsinline=1" title="SOB X RBE — Ten Summers (Official Video)" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="work-video" /> : embed ? <button className="work-image-link" onClick={() => selectVideo("oo1GBW9xoUU")} aria-label="Play Ten Summers music video"><Image src="/media/ten-summers-youtube-poster.webp" alt="" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /><span className="play-circle" aria-hidden="true">▷</span></button> : <a href="https://www.youtube.com/watch?v=oo1GBW9xoUU" target="_blank" rel="noopener noreferrer" className="work-image-link"><Image src="/media/ten-summers-youtube-poster.webp" alt="Scene from the official Ten Summers music video" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /><span className="play-circle" aria-hidden="true">▷</span><span className="sr-only">Watch 10 Summers on YouTube</span></a>}
      <div className="work-caption"><div><p className="eyebrow">OFFICIAL MUSIC VIDEO</p><h3>10 Summers</h3><p>SOB x RBE · with @everybodybleedmusic</p></div><a href="https://www.youtube.com/watch?v=oo1GBW9xoUU" target="_blank" rel="noopener noreferrer" aria-label="Watch 10 Summers" className="circle-link">↗</a></div>
    </Reveal>
  </div>;
}
