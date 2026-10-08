"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { instrumentals } from "@/lib/instrumentals";

type SoundState = {
  activeId: string | null;
  playing: boolean;
  autoMix: boolean;
  mediaMode: "music" | "video";
  playTrack: (id: string) => void;
  pauseMusic: () => void;
};
const SoundContext = createContext<SoundState | null>(null);
const introTrack = instrumentals[0];
const introStart = 0.5;
const introEnd = 4.3;
const entryKey = "miiir-entry-v1";
const mixSource = "/media/miiir-mix-v1.m4a";
const mixSegments = [
  { track: instrumentals[0], start: 0, sourceStart: 0, switchAt: 0 },
  { track: instrumentals[2], start: 45.6, sourceStart: 10.6, switchAt: 46.8 },
  { track: instrumentals[1], start: 91.2, sourceStart: 10.6, switchAt: 92.4 },
  { track: instrumentals[0], start: 136.8, sourceStart: 4.3, switchAt: 138 },
];
function mixSegment(time: number) {
  return [...mixSegments].reverse().find(segment => time >= segment.switchAt) ?? mixSegments[0];
}

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
  const mixing = useRef(false);
  const desiredPlay = useRef(false);
  const activeIdRef = useRef<string | null>(null);
  const playRequest = useRef(0);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [autoMix, setAutoMix] = useState(false);
  const [mediaMode, setMediaMode] = useState<"music" | "video">("music");
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

  function startTrack(id: string, from = 0, useMix = false) {
    const audio = audioRef.current;
    const track = instrumentals.find(item => item.id === id);
    if (!audio || !track) return;
    const request = ++playRequest.current;
    desiredPlay.current = true;
    mixing.current = useMix;
    setAutoMix(useMix);
    setError("");
    setMediaMode("music");
    audio.pause();
    activeIdRef.current = id;
    setActiveId(id);
    setPosition(from);
    setDuration(0);
    pendingSeek.current = from;
    audio.src = useMix ? mixSource : track.audioSrc;
    audio.volume = 0.6;
    audio.load();
    void audio.play().catch(() => {
      if (request !== playRequest.current) return;
      desiredPlay.current = false;
      setError("Tap play to start the music.");
      if (introPlaying.current) finishIntro();
    });
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      desiredPlay.current = true;
      setMediaMode("music");
      setError("");
      void audio.play().catch(() => setError("Music couldn’t load. Try again or listen on YouTube."));
    } else { desiredPlay.current = false; playRequest.current += 1; audio.pause(); }
  }

  function playTrack(id: string) {
    try { sessionStorage.setItem(entryKey, "1"); } catch { /* Storage is optional. */ }
    if (activeId === id && !mixing.current) toggle();
    else startTrack(id);
  }

  function enterWithSound() {
    introPlaying.current = true;
    setPhase("playing");
    startTrack(introTrack.id, introStart, true);
    // Never leave a visitor trapped behind a slow media request.
    fallbackTimer.current = setTimeout(finishIntro, 8000);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finishIntro();
  }

  function enterSilent() {
    desiredPlay.current = false;
    playRequest.current += 1;
    audioRef.current?.pause();
    finishIntro();
  }

  function nextTrack() {
    const order = [instrumentals[0], instrumentals[2], instrumentals[1]];
    const index = order.findIndex(track => track.id === activeIdRef.current);
    const next = order[(index + 1) % order.length];
    if (mixing.current) {
      const segment = mixSegments.find(item => item.track.id === next.id)!;
      startTrack(next.id, segment.start === 0 ? 4.3 : segment.start + 2.4, true);
    } else startTrack(next.id);
  }
  function changeMix() {
    const audio = audioRef.current;
    if (!audio || !activeIdRef.current) return;
    const wasPlaying = !audio.paused;
    if (mixing.current) {
      const segment = mixSegment(audio.currentTime);
      startTrack(segment.track.id, segment.sourceStart + audio.currentTime - segment.start);
    } else {
      const segment = mixSegments.find(item => item.track.id === activeIdRef.current)!;
      const offset = Math.max(segment.start === 0 ? 4.3 : 2.4, Math.min(45, audio.currentTime - segment.sourceStart));
      startTrack(segment.track.id, segment.start + offset, true);
    }
    if (!wasPlaying) { desiredPlay.current = false; playRequest.current += 1; audio.pause(); }
  }
  function pauseMusic() {
    desiredPlay.current = false;
    playRequest.current += 1;
    audioRef.current?.pause();
    setMediaMode("video");
  }

  return <SoundContext value={{ activeId, playing, autoMix, mediaMode, playTrack, pauseMusic }}>
    {children}
    <audio ref={audioRef} preload="none" onLoadedMetadata={event => {
      const audio = event.currentTarget;
      setDuration(audio.duration);
      if (pendingSeek.current !== null) { audio.currentTime = pendingSeek.current; pendingSeek.current = null; }
    }} onTimeUpdate={event => {
      const time = event.currentTarget.currentTime;
      setPosition(time);
      if (introPlaying.current && time >= introEnd) finishIntro();
      if (mixing.current && activeIdRef.current) {
        const id = mixSegment(time).track.id;
        if (activeIdRef.current !== id) { activeIdRef.current = id; setActiveId(id); }
      }
    }} onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={event => {
      if (mixing.current && desiredPlay.current) {
        // The final 5K return ends at 12.3s; resume the matching point without repeating the tag.
        event.currentTarget.currentTime = 12.3;
        activeIdRef.current = introTrack.id;
        setActiveId(introTrack.id);
        void event.currentTarget.play().catch(() => setPlaying(false));
      } else setPlaying(false);
    }} onError={() => {
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
        {phase === "ready" ? <><button className="button button-primary intro-enter" onClick={enterWithSound} autoFocus>Enter <span aria-hidden="true">▷</span></button><button className="intro-silent" onClick={enterSilent}>Skip</button></> : <><p className="intro-now" role="status">{playing ? "MIIIR / 5K" : "STARTING THE RECORD…"}</p><button className="intro-silent" onClick={finishIntro}>Skip intro ↗</button></>}
      </div>
    </dialog>
    {active ? <aside className="sound-player" aria-label="Instrumental music player">
      <div className="sound-info"><span className="sound-label">MIIIR / {autoMix ? "IN THE MIX" : "NOW PLAYING"}</span><strong>{active.title}</strong><span>{active.artist}</span></div>
      <button className="sound-button sound-play" onClick={toggle} aria-label={playing ? "Pause music" : "Play music"}>{playing ? "Ⅱ" : "▷"}</button>
      <button className="sound-button" onClick={nextTrack} aria-label="Next instrumental">›|</button>
      <div className="sound-progress"><input aria-label={autoMix ? "Seek mix" : "Seek instrumental"} type="range" min="0" max={duration || 1} step="0.1" value={Math.min(position, duration || 1)} onChange={event => {
        const time = Number(event.target.value);
        if (audioRef.current) audioRef.current.currentTime = time;
        setPosition(time);
      }} /><span>{timestamp(position)} / {timestamp(duration)}</span></div>
      <button className="sound-mix" onClick={changeMix} aria-pressed={autoMix} aria-label={autoMix ? "Disable automatic mix" : "Enable automatic mix"}>Mix {autoMix ? "on" : "off"}</button>
      <button className="sound-button" onClick={() => {
        const audio = audioRef.current;
        if (audio) { audio.muted = !audio.muted; setMuted(audio.muted); }
      }} aria-label={muted ? "Unmute music" : "Mute music"}>{muted ? "◌" : "♫"}</button>
      <a className="sound-source" href={`https://www.youtube.com/watch?v=${active.id}`} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${active.title} on YouTube`}>↗</a>
      <button className="sound-button" aria-label="Stop and close music player" onClick={() => { desiredPlay.current = false; playRequest.current += 1; audioRef.current?.pause(); activeIdRef.current = null; setActiveId(null); }}>×</button>
      {error ? <p className="sound-error" role="status">{error}</p> : null}
    </aside> : null}
  </SoundContext>;
}
