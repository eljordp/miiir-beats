"use client";

import { Beat, licenseDetails } from "@/lib/beats";
import { useState } from "react";

interface LicenseModalProps {
  beat: Beat;
  onClose: () => void;
  isBeatOfDay?: boolean;
  discount?: number;
}

type LicenseType = "basic" | "ultimate" | "exclusive";
type PaymentMethod = "cashapp" | "paypal";

const paymentLinks: Record<PaymentMethod, string> = {
  cashapp: "https://cash.app/$Miiirmadeit",
  paypal: "https://www.paypal.biz/415miiir",
};

export default function LicenseModal({ beat, onClose, isBeatOfDay, discount = 0 }: LicenseModalProps) {
  const [selected, setSelected] = useState<LicenseType>("basic");
  const [payment, setPayment] = useState<PaymentMethod>("cashapp");

  const getPrice = (tier: LicenseType) => {
    const base = beat.pricing[tier];
    if (isBeatOfDay && tier === "basic" && discount > 0) {
      return (base - discount).toFixed(2);
    }
    return base.toFixed(2);
  };

  const tiers: LicenseType[] = ["basic", "ultimate", "exclusive"];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-surface border-t sm:border border-border rounded-t-xl sm:rounded-sm w-full sm:max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Mobile drag indicator */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-foreground/20" />
        </div>

        {/* Header */}
        <div className="px-5 sm:px-6 pt-3 sm:pt-6 pb-4 sm:pb-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold">{beat.title}</h2>
            <p className="text-xs sm:text-sm text-muted mt-1">
              {beat.bpm} BPM &middot; {beat.key} &middot; {beat.duration}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-surface-light text-muted hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* License tiers */}
        <div className="px-5 sm:px-6 py-5 sm:py-6">
          <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider mb-4 sm:mb-6">Select license</p>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none no-scrollbar">
            {tiers.map((tier) => {
              const details = licenseDetails[tier];
              const price = getPrice(tier);
              const originalPrice = beat.pricing[tier].toFixed(2);
              const isDiscounted = isBeatOfDay && tier === "basic" && discount > 0;
              const isSelected = selected === tier;
              const isExclusive = tier === "exclusive";

              return (
                <button
                  key={tier}
                  onClick={() => setSelected(tier)}
                  className={`relative text-left p-4 sm:p-5 border transition-all flex-shrink-0 w-[70vw] sm:w-auto snap-center ${
                    isSelected
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-foreground/20"
                  } ${isExclusive ? "ring-1 ring-accent/10" : ""}`}
                >
                  {isExclusive && (
                    <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-accent text-background text-[9px] font-bold uppercase tracking-wider">
                      Best Value
                    </span>
                  )}
                  <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wider mb-1 sm:mb-2">
                    {details.name}
                  </p>
                  <div className="mb-3 sm:mb-4">
                    {isDiscounted && (
                      <p className="text-xs text-muted line-through tabular-nums">${originalPrice}</p>
                    )}
                    <p className="text-xl sm:text-2xl font-bold text-foreground">
                      ${price}
                      {isDiscounted && (
                        <span className="ml-2 text-[10px] font-bold text-accent uppercase tracking-wider align-middle">Today only</span>
                      )}
                    </p>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {details.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-[10px] sm:text-xs text-foreground/60">
                        <svg
                          className="w-3 h-3 text-accent flex-shrink-0 mt-0.5"
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

          {/* Payment method selector */}
          <div className="mt-6 sm:mt-8">
            <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider mb-3">Pay with</p>
            <div className="flex gap-3">
              {(["cashapp", "paypal"] as PaymentMethod[]).map((method) => (
                <button
                  key={method}
                  onClick={() => setPayment(method)}
                  className={`flex-1 py-2.5 border text-xs font-bold uppercase tracking-wider transition-all ${
                    payment === method
                      ? "border-accent bg-accent/5 text-foreground"
                      : "border-border text-muted hover:border-foreground/20"
                  }`}
                >
                  {method === "cashapp" ? "Cash App" : "PayPal"}
                </button>
              ))}
            </div>
          </div>

          {/* Purchase button */}
          <div className="mt-4 flex flex-col items-center gap-3 safe-bottom-padding">
            <a
              href={paymentLinks[payment]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-3 bg-accent text-background font-bold hover:bg-accent-dim active:scale-[0.98] transition-all text-sm sm:text-base text-center uppercase tracking-wider"
            >
              Pay ${getPrice(selected)} via {payment === "cashapp" ? "Cash App" : "PayPal"}
            </a>
            <p className="text-[10px] sm:text-xs text-muted text-center">
              After payment, DM <span className="text-foreground/60">@415miiir</span> on Instagram with your receipt.
              <br />
              Mention &ldquo;{beat.title}&rdquo; + {licenseDetails[selected].name}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
