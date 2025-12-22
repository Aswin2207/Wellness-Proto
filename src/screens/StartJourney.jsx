import Card from "../components/Card";
import { theme } from "../theme";

export default function StartJourney({ onNext }) {
  return (
    <div style={container}>
      <Card style={{ textAlign: "center" }}>
        <div style={{ fontSize: 42 }}>🌙</div>
        <h2 style={{ margin: "12px 0" }}>Her Solace</h2>
        <p style={sub}>
          Let’s understand your cycle and personalize your experience.
        </p>

        <button style={primaryBtn} onClick={onNext}>
          Start Your Journey
        </button>
      </Card>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: theme.bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16
};

const sub = {
  fontSize: 14,
  color: theme.muted,
  marginBottom: 24
};

const primaryBtn = {
  width: "100%",
  padding: 14,
  borderRadius: 18,
  border: "none",
  background: "rgba(219, 188, 191)",
  fontWeight: 600,
  cursor: "pointer"
};