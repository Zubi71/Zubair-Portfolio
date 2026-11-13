import { projects, shots } from "./projects-data";

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
  const shown = projects.slice(0, 6);

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <main className="wrap">
        <section className="hero reveal" id="home">
          <div>
            <p className="eyebrow">Web Developer · WordPress Specialist · SEO Expert · AI Solutions</p>
            <h1>I Build <span className="hl">High-Performance Websites</span> That Help Businesses Grow.</h1>
            <p className="lead">I run a mini agency with developers of every kind, SEO experts and social media managers. If you need any work of this kind — a website, SEO, or social media management — we are available. I help businesses build modern websites, improve search visibility, optimise performance, and integrate intelligent digital solutions that support real business goals.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/work">Explore My Work</a>
              <a className="btn btn-outline" href="/contact">Let&apos;s Discuss Your Project</a>
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
              <div className="mini-card"><b>50+ projects done</b><span>Websites, SEO and social media work</span></div>
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
                <a href="/contact">{s.cta} →</a>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="cta-banner">
            <h2>Have a project in mind?</h2>
            <p>Tell me about your business and I will show you what your website could look like — before you pay anything.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/contact">Start Your Project →</a>
              <a className="btn btn-outline" href="/about">More About Me</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
