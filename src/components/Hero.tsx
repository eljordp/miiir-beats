export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface border border-border mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] sm:text-xs text-foreground/60 uppercase tracking-widest">107M+ Streams</span>
        </div>

        <h1 className="text-5xl sm:text-8xl font-bold tracking-tighter mb-3 sm:mb-4">
          <span className="text-accent">Miiir</span>
        </h1>
        <p className="text-base sm:text-xl text-foreground/50 mb-2">
          Producer &middot; Songwriter &middot; Artist
        </p>
        <p className="text-xs sm:text-sm text-foreground/30 mb-8 sm:mb-10 max-w-md mx-auto px-4">
          Bay Area. 205 credits. Browse premium beats and license the sound you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <a
            href="#beats"
            className="px-8 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent-dim transition-colors text-sm sm:text-base"
          >
            Browse Beats
          </a>
          <a
            href="#licensing"
            className="px-8 py-3 border border-border text-foreground/80 rounded-full hover:bg-surface transition-colors text-sm sm:text-base"
          >
            Licensing Info
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-md mx-auto">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-accent">107M+</p>
            <p className="text-[10px] sm:text-xs text-foreground/40 mt-1">Streams</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-foreground">205</p>
            <p className="text-[10px] sm:text-xs text-foreground/40 mt-1">Credits</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-foreground">46M+</p>
            <p className="text-[10px] sm:text-xs text-foreground/40 mt-1">Views</p>
          </div>
        </div>
      </div>
    </section>
  );
}
