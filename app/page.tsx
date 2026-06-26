"use client";

import { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState(0);
  const [subs, setSubs] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [text, setText] = useState("");

  function addComment() {
    if (!text.trim()) return;
    setComments([text, ...comments]);
    setText("");
  }

  return (
    <main style={{ minHeight: "100vh", background: "#050505", color: "white", padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 42 }}>Ray'sStream</h1>
      <p>Videos, likes, comments, views, and subscribe.</p>

      <video controls autoPlay muted loop style={{ width: "100%", maxWidth: 800, borderRadius: 12 }}>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>

      <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={() => setLikes(likes + 1)}>👍 Like {likes}</button>
        <button onClick={() => setSubs(subs + 1)}>🔴 Subscribe {subs}</button>
        <button>👁 Views 1</button>
        <button onClick={() => navigator.share?.({ title: "Ray'sStream", url: window.location.href })}>Share</button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h2>Comments</h2>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment"
          style={{ padding: 12, width: "70%" }}
        />
        <button onClick={addComment} style={{ padding: 12, marginLeft: 8 }}>Post</button>

        {comments.map((c, i) => (
          <p key={i} style={{ background: "#111", padding: 12, borderRadius: 8 }}>{c}</p>
        ))}
      </div>
    </main>
  );
} 
