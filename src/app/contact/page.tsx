import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import BriefBuilder from "@/components/BriefBuilder";
import Reveal from "@/components/Reveal";
import { instagramUrl } from "@/lib/beats";
export const metadata: Metadata = { title: "Contact", description: "Talk beats, custom production, and collaborations with Miiir on Instagram.", alternates: {canonical:"/contact"} };
export default function ContactPage(){return <><PageIntro number="04" eyebrow="LET’S WORK" title="Start the conversation" description="Got a sound in mind? A record to finish? Tell Miiir what you’re working on." /><section className="shell contact-page-grid"><Reveal className="contact-photo-column"><div className="contact-photo"><Image unoptimized src="/media/session-01-original.jpg" alt="Real recording studio session from Miiir’s Instagram" fill sizes="(max-width:700px) 100vw, 45vw" className="object-cover" /></div><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-handle">@stillmiiir ↗</a><p>Beats / Customs / Collaborations<br />Bay Area, California</p></Reveal><Reveal delay={80}><BriefBuilder /></Reveal></section></>;}
