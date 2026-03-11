"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-accent">415miiir</span>
          <span className="text-[10px] text-muted uppercase tracking-[0.15em] mt-1">Beats</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#beats" className="text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors">
            Beats
          </a>
          <a href="#licensing" className="text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors">
            Licensing
          </a>
          <a href="#contact" className="text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden w-10 h-10 flex items-center justify-center text-muted"
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-background border-b border-border px-4 pb-4">
          <a
            href="#beats"
            onClick={() => setOpen(false)}
            className="block py-3 text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors border-b border-border/50"
          >
            Beats
          </a>
          <a
            href="#licensing"
            onClick={() => setOpen(false)}
            className="block py-3 text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors border-b border-border/50"
          >
            Licensing
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-3 text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
