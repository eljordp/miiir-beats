import { licenseDetails } from "@/lib/beats";

export default function LicensingInfo() {
  const tiers = [
    { key: "basic" as const, price: "$29.99", highlight: false },
    { key: "ultimate" as const, price: "$99.99", highlight: false },
    { key: "exclusive" as const, price: "$499.99+", highlight: true },
  ];

  return (
    <section id="licensing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Licensing <span className="text-accent">Options</span>
          </h2>
          <p className="text-foreground/40 max-w-md mx-auto">
            Three tiers to fit your project. From demos to major releases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tiers.map(({ key, price, highlight }) => {
            const details = licenseDetails[key];
            return (
              <div
                key={key}
                className={`relative p-8 rounded-2xl border-2 transition-all ${
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
                <p className="text-sm text-foreground/50 uppercase tracking-wider mb-3">
                  {details.name}
                </p>
                <p className="text-4xl font-bold mb-6">{price}</p>
                <ul className="space-y-3">
                  {details.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/60">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
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
