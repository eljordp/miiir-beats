"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const pages = [{ href: "/", label: "Home" }, { href: "/beats", label: "Beats" }, { href: "/work", label: "Work" }, { href: "/deals", label: "Deals" }, { href: "/contact", label: "Contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>MIIIR<span className="brand-dot">.</span><span className="brand-sub">415 / SOUND</span></Link>
        <div className="desktop-nav">{pages.map((page) => <Link key={page.href} href={page.href} aria-current={path === page.href ? "page" : undefined} className={path === page.href ? "active" : ""}>{page.label}</Link>)}</div>
        <Link href="/contact" className="nav-contact">LET’S WORK ↗</Link>
        <button ref={toggleRef} onClick={() => setOpen((value) => !value)} className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu"><span aria-hidden="true">{open ? "×" : "☰"}</span></button>
      </nav>
      {open ? <nav id="mobile-menu" className="mobile-nav shell" aria-label="Mobile navigation">{pages.map((page, i) => <Link key={page.href} href={page.href} onClick={() => setOpen(false)} aria-current={path === page.href ? "page" : undefined}><span>0{i + 1}</span>{page.label}<span aria-hidden="true">↗</span></Link>)}</nav> : null}
    </header>
  );
}
