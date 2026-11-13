export const metadata = {
  title: "Blog — Zubair Bin Zahid",
  description: "Articles on web development, WordPress, SEO and AI solutions by Zubair Bin Zahid.",
  alternates: { canonical: "https://zubair.dyznoai.com/blog" },
};

export default function Blog() {
  return (
    <main className="wrap">
      <section className="page-hero">
        <p className="kicker">Blog</p>
        <h1>Notes on websites, SEO and AI.</h1>
        <p className="sub">Practical articles on building websites that bring enquiries — written from real client work.</p>
      </section>

      <section>
        <div className="empty-state">
          <h2>Articles coming soon.</h2>
          <p>No articles have been published yet. The first ones will cover the topics clients ask about most — choosing a website, WordPress, local SEO and getting found on Google.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/contact">Suggest a Topic</a>
            <a className="btn btn-outline" href="/work">Browse the Portfolio</a>
          </div>
        </div>
      </section>
    </main>
  );
}
