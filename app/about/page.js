export const metadata = {
  title: "About — Zubair Bin Zahid",
  description: "Zubair Bin Zahid runs a mini agency of developers, SEO experts and social media managers, building websites that work for the business, not just look good.",
  alternates: { canonical: "https://zubair.dyznoai.com/about" },
};

export default function About() {
  return (
    <main className="wrap">
      <section className="page-hero">
        <p className="kicker">About Me</p>
        <h1>A mini agency focused on websites that work for the business, not just look good.</h1>
        <p className="sub">Web development, social media management and SEO — from one team, under one roof.</p>
      </section>

      <section className="about">
        <div>
          <p>I am Zubair Bin Zahid, owner of a mini agency. My team includes developers of every kind, SEO experts and social media managers, so whether you need a website, search visibility, or social media management, we are available for that work. My work covers website development, social media management and SEO, with recent client work in WordPress, website revamps and cleanup, and university portals and tools.</p>
          <p><strong>My philosophy is simple:</strong> build something the client can see and judge first, make it fast and easy to understand, and only then ask for payment. A website should explain the business, earn trust, and make contacting you easy.</p>
          <p>My team and I work with businesses in Singapore, Ireland and online, and we are comfortable taking a project from a first message through to a live site on the client&apos;s own domain.</p>
        </div>
        <aside className="skill-box">
          <h3>Technical skills</h3>
          <div className="tags">
            {["Next.js", "React", "WordPress", "SEO", "Performance Optimisation", "Full-Stack Development", "AI Chatbots", "Python / Flask"].map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
          <p className="note">No qualifications, certifications or employment history are listed here, because none have been verified for this portfolio. The work above is the evidence.</p>
          <p><a href="/contact" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>Work with me →</a></p>
        </aside>
      </section>

      <section>
        <p className="kicker">How I Work</p>
        <h2>A structured process, from first message to launch.</h2>
        <div className="steps">
          <div className="step"><b>01</b><h3>Discover and Plan</h3><p>Tell me about your business, customers and goals. I plan the pages and structure before building.</p></div>
          <div className="step"><b>02</b><h3>Design and Develop</h3><p>I build your full website preview, designed for mobile first and for enquiries.</p></div>
          <div className="step"><b>03</b><h3>Test and Optimise</h3><p>We review it together, fix issues, and optimise speed and readability.</p></div>
          <div className="step"><b>04</b><h3>Launch and Support</h3><p>Once you approve it, the site goes live on your domain — then payment.</p></div>
        </div>
      </section>

      <section>
        <div className="cta-banner">
          <h2>Want to work together?</h2>
          <p>See your website first, pay after you approve it. That is the whole offer.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/contact">Start Your Project →</a>
            <a className="btn btn-outline" href="/work">See the Portfolio</a>
          </div>
        </div>
      </section>
    </main>
  );
}
