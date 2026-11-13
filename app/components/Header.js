"use client";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap nav">
        <a href="/" className="logo">Zubair<span> Bin Zahid</span></a>
        <nav className="links" aria-label="Main navigation">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a className="btn btn-primary btn-small" href="/contact">Let&apos;s Talk</a>
        </nav>
        <button className={`menu-btn ${menuOpen ? "open" : ""}`} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger" aria-hidden="true"><span /><span /><span /></span>
        </button>
      </div>
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        {LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href="/contact" onClick={() => setMenuOpen(false)}><strong>Let&apos;s Talk</strong></a>
      </nav>
    </header>
  );
}
