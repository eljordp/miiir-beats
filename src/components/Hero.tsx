export default function Hero() {
  const artists = [
    "EBK Jaaybo", "Mike Sherm", "Babytron", "Jaymoney30", "Daboii",
    "SlimmyB", "Yhung To", "Fredo Bagz", "Zaybang", "Lil Bean", "Lil Yee",
  ];
  const credits = [...artists, ...artists];

  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex flex-col justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background — subtle radial, not generic gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,45,45,0.04)_0%,_transparent_60%)]" />

      {/* Grid lines for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 px-5 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em]">Bay Area Producer</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Main title — big, raw */}
        <h1 className="text-[4rem] sm:text-[8rem] lg:text-[10rem] font-bold tracking-[-0.05em] leading-[0.85] mb-4 sm:mb-6">
          <span className="text-accent">415miiir</span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-12 mb-10 sm:mb-14">
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-foreground/50 leading-relaxed mb-6">
              Producer. Songwriter. Artist.<br />
              107M+ streams. 205 credits. 46M+ views.<br />
              Get the sound you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#beats"
                className="px-6 py-3 bg-accent text-background font-bold rounded-sm hover:bg-accent-dim active:scale-[0.98] transition-all text-sm uppercase tracking-wider text-center"
              >
                Browse Beats
              </a>
              <a
                href="#licensing"
                className="px-6 py-3 border border-border text-foreground/60 rounded-sm hover:bg-surface-light active:scale-[0.98] transition-all text-sm uppercase tracking-wider text-center"
              >
                Licensing
              </a>
            </div>
          </div>

          {/* Stats — vertical stack, right aligned */}
          <div className="flex sm:flex-col gap-6 sm:gap-4 sm:text-right">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent tabular-nums">107M+</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">Streams</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold tabular-nums">205</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">Credits</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold tabular-nums">46M+</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">Views</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling credits marquee */}
      <div className="relative z-10 border-t border-b border-border py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {credits.map((name, i) => (
            <span key={i} className="text-xs text-muted uppercase tracking-[0.15em] mx-6 sm:mx-10 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-accent/50" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
