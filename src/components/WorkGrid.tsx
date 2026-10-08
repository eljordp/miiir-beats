import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function WorkGrid({ embed = false }: { embed?: boolean }) {
  return <div className="work-grid">
    <Reveal className="work-card">
      {embed ? <iframe src="https://www.youtube.com/embed/CEFfJUJmGzU?rel=0" title="FREDOBAGZ, Chai Benjii and Lul Freeze — Score Again" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="work-video" /> : <a href="https://www.youtube.com/watch?v=CEFfJUJmGzU" target="_blank" rel="noopener noreferrer" className="work-image-link"><Image src="https://i.ytimg.com/vi/CEFfJUJmGzU/hqdefault.jpg" alt="Score Again music video artwork" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /><span className="play-circle" aria-hidden="true">▷</span><span className="sr-only">Watch Score Again on YouTube</span></a>}
      <div className="work-caption"><div><p className="eyebrow">MUSIC VIDEO / SELECTED WORK</p><h3>Score Again</h3><p>FREDOBAGZ · Chai Benjii · Lul Freeze</p></div><a href="https://www.youtube.com/watch?v=CEFfJUJmGzU" target="_blank" rel="noopener noreferrer" aria-label="Watch Score Again" className="circle-link">↗</a></div>
    </Reveal>
    <Reveal delay={100} className="work-card">
      {embed ? <video src="/media/10-summers-full.mp4" poster="/media/10-summers.webp" controls playsInline preload="none" aria-label="SOB x RBE — 10 Summers clip" className="work-video" /> : <a href="https://www.instagram.com/stillmiiir/reel/DbcX5z7BeUB/" target="_blank" rel="noopener noreferrer" className="work-image-link"><Image src="/media/10-summers.webp" alt="Ten Summers title over Bay Area railway tracks, from the official Instagram clip" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /><span className="play-circle" aria-hidden="true">▷</span><span className="sr-only">Watch 10 Summers on Instagram</span></a>}
      <div className="work-caption"><div><p className="eyebrow">FROM MIIIR’S INSTAGRAM</p><h3>10 Summers</h3><p>SOB x RBE · with @everybodybleedmusic</p></div><a href="https://www.instagram.com/stillmiiir/reel/DbcX5z7BeUB/" target="_blank" rel="noopener noreferrer" aria-label="Watch 10 Summers" className="circle-link">↗</a></div>
    </Reveal>
  </div>;
}
