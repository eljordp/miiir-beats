"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function bannerSource() {
  return window.matchMedia("(max-width: 700px)").matches
    ? "/media/ten-summers-youtube-mobile.mp4"
    : "/media/ten-summers-youtube-loop.mp4";
}

export default function VideoBanner() {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing,setPlaying] = useState(false);
  const [loaded,setLoaded] = useState(false);
  useEffect(()=>{
    const video=ref.current;
    if(!video)return;
    const motion=window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;
    let visible=false;
    const update=()=>{
      if(!visible||document.hidden||userPaused.current||motion.matches||connection?.saveData){video.pause();return;}
      if(!video.getAttribute("src")){video.src=bannerSource();video.load();}
      void video.play().catch(()=>{});
    };
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update();},{threshold:0.15});
    observer.observe(video);
    document.addEventListener("visibilitychange",update);
    motion.addEventListener("change",update);
    return ()=>{observer.disconnect();video.pause();document.removeEventListener("visibilitychange",update);motion.removeEventListener("change",update);};
  },[]);
  function toggle(){const video=ref.current;if(!video)return;if(playing){userPaused.current=true;video.pause();}else{userPaused.current=false;if(!video.getAttribute("src")){video.src=bannerSource();video.load();}void video.play().catch(()=>{});}}
  return <section className="video-banner" aria-label="10 Summers music video banner"><div className="video-banner-media"><Image unoptimized src="/media/ten-summers-youtube-poster-original.jpg" alt="Scene from the official Ten Summers music video" fill sizes="100vw" className="object-cover" /><video ref={ref} muted loop playsInline preload="none" aria-hidden="true" disablePictureInPicture onLoadedData={()=>setLoaded(true)} onPlaying={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>setLoaded(false)} style={{opacity:loaded?1:0}} /><div className="video-banner-shade" /><div className="shell video-banner-caption"><div><p className="eyebrow">SOB × RBE / PRODUCTION BY MIIIR + EVERYBODYBLEEDMUSIC</p><h2>10 SUMMERS<span>.</span></h2><a href="https://www.youtube.com/watch?v=oo1GBW9xoUU" target="_blank" rel="noopener noreferrer" className="text-link">Watch on YouTube ↗</a></div><button onClick={toggle} className="motion-control" aria-label={playing?"Pause video banner":"Play video banner"}>{playing?"Ⅱ PAUSE":"▷ PLAY"}</button></div></div></section>;
}
