export default function PopularBeats() {
  return (
    <section className="px-4 sm:px-6 py-10 sm:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs text-muted uppercase tracking-[0.2em]">Selected work</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="border border-border bg-surface rounded-lg overflow-hidden">
            <iframe src="https://www.youtube.com/embed/CEFfJUJmGzU?rel=0" title="FREDOBAGZ, Chai Benjii and Lul Freeze — Score Again" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="aspect-video w-full" />
            <div className="p-5"><p className="text-lg font-semibold">Score Again</p><p className="text-xs text-muted mt-1">FREDOBAGZ · Chai Benjii · Lul Freeze</p></div>
          </div>
          <a href="https://www.instagram.com/stillmiiir/reel/DbcX5z7BeUB/" target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between gap-8 p-6 sm:p-8 border border-border rounded-lg bg-surface hover:border-accent/40 transition-colors">
            <p className="text-xs text-muted uppercase tracking-[0.2em]">From Miiir’s Instagram</p>
            <div><p className="text-xs uppercase tracking-widest text-accent mb-3">SOB x RBE</p><h3 className="text-4xl sm:text-5xl font-bold tracking-tight">10 Summers</h3><p className="text-sm text-muted mt-4 leading-relaxed">Production with @everybodybleedmusic.</p></div>
            <span className="text-sm font-semibold">Watch on Instagram ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
