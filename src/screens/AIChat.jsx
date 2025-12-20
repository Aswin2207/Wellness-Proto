
import PageWrapper from "../pageWrapper";
import { card, sectionTitle, colors } from "../theme";

export default function AI() {
  return (
    <PageWrapper active="AI">
      <div style={card}>
        <h2>🧬 Your Digital Twin</h2>
        <p style={{ color: colors.muted }}>
          AI synced with your cycle data
        </p>
      </div>

      <h3 style={sectionTitle}>AI Insights</h3>
      <Insight title="Exercise" value="Strength training recommended" />
      <Insight title="Nutrition" value="Increase protein intake" />
      <Insight title="Mood" value="Stable & focused" />

      <div style={{ ...card, marginTop: 24 }}>
        <p style={{ fontSize: 13, color: colors.muted }}>
          Ask your AI anything
        </p>
        <input
          placeholder="Ask about your cycle..."
          style={{
            width: "100%",
            marginTop: 8,
            padding: 12,
            borderRadius: 12,
            border: `1px solid ${colors.border}`
          }}
        />
      </div>
    </PageWrapper>
  );
}

function Insight({ title, value }) {
  return (
    <div style={card}>
      <p style={{ fontSize: 12, color: colors.muted }}>{title}</p>
      <strong>{value}</strong>
    </div>
  );
}
