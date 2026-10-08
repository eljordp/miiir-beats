"use client";
import { useState } from "react";
import { instagramUrl, monthlyDeals } from "@/lib/beats";
export default function BriefBuilder() {
  const [kind,setKind]=useState("Custom production");
  const [count,setCount]=useState("1");
  const [details,setDetails]=useState("");
  const [copied,setCopied]=useState(false);
  const price=count==="3"?monthlyDeals.customBundle:monthlyDeals.customExclusive;
  const summary=`Hi Miiir! I'd like to talk about ${kind.toLowerCase()}.${kind==="Custom production"?` I'm interested in ${count} custom exclusive${count==="3"?"s":""} (monthly deal: $${price.toLocaleString()}).`:""}${details.trim()?`\n\n${details.trim()}`:""}\n\nCan you confirm availability and the next steps?`;
  async function copy(){try{await navigator.clipboard.writeText(summary);setCopied(true);}catch{setCopied(false);}}
  return <div className="brief-builder"><p className="eyebrow">PREPARE YOUR DM</p><label htmlFor="project-type">What are we making?</label><select id="project-type" value={kind} onChange={e=>{setKind(e.target.value);setCopied(false);}}><option>Custom production</option><option>A collaboration</option><option>A lease inquiry</option></select>{kind==="Custom production"&&<fieldset className="custom-options"><legend>Custom exclusives</legend>{["1","3"].map(n=><label key={n}><input type="radio" name="custom-count" checked={count===n} onChange={()=>{setCount(n);setCopied(false);}} />{n==="1"?"One / $400":"Three / $1,000"}</label>)}</fieldset>}<label htmlFor="project-details">Your sound & project</label><textarea id="project-details" rows={4} placeholder="Artist name, references, the sound you’re after, and your timeline…" value={details} onChange={e=>{setDetails(e.target.value);setCopied(false);}} maxLength={2000} /><label htmlFor="brief-summary">Your message</label><textarea id="brief-summary" rows={5} value={summary} readOnly /><div className="brief-actions"><button onClick={copy} className="button button-outline">{copied?"Copied!":"Copy message"}</button><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Open Instagram ↗</a></div><p className="form-note" role="status">{copied?"Copied. Paste it into your DM to Miiir.":"Copy your message, then send it in a DM to @stillmiiir."}</p></div>;
}
