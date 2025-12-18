import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import { theme } from "../theme";

export default function Home({onTab}) {
  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        padding: 16,
        paddingBottom: 80,
        maxWidth: 420,
        margin: "0 auto"
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Hello, Emma 🌸</h2>
        <p style={{ color: theme.muted, marginTop: 4 }}>
          Cycle Day 12 · Follicular Phase
        </p>
      </div>

      {/* Next Period */}
      <Card
        style={{
          background:
            "linear-gradient(135deg, #F58CA8, #FBD0DA)",
          color: "#fff",
          marginBottom: 16
        }}
      >
        <h3 style={{ margin: 0 }}>Next Period in</h3>
        <h1 style={{ margin: "8px 0" }}>5 Days</h1>
        <div
          style={{
            height: 6,
            background: "rgba(255,255,255,0.4)",
            borderRadius: 10
          }}
        >
          <div
            style={{
              width: "60%",
              height: "100%",
              background: "#fff",
              borderRadius: 10
            }}
          />
        </div>
      </Card>

      {/* Mood + Energy */}
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Card style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 32 }}>😊</div>
          <p>Happy</p>
        </Card>

        <Card style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 32 }}>⚡</div>
          <p>Energy: Medium</p>
        </Card>
      </div>

      {/* Tip */}
      <Card>
        <h4>Today’s Tip 🌿</h4>
        <p style={{ color: theme.muted }}>
          Stay hydrated & do some light stretching.
        </p>
      </Card>

      <BottomNav active="Home" onChange={onTab} />
    </div>
  );
}