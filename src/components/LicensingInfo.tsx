import { instagramUrl, monthlyDeals } from "@/lib/beats";

export default function LicensingInfo() {
  const offers = [
    { title: "Single lease", price: monthlyDeals.lease, unit: "/ beat", detail: "One beat. Your next record.", note: "Browse the catalog and request your lease.", href: "/beats", cta: "Find your beat" },
    { title: "Multiple leases", price: monthlyDeals.bundleLease, unit: "/ beat", detail: "Grab two or more.", note: "Two for $120. Three for $180. $60 each when you grab more than one.", href: "/beats", cta: "Build your bundle" },
    { title: "Custom exclusives", price: monthlyDeals.customExclusive, unit: "/ custom", detail: `Or ${monthlyDeals.customBundleCount} for $${monthlyDeals.customBundle.toLocaleString()}.`, note: "Made for your sound. DM Miiir to discuss your project and confirm the terms.", href: instagramUrl, cta: "Talk custom production" },
  ];

  return (
    <section id="licensing" className="px-5 sm:px-6 py-14 sm:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#a2ef78]" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#a2ef78]">Monthly deals</p>
          <div className="h-px flex-1 bg-border" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight uppercase italic">Deals all month.</h2>
        <p className="mt-4 mb-10 text-sm text-muted">Pick your sound. Grab a bundle. Or build something from scratch.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {offers.map((offer, index) => (
            <article key={offer.title} className={`flex flex-col p-6 sm:p-7 border rounded-lg ${index === 1 ? "border-[#a2ef78]/60 bg-[#a2ef78]/[0.06]" : "border-border bg-surface"}`}>
              <p className="text-xs uppercase tracking-widest text-muted">{offer.title}</p>
              <p className="mt-6 text-5xl font-bold tracking-tight text-[#a2ef78]">${offer.price}<span className="text-xs font-normal tracking-normal text-muted ml-2">{offer.unit}</span></p>
              <h3 className="mt-5 text-lg font-semibold">{offer.detail}</h3>
              <p className="mt-2 mb-8 text-sm leading-relaxed text-muted">{offer.note}</p>
              <a href={offer.href} target={offer.href.startsWith("https") ? "_blank" : undefined} rel={offer.href.startsWith("https") ? "noopener noreferrer" : undefined} className="mt-auto py-3 px-4 border border-[#a2ef78]/30 rounded-sm text-center text-xs font-bold uppercase tracking-wide hover:bg-[#a2ef78] hover:text-background transition-colors">{offer.cta} ↗</a>
            </article>
          ))}
        </div>
        <p className="text-xs text-muted mt-6">Confirm availability, delivery files, and license terms with <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-foreground">@stillmiiir</a> before payment.</p>
      </div>
    </section>
  );
}
