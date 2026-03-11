"use client";

import { Beat, licenseDetails } from "@/lib/beats";
import { useState } from "react";

interface LicenseModalProps {
  beat: Beat;
  onClose: () => void;
}

type LicenseType = "basic" | "ultimate" | "exclusive";

export default function LicenseModal({ beat, onClose }: LicenseModalProps) {
  const [selected, setSelected] = useState<LicenseType>("basic");

  const tiers: LicenseType[] = ["basic", "ultimate", "exclusive"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-surface border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">{beat.title}</h2>
            <p className="text-sm text-foreground/40 mt-1">
              {beat.bpm} BPM &middot; {beat.key} &middot; {beat.duration}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-light text-foreground/40 hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* License tiers */}
        <div className="p-6">
          <p className="text-sm text-foreground/50 mb-6">Choose your license type:</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tiers.map((tier) => {
              const details = licenseDetails[tier];
              const price = beat.pricing[tier];
              const isSelected = selected === tier;
              const isExclusive = tier === "exclusive";

              return (
                <button
                  key={tier}
                  onClick={() => setSelected(tier)}
                  className={`relative text-left p-5 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-accent bg-accent/5 glow-accent"
                      : "border-border hover:border-foreground/20"
                  } ${isExclusive ? "sm:ring-1 sm:ring-accent/20" : ""}`}
                >
                  {isExclusive && (
                    <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-accent text-background text-[10px] font-bold rounded uppercase tracking-wider">
                      Best Value
                    </span>
                  )}
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-2">
                    {details.name}
                  </p>
                  <p className="text-2xl font-bold text-foreground mb-4">
                    ${price}
                  </p>
                  <ul className="space-y-2">
                    {details.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-foreground/60">
                        <svg
                          className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* Purchase button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-accent text-background font-bold rounded-full hover:bg-accent-dim transition-colors">
              Purchase {licenseDetails[selected].name} — ${beat.pricing[selected]}
            </button>
            <p className="text-xs text-foreground/30">
              Instant delivery &middot; Secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
