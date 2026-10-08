import Link from "next/link";
import { instagramUrl } from "@/lib/beats";

export default function Footer() {
  return <footer className="site-footer" id="contact">
    <div className="shell">
      <div className="footer-top"><Link href="/" className="footer-brand">MIIIR<span>.</span></Link><p>PRODUCER. SONGWRITER. ARTIST.<br /><span>BAY AREA, CALIFORNIA.</span></p><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-instagram">@stillmiiir ↗</a></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} Miiir</p><div><Link href="/beats">Beats</Link><Link href="/work">Work</Link><Link href="/deals">Deals</Link><Link href="/contact">Contact</Link></div><a href="https://www.youtube.com/@415miiir" target="_blank" rel="noopener noreferrer">YouTube ↗</a><span>BUILT BY JDLO</span></div>
    </div>
  </footer>;
}
