export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          color: "#facc15",
          fontSize: "4rem",
          marginBottom: "1rem",
        }}
      >
        Ray'snote
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "700px",
          marginBottom: "2rem",
        }}
      >
        Welcome to Ray'snote, your independent online publishing platform.
      </p>

      <button
        style={{
          background: "#facc15",
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

