"use client";

import { Beat, beats, instagramUrl, leaseTotal, monthlyDeals } from "@/lib/beats";
import { useEffect, useRef, useState } from "react";

interface LicenseModalProps {
  beat: Beat;
  onClose: () => void;
}

export default function LicenseModal({ beat, onClose }: LicenseModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIds, setSelectedIds] = useState([beat.id]);
  const [copied, setCopied] = useState(false);
  const selectedBeats = beats.filter((item) => selectedIds.includes(item.id));
  const total = leaseTotal(selectedBeats.length);
  const summary = `Hi Miiir! I'd like to request ${selectedBeats.length === 1 ? "a lease" : "a lease bundle"} for: ${selectedBeats.map((item) => item.title).join(", ")}. Monthly deal: $${total} total ($${selectedBeats.length > 1 ? monthlyDeals.bundleLease : monthlyDeals.lease} per beat). Can you confirm availability, files, and license terms?`;

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, []);

  function toggleBeat(id: string) {
    setSelectedIds((ids) => ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id]);
    setCopied(false);
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <dialog ref={dialogRef} aria-labelledby="lease-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} className="fixed inset-0 m-auto w-[calc(100%_-_2rem)] max-w-xl max-h-[85dvh] p-0 bg-surface text-foreground border border-border rounded-lg backdrop:bg-black/85 backdrop:backdrop-blur-sm">
      <div className="p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <h2 id="lease-title" className="text-xl font-bold">Request a lease</h2>
          <button onClick={onClose} aria-label="Close lease request" className="w-10 h-10 border border-border rounded-sm text-xl">×</button>
        </div>
        <p className="text-sm text-muted mt-3 mb-6">$70 for one beat. $60 each when you grab two or more.</p>
        <fieldset className="border border-border rounded-sm p-3 max-h-52 overflow-y-auto">
          <legend className="text-xs text-muted px-2 uppercase tracking-wider">Choose your beats</legend>
          {beats.map((item) => (
            <label key={item.id} className="flex items-center gap-3 py-2 cursor-pointer text-sm">
              <input type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => toggleBeat(item.id)} className="w-4 h-4 accent-[#a2ef78]" />
              <span>{item.title}</span>
            </label>
          ))}
        </fieldset>
        <div role="status" aria-live="polite" className="my-5 flex justify-between items-end">
          <p className="text-sm text-muted">{selectedBeats.length} {selectedBeats.length === 1 ? "beat" : "beats"}{selectedBeats.length > 1 ? " · bundle rate" : ""}</p>
          <p className="text-3xl font-bold text-[#a2ef78]">${total}</p>
        </div>
        {selectedBeats.length > 0 ? (
          <>
            <label htmlFor="request-summary" className="block text-xs text-muted mb-2">Your request — copy and send to @stillmiiir</label>
            <textarea id="request-summary" readOnly value={summary} rows={4} className="w-full p-3 text-xs leading-relaxed bg-background border border-border rounded-sm resize-none" />
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <button onClick={copySummary} className="px-4 py-3 border border-border text-sm font-semibold rounded-sm">{copied ? "Copied!" : "Copy request"}</button>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-[#a2ef78] text-background text-center text-sm font-bold rounded-sm">DM @stillmiiir ↗</a>
            </div>
          </>
        ) : <p className="text-sm text-muted">Select at least one beat to prepare a request.</p>}
        <p className="text-xs text-muted mt-5 leading-relaxed">Confirm availability, delivery files, and license terms with Miiir before paying. Custom exclusives: $400 each or 3 for $1,000.</p>
      </div>
    </dialog>
  );
}
