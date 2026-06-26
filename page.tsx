export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "48px", color: "#facc15" }}>Ray'snote</h1>

      <p style={{ fontSize: "22px", maxWidth: "700px" }}>
        Independent online publishing for news, stories, business,
        entertainment, culture, and creative voices.
      </p>

      <button style={{
        background: "#facc15",
        color: "black",
        border: "none",
        padding: "14px 24px",
        borderRadius: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "20px"
      }}>
        Subscribe
      </button>

      <h2 style={{ marginTop: "50px" }}>Latest Articles</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {["Breaking News", "Business", "Entertainment", "Technology", "Opinion", "Creator Spotlight"].map((title) => (
          <article key={title} style={{
            background: "#1e293b",
            padding: "24px",
            borderRadius: "14px",
            border: "1px solid #334155"
          }}>
            <h3>{title}</h3>
            <p>
              Read original Ray'snote stories, updates, interviews, and features.
            </p>
            <button style={{
              background: "white",
              color: "black",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              fontWeight: "bold"
            }}>
              Read More
            </button>
          </article>
        ))}
      </div>

      <footer style={{ marginTop: "60px", color: "#94a3b8" }}>
        © 2026 Ray'snote Publishing
      </footer>
    </main>
  );
} 
