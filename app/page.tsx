export default function Home() {
  return (
    <main className="page">
      <h1>Ray'snote</h1>
      <p>
        Independent online publishing for news, business, entertainment,
        technology, opinion, and creative voices.
      </p>

      <button>Subscribe</button>

      <section>
        <h2>Latest Articles</h2>
        <div className="grid">
          {["Breaking News", "Business", "Technology", "Entertainment", "Opinion", "Creator Spotlight"].map((title) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>Read original stories and features from Ray'snote.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
} 

