"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-accent">Miiir</span>
          <span className="text-foreground/60 text-sm ml-2 font-normal">Beats</span>
        </Link>
        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  );
}
