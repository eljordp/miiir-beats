import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media"><Image unoptimized src="/media/session-03-original.jpg" alt="Artists gathered around the desk during a real studio session shared by Miiir" fill priority sizes="100vw" className="hero-photo" /></div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content shell">
        <div className="hero-eyebrow"><span className="live-dot" />415 / BAY AREA <span className="hero-role">PRODUCER · SONGWRITER · ARTIST</span></div>
        <h1 className="hero-wordmark">MIIIR<span>.</span></h1>
        <div className="hero-bottom">
          <div><p className="hero-tagline">Produced in the Bay.<br />Built for your next record.</p><p className="hero-description">Beats. Custom production. Bay Area energy.</p></div>
          <div className="hero-actions"><Link href="/beats" className="button button-primary">Find your sound <span>↗</span></Link><Link href="/work" className="button button-glass">Explore the work <span>↗</span></Link></div>
        </div>
        <div className="hero-footnote"><Link href="/deals">DEALS ALL MONTH <span>$70 leases · $60 each for 2+</span> ↗</Link><a href="https://www.instagram.com/stillmiiir/p/Daok7veGtiD/" target="_blank" rel="noopener noreferrer" className="photo-credit">IN THE STUDIO / @stillmiiir ↗</a></div>
      </div>
    </section>
  );
}
