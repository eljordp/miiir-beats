"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { instrumentals } from "@/lib/instrumentals";

type SoundState = {
  activeId: string | null;
  playing: boolean;
  playTrack: (id: string) => void;
  pauseMusic: () => void;
};
const SoundContext = createContext<SoundState | null>(null);
const introTrack = instrumentals[0];
const introStart = 0.5;
const introEnd = 4.3;
const entryKey = "miiir-entry-v1";

export function useSound() {
  const value = useContext(SoundContext);
  if (!value) throw new Error("SoundSession is missing");
  return value;
}
function timestamp(seconds: number) {
  const value = Math.max(0, Math.floor(seconds));
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}

export default function SoundSession({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pendingSeek = useRef<number | null>(null);
  const introPlaying = useRef(false);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [phase, setPhase] = useState<"ready" | "playing" | "leaving">("ready");
  const [error, setError] = useState("");
  const active = instrumentals.find(track => track.id === activeId);

  useEffect(() => {
    if (pathname !== "/") return;
    try { if (sessionStorage.getItem(entryKey)) return; } catch { /* Entry still works without storage. */ }
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, [pathname]);

  useEffect(() => () => {
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    if (exitTimer.current) clearTimeout(exitTimer.current);
  }, []);

  function finishIntro() {
    introPlaying.current = false;
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    try { sessionStorage.setItem(entryKey, "1"); } catch { /* Storage is optional. */ }
    const close = () => {
      dialogRef.current?.close();
      document.getElementById("main-content")?.focus({ preventScroll: true });
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) close();
    else { setPhase("leaving"); exitTimer.current = setTimeout(close, 350); }
  }

  function startTrack(id: string, from = 0) {
    const audio = audioRef.current;
    const track = instrumentals.find(item => item.id === id);
    if (!audio || !track) return;
    setError("");
    audio.pause();
    setActiveId(id);
    setPosition(from);
    setDuration(0);
    pendingSeek.current = from;
    audio.src = track.audioSrc;
    audio.volume = 0.6;
    audio.load();
    void audio.play().catch(() => {
      setError("Tap play to start the music.");
      if (introPlaying.current) finishIntro();
    });
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      setError("");
      void audio.play().catch(() => setError("Music couldn’t load. Try again or listen on YouTube."));
    } else audio.pause();
  }

  function playTrack(id: string) {
    if (activeId === id) toggle();
    else startTrack(id);
  }

  function enterWithSound() {
    introPlaying.current = true;
    setPhase("playing");
    startTrack(introTrack.id, introStart);
    // Never leave a visitor trapped behind a slow media request.
    fallbackTimer.current = setTimeout(finishIntro, 8000);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finishIntro();
  }

  function enterSilent() {
    if (introPlaying.current) audioRef.current?.pause();
    finishIntro();
  }

  return <SoundContext value={{ activeId, playing, playTrack, pauseMusic: () => audioRef.current?.pause() }}>
    {children}
    <audio ref={audioRef} preload="none" onLoadedMetadata={event => {
      const audio = event.currentTarget;
      setDuration(audio.duration);
      if (pendingSeek.current !== null) { audio.currentTime = pendingSeek.current; pendingSeek.current = null; }
    }} onTimeUpdate={event => {
      const time = event.currentTarget.currentTime;
      setPosition(time);
      if (introPlaying.current && time >= introEnd) finishIntro();
    }} onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => {
      setError("Music couldn’t load. Listen on YouTube below.");
      if (introPlaying.current) finishIntro();
    }} />
    <dialog ref={dialogRef} className="producer-intro" aria-labelledby="intro-title" onCancel={event => { event.preventDefault(); enterSilent(); }} data-phase={phase}>
      <div className="intro-top"><span>415 / BAY AREA</span><span>PRODUCTION BY</span></div>
      <div className="intro-center">
        <p className="intro-kicker">A MIIIR PRODUCTION</p>
        <h2 id="intro-title" className="intro-wordmark">MIIIR<span>.</span></h2>
        <div className="intro-bars" aria-hidden="true">{Array.from({ length: 19 }, (_, i) => <i key={i} style={{ "--bar": `${(i * 7 % 11 + 3) * 4}px`, "--delay": `${i * 45}ms` } as React.CSSProperties} />)}</div>
        <p className="intro-line">BEATS / CUSTOM PRODUCTION / BAY AREA</p>
      </div>
      <div className="intro-bottom">
        {phase === "ready" ? <><button className="button button-primary intro-enter" onClick={enterWithSound} autoFocus>Enter with sound <span>↗</span></button><button className="intro-silent" onClick={enterSilent}>Enter without sound</button><p>HEADPHONES RECOMMENDED</p></> : <><p className="intro-now" role="status">{playing ? "MIIIR / 5K" : "STARTING THE RECORD…"}</p><button className="intro-silent" onClick={finishIntro}>Skip intro ↗</button></>}
      </div>
    </dialog>
    {active ? <aside className="sound-player" aria-label="Instrumental music player">
      <div className="sound-info"><span className="sound-label">MIIIR / NOW PLAYING</span><strong>{active.title}</strong><span>{active.artist}</span></div>
      <button className="sound-button sound-play" onClick={toggle} aria-label={playing ? "Pause music" : "Play music"}>{playing ? "Ⅱ" : "▷"}</button>
      <div className="sound-progress"><input aria-label="Seek instrumental" type="range" min="0" max={duration || 1} step="0.1" value={Math.min(position, duration || 1)} onChange={event => {
        const time = Number(event.target.value);
        if (audioRef.current) audioRef.current.currentTime = time;
        setPosition(time);
      }} /><span>{timestamp(position)} / {timestamp(duration)}</span></div>
      <button className="sound-button" onClick={() => {
        const audio = audioRef.current;
        if (audio) { audio.muted = !audio.muted; setMuted(audio.muted); }
      }} aria-label={muted ? "Unmute music" : "Mute music"}>{muted ? "◌" : "♫"}</button>
      <a className="sound-source" href={`https://www.youtube.com/watch?v=${active.id}`} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${active.title} on YouTube`}>↗</a>
      <button className="sound-button" aria-label="Stop and close music player" onClick={() => { audioRef.current?.pause(); setActiveId(null); }}>×</button>
      {error ? <p className="sound-error" role="status">{error}</p> : null}
    </aside> : null}
  </SoundContext>;
}
