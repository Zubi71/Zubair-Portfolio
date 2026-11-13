"use client";
import { useState } from "react";
import { projects, shots, filters } from "../projects-data";

function Feature({ p }) {
  return (
    <div className="feature-frame">
      <img className="feature-img" src={shots[p.name]} alt={`Screenshot of the ${p.name} homepage`} loading="lazy" />
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <a className="skip" href="#all-work">Skip to work</a>
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

    </>
  );
}
