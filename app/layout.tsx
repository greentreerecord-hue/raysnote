const articles = [
  "Breaking News",
  "Business",
  "Technology",
  "Entertainment",
  "Opinion",
  "Creator Spotlight",
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Ray'snote</h1>
        <p>
          Independent online publishing for news, stories, business,
          entertainment, technology, and creative voices.
        </p>
        <button>Subscribe</button>
      </section>

      <section>
        <h2>Latest Articles</h2>
        <div className="grid">
          {articles.map((title) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>Original stories and features from Ray'snote.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
} 
