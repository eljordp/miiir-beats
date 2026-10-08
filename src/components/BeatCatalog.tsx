"use client";
import { useState } from "react";
import { Beat, beats } from "@/lib/beats";
import BeatCard from "@/components/BeatCard";
import LicenseModal from "@/components/LicenseModal";

const tags = ["All", ...new Set(beats.flatMap(beat => beat.tags))];
export default function BeatCatalog() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Beat | null>(null);
  const filtered = beats.filter(beat => (filter === "All" || beat.tags.includes(filter)) && `${beat.title} ${beat.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <section className="shell catalog-section" id="beats">
    <div className="catalog-toolbar"><label className="search-label">Find a beat<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search titles or moods…" /></label><p>$70 single / $60 each for 2+</p></div>
    <div className="tag-filters" aria-label="Filter beats by style">{tags.map(tag => <button key={tag} onClick={() => setFilter(tag)} aria-pressed={filter === tag}>{tag}</button>)}</div>
    <div className="catalog-note"><p>Audio previews are coming. Hear Miiir’s records on <a href="https://www.youtube.com/@415miiir" target="_blank" rel="noopener noreferrer">YouTube ↗</a> and DM to check availability.</p><span role="status">{filtered.length} {filtered.length === 1 ? "beat" : "beats"}</span></div>
    <div className="beat-list">{filtered.length ? filtered.map((beat, index) => <BeatCard key={beat.id} beat={beat} index={index} onLicense={setSelected} />) : <div className="empty-results"><p>No beats match that search.</p><button className="text-link" onClick={() => { setQuery(""); setFilter("All"); }}>Clear filters ↗</button></div>}</div>
    <p className="catalog-end">Want something made from scratch? <a className="text-link" href="/contact">Talk custom production ↗</a></p>
    {selected && <LicenseModal key={selected.id} beat={selected} onClose={() => setSelected(null)} />}
  </section>;
}
