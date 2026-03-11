import { licenseDetails } from "@/lib/beats";

export default function LicensingInfo() {
  const tiers = [
    { key: "basic" as const, price: "$29.99", highlight: false },
    { key: "ultimate" as const, price: "$99.99", highlight: false },
    { key: "exclusive" as const, price: "$499.99+", highlight: true },
  ];

  return (
    <section id="licensing" className="py-16 sm:py-24 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Licensing <span className="text-accent">Options</span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/40 max-w-md mx-auto">
            Three tiers to fit your project. From demos to major releases.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none">
          {tiers.map(({ key, price, highlight }) => {
            const details = licenseDetails[key];
            return (
              <div
                key={key}
                className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all flex-shrink-0 w-[75vw] sm:w-auto snap-center ${
                  highlight
                    ? "border-accent bg-accent/5 glow-accent"
                    : "border-border bg-surface hover:border-foreground/20"
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-accent text-background text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <p className="text-xs sm:text-sm text-foreground/50 uppercase tracking-wider mb-2 sm:mb-3">
                  {details.name}
                </p>
                <p className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">{price}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {details.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/60">
                      <svg
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 ${
                          highlight ? "text-accent" : "text-accent/60"
                        }`}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
