export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-foreground/60 uppercase tracking-widest">107M+ Streams</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-4">
          <span className="text-accent">Miiir</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/50 mb-2">
          Producer &middot; Songwriter &middot; Artist
        </p>
        <p className="text-sm text-foreground/30 mb-10 max-w-md mx-auto">
          Bay Area. 205 credits. Browse premium beats and license the sound you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#beats"
            className="px-8 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent-dim transition-colors"
          >
            Browse Beats
          </a>
          <a
            href="#licensing"
            className="px-8 py-3 border border-border text-foreground/80 rounded-full hover:bg-surface transition-colors"
          >
            Licensing Info
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <p className="text-2xl font-bold text-accent">107M+</p>
            <p className="text-xs text-foreground/40 mt-1">Streams</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">205</p>
            <p className="text-xs text-foreground/40 mt-1">Credits</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">46M+</p>
            <p className="text-xs text-foreground/40 mt-1">Views</p>
          </div>
        </div>
      </div>
    </section>
  );
}
