export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#facc15",
          marginBottom: "1rem",
        }}
      >
        Ray'snote
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "700px",
          marginBottom: "2rem",
        }}
      >
        Welcome to Ray'snote — your independent online publishing platform for
        news, business, technology, entertainment, and creative stories.
      </p>

      <button
        style={{
          backgroundColor: "#facc15",
          color: "#000",
          border: "none",
          borderRadius: "10px",
          padding: "14px 28px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </main>
  );
} 
