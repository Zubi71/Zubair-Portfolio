"use client";
import { useState } from "react";
import { projects, shots, filters } from "./projects-data";

const WA_NUMBER = "923297708264";
const EMAIL = "zahidzubair489@gmail.com";
const SITE = "https://zubair.dyznoai.com/";

function HomepageMock({ p, large }) {
  return (
    <div className={`feature-frame ${large ? "feature-frame-large" : ""}`}>
      <img className="feature-img" src={shots[p.name]} alt={`Screenshot of the ${p.name} homepage`} loading={large ? "eager" : "lazy"} />
    </div>
  );
}

const services = [
  { icon: "</>", title: "Custom Website Development", text: "Fast, mobile-first websites built around your business goals, not a generic template.", cta: "Discuss a website" },
  { icon: "W", title: "WordPress and WooCommerce Development", text: "WordPress websites and online stores with clean structure, easy editing and room to grow.", cta: "Discuss WordPress" },
  { icon: "↗", title: "Website Redesign and UI/UX Improvement", text: "Clearer layouts, stronger calls to action and a more professional first impression.", cta: "Discuss a redesign" },
  { icon: "⌕", title: "Technical SEO and Website Audits", text: "Find what is holding a site back in search — structure, speed, content and technical issues.", cta: "Request an audit" },
  { icon: "⚡", title: "Website Speed and Performance Optimisation", text: "Faster loading, fewer layout shifts and a smoother experience on mobile and desktop.", cta: "Improve speed" },
  { icon: "▦", title: "Full-Stack Web Development", text: "Front-end and back-end work for portals, tools and business applications.", cta: "Discuss a build" },
  { icon: "✦", title: "AI Integrations and Workflow Automation", text: "Practical AI tools such as question-answering chatbots built from your own documents.", cta: "Discuss AI" },
];

const techItems = ["Next.js", "React", "WordPress", "WooCommerce", "SEO", "Performance Optimisation", "AI Chatbots", "AI Automation", "Full Stack Development", "Frontend Development", "Backend Development", "Python", "Flask"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", details: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const shown = projects.slice(0, 6);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.type) next.type = "Please choose a project type.";
    if (form.details.trim().length < 10) next.details = "Please add a few more details (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) { setStatus("Please fix the highlighted fields."); return; }
    const msg = `Hi Zubair, I saw your portfolio at zubair.dyznoai.com.%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AProject type: ${encodeURIComponent(form.type)}%0ABudget: ${encodeURIComponent(form.budget || "Not specified")}%0A%0ADetails: ${encodeURIComponent(form.details)}`;
    setStatus("Opening WhatsApp with your enquiry pre-filled — press send in WhatsApp to submit it. You can also email instead, using the address below.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noopener");
  };

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <header className="header">
        <div className="wrap nav">
          <a href="#home" className="logo">Zubair<span> Bin Zahid</span></a>
          <nav className="links" aria-label="Main navigation">
            <a href="#home">Home</a><a href="/work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
            <a className="btn btn-primary btn-small" href="#contact">Let&apos;s Talk</a>
          </nav>
          <button className={`menu-btn ${menuOpen ? "open" : ""}`} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="hamburger" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}><strong>Let&apos;s Talk</strong></a>
        </nav>
      </header>

      <main className="wrap">
        <section className="hero reveal" id="home">
          <div>
            <p className="eyebrow">Web Developer · WordPress Specialist · SEO Expert · AI Solutions</p>
            <h1>I Build <span className="hl">High-Performance Websites</span> That Help Businesses Grow.</h1>
            <p className="lead">I help businesses build modern websites, improve search visibility, optimise performance, and integrate intelligent digital solutions that support real business goals.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#work">Explore My Work</a>
              <a className="btn btn-outline" href="#contact">Let&apos;s Discuss Your Project</a>
            </div>
            <p className="hero-note"><strong>Build first, pay after approval.</strong> You see your full website first, request changes, and only then it goes live on your domain.</p>
          </div>
          <div className="hero-visual" aria-label="Featured project preview">
            <div className="browser">
              <div className="bar"><span className="dot" /><span className="dot" /><span className="dot" /><span style={{ marginLeft: 8 }}>penguinswimschool.sg</span></div>
              <HomepageMock p={projects[0]} large />
            </div>
            <div className="hero-cards">
              <div className="mini-card"><b>14 live projects</b><span>Singapore, Ireland and beyond</span></div>
              <div className="mini-card"><b>2 years</b><span>Working on Penguin Swim School&apos;s online presence</span></div>
            </div>
            <div className="glass-row" aria-label="How working with me works">
              <span className="glass-badge"><b>✓</b> Free preview first</span>
              <span className="glass-badge"><b>✓</b> Revisions until you approve</span>
              <span className="glass-badge"><b>✓</b> Live on your domain</span>
            </div>
            <p className="note">The portrait will be added here when Zubair provides his own photo — no placeholder portrait is presented as him.</p>
          </div>
        </section>

        <div className="trust" aria-label="Technologies and credentials">
          <div className="trust-row">
            <strong className="trust-label">Technologies I work with:</strong>
            <div className="marquee">
              <div className="marquee-track">
                {[...techItems, ...techItems].map((tech, i) => <span key={i} aria-hidden={i >= techItems.length}>{tech}</span>)}
              </div>
            </div>
            <strong className="trust-portfolio">Portfolio:</strong><span>Singapore · Ireland · Online</span>
          </div>
        </div>

        <div className="pro-strip" aria-label="Why work with me">
          <div className="pro-card"><b>See it before you pay</b><span>Your full website preview comes first — no advance payment.</span></div>
          <div className="pro-card"><b>Built for enquiries, not just looks</b><span>Clear structure, fast loading and easy contact on every page.</span></div>
          <div className="pro-card"><b>Real projects, real links</b><span>Every project below links to a live website you can open and check.</span></div>
        </div>

        <section id="work">
          <p className="kicker">Selected Work</p>
          <h2>Real websites, for real businesses.</h2>
          <p className="sub">Showing the top 6 projects. Each card shows a feature image of the live website. Click a project to visit the live website. No results are claimed for these projects.</p>
          <div className="work">
            {shown.map((p) => (
              <article key={p.name} className="card">
                <div className="browser">
                  <div className="bar"><span className="dot" /><span className="dot" /><span className="dot" /><span style={{ marginLeft: 8 }}>{p.url.replace("https://www.", "").replace("https://", "")}</span></div>
                  <HomepageMock p={p} />
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                  <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <div className="card-links">
                    <a href={p.url} target="_blank" rel="noreferrer">View Live Project ↗</a>
                    {p.caseStudy && <a href="#case-study">View Case Study ↓</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: 24 }}><a className="btn btn-outline" href="/work">View All Projects →</a></div>
        </section>

        <section id="case-study">
          <div className="dark-section">
            <p className="kicker">Case Study — Penguin Swim School</p>
            <h2>Two years of work on one brand&apos;s online presence.</h2>
            <p><strong>Project overview:</strong> Penguin Swim School is a Singapore swimming school offering lessons for infants through adults, including private, group, ladies-only and special-needs classes.</p>
            <p><strong>Business context:</strong> Parents and adult learners need to quickly understand programmes, coaches, locations and how to enquire.</p>
            <p><strong>Challenge:</strong> Present a wide programme range clearly, without overwhelming a first-time visitor.</p>
            <p><strong>Proposed solution:</strong> A structured, programme-led website with clear sections for all-ages programmes, expert coaches, flexible locations and safety.</p>
            <p><strong>My responsibilities:</strong> Work on the brand&apos;s website and online presence over two years, as stated in Zubair&apos;s own account of this work.</p>
            <p><strong>Technologies:</strong> Website development and SEO, as presented in this portfolio.</p>
            <p><strong>Verified results:</strong> None are claimed here. No traffic, revenue, conversion or ranking figures have been verified for this project, so none are shown.</p>
            <p><a href="https://www.penguinswimschool.sg/" target="_blank" rel="noreferrer" style={{ color: "#fff", fontWeight: 700 }}>Visit the live project ↗</a></p>
          </div>
          <p className="note">Other projects above are shown as a gallery only. Detailed case studies are not published for them because the same level of verified project detail is not available — and inventing it would be misleading.</p>
        </section>

        <section id="services">
          <p className="kicker">Services</p>
          <h2>What I can build for your business.</h2>
          <p className="sub">Clear services, clear value. Every service starts with the same offer: see your website first, pay after you approve it.</p>
          <div className="grid3">
            {services.map((s) => (
              <article key={s.title} className="service">
                <div className="icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact">{s.cta} →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="about">
          <div>
            <p className="kicker">About Me</p>
            <h2>A developer focused on websites that work for the business, not just look good.</h2>
            <p>I am Zubair Bin Zahid, a freelance web developer. My work covers website development, social media management and SEO, with recent client work in WordPress, website revamps and cleanup, and university portals and tools.</p>
            <p><strong>My philosophy is simple:</strong> build something the client can see and judge first, make it fast and easy to understand, and only then ask for payment. A website should explain the business, earn trust, and make contacting you easy.</p>
            <p>I work with businesses in Singapore, Ireland and online, and I am comfortable taking a project from a first message through to a live site on the client&apos;s own domain.</p>
          </div>
          <aside className="skill-box">
            <h3>Technical skills</h3>
            <div className="tags">
              {["Next.js", "React", "WordPress", "SEO", "Performance Optimisation", "Full-Stack Development", "AI Chatbots", "Python / Flask"].map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
            <p className="note">No qualifications, certifications or employment history are listed here, because none have been verified for this portfolio. The work above is the evidence.</p>
            <p><a href="#contact" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>Work with me →</a></p>
          </aside>
        </section>

        <section id="process">
          <p className="kicker">How I Work</p>
          <h2>A structured process, from first message to launch.</h2>
          <div className="steps">
            <div className="step"><b>01</b><h3>Discover and Plan</h3><p>Tell me about your business, customers and goals. I plan the pages and structure before building.</p></div>
            <div className="step"><b>02</b><h3>Design and Develop</h3><p>I build your full website preview, designed for mobile first and for enquiries.</p></div>
            <div className="step"><b>03</b><h3>Test and Optimise</h3><p>We review it together, fix issues, and optimise speed and readability.</p></div>
            <div className="step"><b>04</b><h3>Launch and Support</h3><p>Once you approve it, the site goes live on your domain — then payment.</p></div>
          </div>
        </section>

        <section id="contact">
          <p className="kicker">Contact</p>
          <h2>Have a Project in Mind? Let&apos;s Build Something Great.</h2>
          <p className="sub">Fill in the form and it will open WhatsApp with your enquiry pre-filled — press send there to submit it. That is the real submission step; this form does not pretend to send an email on its own.</p>
          <form className="form" onSubmit={submit} noValidate>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name *</label>
                <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
                <span className="error">{errors.name || ""}</span>
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" />
                <span className="error">{errors.email || ""}</span>
              </div>
              <div className="field">
                <label htmlFor="type">Project type *</label>
                <select id="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  <option value="">Choose a project type</option>
                  <option>New website</option><option>WordPress website</option><option>Website redesign</option><option>SEO / audit</option><option>Speed optimisation</option><option>AI integration</option><option>Other</option>
                </select>
                <span className="error">{errors.type || ""}</span>
              </div>
              <div className="field">
                <label htmlFor="budget">Budget (optional)</label>
                <select id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Prefer not to say yet</option>
                  <option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $5,000</option><option>$5,000+</option>
                </select>
                <span className="error"></span>
              </div>
              <div className="field full">
                <label htmlFor="details">Project details *</label>
                <textarea id="details" rows={5} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="What does your business do, and what should the website achieve?" />
                <span className="error">{errors.details || ""}</span>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Send Project Enquiry via WhatsApp</button>
            {status && <p className={`status ${Object.keys(errors).length ? "err" : "ok"}`} role="status">{status}</p>}
            <p className="note">Prefer email? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. WhatsApp (fastest): <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">+92 329 7708264</a>. Portfolio: <a href={SITE}>{SITE}</a></p>
          </form>
        </section>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <div>
            <a href="#home" className="logo">Zubair<span> Bin Zahid</span></a>
            <p style={{ maxWidth: 420 }}>Web Developer, WordPress Specialist, SEO Expert and AI Solutions Developer — building high-performance websites that help businesses grow.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#home">Home</a> · <a href="/work">Work</a> · <a href="#services">Services</a> · <a href="#about">About</a> · <a href="#contact">Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} Zubair Bin Zahid · <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href="#home">Back to top ↑</a></p>
        </div>
      </footer>
    </>
  );
}
