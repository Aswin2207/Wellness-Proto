import PageWrapper from "../pageWrapper";
import { card, sectionTitle, pill, colors } from "../theme";

export default function Home() {
  return (
    <PageWrapper active="Home">
      {/* HERO */}
      <div
        style={{
          ...card,
          background: "linear-gradient(135deg,#E8A6C9,#F3C9DC)",
          color: "#fff"
        }}
      >
        <h2>Follicular Phase</h2>
        <p>Day 8 of 28 • Energy Rising</p>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <span style={pill}>🌱 Growth</span>
          <span style={pill}>⚡ High Energy</span>
        </div>
      </div>

      {/* TODAY */}
      <div>
        <h3 style={sectionTitle}>Today at a glance</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Metric title="Mood" value="😊 Energized" />
          <Metric title="Energy" value="85%" />
          <Metric title="Sleep" value="7.4 hrs" />
          <Metric title="Stress" value="Low" />
        </div>
      </div>

      {/* UPCOMING */}
      <div>
        <h3 style={sectionTitle}>Upcoming</h3>
        <Info text="Ovulation window • Jan 26–28" />
        <Info text="Next period • Feb 8" />
      </div>
    </PageWrapper>
  );
}

function Metric({ title, value }) {
  return (
    <div style={card}>
      <p style={{ fontSize: 12, color: colors.muted }}>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

function Info({ text }) {
  return (
    <div style={card}>
      <p>{text}</p>
    </div>
  );
}