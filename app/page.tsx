export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "48px" }}>Ray'sStream</h1>
      <p style={{ fontSize: "20px" }}>Website is working.</p>

      <video
        controls
        width="100%"
        style={{ maxWidth: "800px", marginTop: "30px" }}
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
    </main>
  );
} 
