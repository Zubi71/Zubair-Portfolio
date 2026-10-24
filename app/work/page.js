"use client";
import { useState } from "react";
import { projects, shots, filters } from "../projects-data";

const EMAIL = "zahidzubair489@gmail.com";

function Feature({ p }) {
  return (
    <div className="feature-frame">
      <img className="feature-img" src={shots[p.name]} alt={`Screenshot of the ${p.name} homepage`} loading="lazy" />
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <a className="skip" href="#all-work">Skip to work</a>
      <header className="header">
        <div className="wrap nav">
          <a href="/" className="logo">Zubair<span> Bin Zahid</span></a>
          <nav className="links" aria-label="Main navigation">
            <a href="/">Home</a><a href="/work">Work</a><a href="/#services">Services</a><a href="/#about">About</a><a href="/#contact">Contact</a>
            <a className="btn btn-primary btn-small" href="/#contact">Let&apos;s Talk</a>
          </nav>
          <button className={`menu-btn ${menuOpen ? "open" : ""}`} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="hamburger" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}><strong>Let&apos;s Talk</strong></a>
        </nav>
      </header>

      <main className="wrap">
        <section id="all-work">
          <p className="kicker">All Work</p>
          <h2>Every project, in one place.</h2>
          <p className="sub">All {projects.length} projects Zubair has worked on, with a feature image of each live website. Click a project to visit the live website. No results are claimed for these projects. New projects will be added here as they are completed.</p>
          <div className="filters" role="group" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button key={f} className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="work">
            {shown.map((p) => (
              <article key={p.name} className="card">
                <div className="browser">
                  <div className="bar"><span className="dot" /><span className="dot" /><span className="dot" /><span style={{ marginLeft: 8 }}>{p.url.replace("https://www.", "").replace("https://", "")}</span></div>
                  <Feature p={p} />
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                  <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <div className="card-links">
                    <a href={p.url} target="_blank" rel="noreferrer">View Live Project ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {shown.length === 0 && <p className="note">No projects in this category yet.</p>}
        </section>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <div>
            <a href="/" className="logo">Zubair<span> Bin Zahid</span></a>
            <p style={{ maxWidth: 420 }}>Web Developer, WordPress Specialist, SEO Expert and AI Solutions Developer — building high-performance websites that help businesses grow.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="/">Home</a> · <a href="/work">Work</a> · <a href="/#services">Services</a> · <a href="/#about">About</a> · <a href="/#contact">Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} Zubair Bin Zahid · <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href="/">Back to home ↑</a></p>
        </div>
      </footer>
    </>
  );
}
