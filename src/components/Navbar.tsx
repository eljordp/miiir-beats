"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight">
          <span className="text-accent">Miiir</span>
          <span className="text-foreground/60 text-sm ml-2 font-normal">Beats</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#beats" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Beats
          </a>
          <a href="#licensing" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Licensing
          </a>
          <a href="#contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden w-10 h-10 flex items-center justify-center text-foreground/60"
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4">
          <a
            href="#beats"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm text-foreground/60 hover:text-foreground transition-colors border-b border-border/50"
          >
            Beats
          </a>
          <a
            href="#licensing"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm text-foreground/60 hover:text-foreground transition-colors border-b border-border/50"
          >
            Licensing
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
