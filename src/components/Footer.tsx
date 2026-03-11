export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12 sm:py-16 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-accent">Miiir</span>
            </h3>
            <p className="text-sm text-foreground/40 leading-relaxed">
              Producer, Songwriter, Artist. Bay Area. 107M+ streams and counting.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/415miiir/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-accent active:text-accent transition-colors py-1"
              >
                <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @415miiir
              </a>
              <a
                href="https://www.youtube.com/@415miiir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-accent active:text-accent transition-colors py-1"
              >
                <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
              <a
                href="https://linktr.ee/Miiir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-accent active:text-accent transition-colors py-1"
              >
                <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08 1.708 1.404 3.09 3.09 3.09 1.624 0 2.964-1.236 3.09-2.858.08-.163.08-.324.08-.486-.08-1.708-1.404-3.09-3.09-3.09-1.624 0-2.964 1.236-3.09 2.858zm10.1-8.61l-2.55 2.55 1.727 1.727 4.277-4.278-4.278-4.277-1.727 1.727 2.55 2.55H13.89c-3.252 0-5.965 2.388-6.45 5.478C5.17 9.072 3.3 7.528.892 7.528v2.55c1.87 0 3.414 1.544 3.414 3.414s-1.544 3.414-3.414 3.414v2.55c3.252 0 5.965-2.388 6.45-5.478 2.27 1.142 4.14 2.686 6.548 2.686h4.163l-2.55 2.55 1.727 1.727 4.277-4.278-4.278-4.277-1.727 1.727 2.55 2.55H13.89c-1.87 0-3.414-1.544-3.414-3.414s1.544-3.414 3.414-3.414h4.163z" />
                </svg>
                Linktree
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
              Custom Work
            </h4>
            <p className="text-sm text-foreground/40 mb-4 leading-relaxed">
              Need a custom beat or exclusive production? Reach out on Instagram for collabs and custom orders.
            </p>
            <a
              href="https://www.instagram.com/415miiir/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2.5 sm:py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full hover:bg-accent hover:text-background active:bg-accent active:text-background transition-colors"
            >
              DM on Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Miiir. All rights reserved.
          </p>
          <p className="text-xs text-foreground/20">
            Built by JDLO
          </p>
        </div>
      </div>
    </footer>
  );
}
