import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import InstrumentalSamples from "@/components/InstrumentalSamples";
import VideoBanner from "@/components/VideoBanner";
import Reveal from "@/components/Reveal";
import WorkGrid from "@/components/WorkGrid";
import { instagramUrl } from "@/lib/beats";

const artists = ["EBK Jaaybo", "Mike Sherm", "Babytron", "Jaymoney30", "Daboii", "SlimmyB", "Yhung To", "Fredo Bagz", "Zaybang", "Lil Bean", "Lil Yee"];

export default function Home() {
  return <>
    <Hero />
    <div className="credits-marquee" aria-label={`Artist credits: ${artists.join(", ")}`}><div aria-hidden="true">{[...artists, ...artists].map((artist, i) => <span key={i}>{artist}<b>✳</b></span>)}</div></div>
    <VideoBanner />
    <section className="section shell"><Reveal><div className="section-heading"><p className="eyebrow">01 / THE NUMBERS</p><span className="section-aside">2025 / A YEAR IN SOUND</span></div><div className="stats-grid"><div><p>107M<span>+</span></p><span>STREAMS</span></div><div><p>200<span>+</span></p><span>PLACEMENTS</span></div><div><p>46M<span>+</span></p><span>VIEWS</span></div></div></Reveal></section>
    <InstrumentalSamples />
    <section className="section shell"><Reveal><div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2 className="section-title">Let the records talk<span>.</span></h2></div><Link href="/work" className="text-link">Explore the work ↗</Link></div></Reveal><WorkGrid /></section>
    <section className="studio-section"><div className="shell studio-grid"><Reveal className="studio-visual"><Image unoptimized src="/media/session-01-original.jpg" alt="Two artists working at a laptop in a recording studio, shared by Miiir" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /><span className="image-label">IN THE ROOM. MAKING RECORDS.</span></Reveal><Reveal delay={100} className="studio-copy"><p className="eyebrow">03 / MADE FOR YOUR SOUND</p><h2 className="section-title">Make it<br />your own<span>.</span></h2><p>Find a beat that fits. Or start from scratch with custom, exclusive production.</p><div className="custom-price"><span>$400</span> / custom exclusive<br /><small>Or three for $1,000.</small></div><Link href="/contact" className="button button-primary">Talk custom production ↗</Link></Reveal></div></section>
    <section className="section shell"><Reveal className="deal-banner"><div><p className="eyebrow">DEALS ALL MONTH</p><h2>More beats.<br /><span>More possibilities.</span></h2></div><div><p className="deal-banner-price">$60<span> / beat</span></p><p>When you grab two or more. Single leases $70.</p><Link href="/deals" className="button button-lime">See the deals ↗</Link></div></Reveal></section>
    <section className="contact-strip shell"><Reveal><p className="eyebrow">04 / LET’S MAKE SOMETHING</p><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="big-contact">YOUR NEXT<br />RECORD <span>↗</span></a><p>Leases, custom beats, and collaborations. <Link href="/contact">Start the conversation.</Link></p></Reveal></section>
  </>;
}
