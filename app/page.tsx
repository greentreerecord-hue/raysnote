"export default function Home() {
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
      <h1 style={{ fontSize: "56px", color: "#facc15" }}>Ray'snote</h1>

      <p style={{ fontSize: "22px", maxWidth: "700px" }}>
        Independent online publishing for news, business, technology,
        entertainment, opinion, and creative voices.
      </p>

      <button
        style={{
          background: "#facc15",
          color: "black",
          border: "none",
          padding: "14px 24px",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Subscribe
      </button>
    </main>
  );
} 
