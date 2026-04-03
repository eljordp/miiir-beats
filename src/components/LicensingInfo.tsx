import { licenseDetails } from "@/lib/beats";

export default function LicensingInfo() {
  const tiers = [
    { key: "basic" as const, price: "$79.99", highlight: false },
    { key: "ultimate" as const, price: "$99.99", highlight: false },
    { key: "exclusive" as const, price: "$499.99+", highlight: true },
  ];

  return (
    <section id="licensing" className="py-16 sm:py-24 px-5 sm:px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10 sm:mb-16">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">Licensing</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="sm:text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] mb-3 sm:mb-4">
            Three tiers. Your choice.
          </h2>
          <p className="text-sm text-muted max-w-md sm:mx-auto">
            From demos to major releases. Pick the license that fits your project.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none no-scrollbar">
          {tiers.map(({ key, price, highlight }) => {
            const details = licenseDetails[key];
            return (
              <div
                key={key}
                className={`relative p-6 sm:p-8 border transition-all flex-shrink-0 w-[75vw] sm:w-auto snap-center ${
                  highlight
                    ? "border-accent bg-accent/5"
                    : "border-border bg-surface hover:border-foreground/20"
                }`}
              >
                {highlight && (
                  <span className="absolute -top-2.5 left-6 px-2 py-0.5 bg-accent text-background text-[9px] font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider mb-2 sm:mb-3">
                  {details.name}
                </p>
                <p className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">{price}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {details.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/60">
                      <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${highlight ? "bg-accent" : "bg-accent/40"}`} />
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
