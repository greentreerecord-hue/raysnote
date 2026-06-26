export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="/images/logo.png"
          alt="Ray'snote Logo"
          style={{
            width: "140px",
            marginBottom: "20px",
          }}
        />

        <h1 style={{ fontSize: "56px", color: "#facc15" }}>
          Ray'snote
        </h1>

        <p style={{ fontSize: "22px", maxWidth: "700px", margin: "20px auto" }}>
          Independent online publishing for news, business,
          entertainment, technology, opinion, and creative voices.
        </p>

        <button
          style={{
            background: "#facc15",
            color: "#000",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </header>

      <section>
        <h2 style={{ marginBottom: "25px" }}>Latest Articles</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Breaking News",
            "Business",
            "Technology",
            "Entertainment",
            "Opinion",
            "Creator Spotlight",
          ].map((title) => (
            <article
              key={title}
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "14px",
              }}
            >
              <h3>{title}</h3>

              <p>
                Read original articles, interviews, features and
                exclusive stories from Ray'snote.
              </p>

              <button
                style={{
                  background: "white",
                  color: "black",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "70px",
          color: "#94a3b8",
        }}
      >
        © 2026 Ray'snote Publishing. All Rights Reserved.
      </footer>
    </main>
  );
} 

