const EMAIL = "zahidzubair489@gmail.com";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <a href="/" className="logo">Zubair<span> Bin Zahid</span></a>
          <p style={{ maxWidth: 420 }}>Web Developer, WordPress Specialist, SEO Expert and AI Solutions Developer — building high-performance websites that help businesses grow.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/">Home</a> · <a href="/work">Portfolio</a> · <a href="/about">About</a> · <a href="/blog">Blog</a> · <a href="/contact">Contact</a>
        </nav>
        <p>© {new Date().getFullYear()} Zubair Bin Zahid · <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href="/">Back to home ↑</a></p>
      </div>
    </footer>
  );
}
