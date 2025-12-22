import PageWrapper from "../pageWrapper";
import { card, sectionTitle, colors } from "../theme";

export default function Home() {
  return (
    <PageWrapper active="Home">
      {/* ================= HERO ================= */}
      <div
        style={{
          ...card,
          background: "#c0acc5",
          color: "#fff"
        }}
      >
        <h2 style={{ marginBottom: 4 }}>
          Current Cycle Phase: <b>Follicular</b>
        </h2>

        <p style={{ fontSize: 13, opacity: 0.95 }}>
          Day 8 of 28 • Energy building • Optimal for high-intensity workouts
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          <PhaseIcon label="Seed" />
          <PhaseIcon label="Bloom" />
          <PhaseIcon label="Moon" />
          <PhaseIcon label="Flow" />
        </div>
      </div>

      {/* ================= REAL TIME DATA ================= */}
      <h3 style={sectionTitle}>Your Real-Time Data</h3>

      <div style={grid}>
        <Metric label="Cycle Day" value="Day 8" />
        <Metric label="Cycle Length" value="28 days" />

        <Metric label="Body Temperature" value="36.4°C" />
        <Metric label="Resting Heart Rate" value="62 bpm" />

        <Metric label="Mood" value="Energetic 😊" />
        <Metric label="Energy Level" value="High (85%)" />

        <Metric label="Sleep Duration" value="7.5 hrs" />
        <Metric label="Sleep Quality" value="Good" />

        <Metric label="Activity" value="8,500 steps" />
        <Metric label="Exercise Readiness" value="High" />

        <Metric label="Hydration" value="2.1 L" />
        <Metric label="Nutrition Balance" value="Good" />

        <Metric label="Stress Level" value="Low" />
        <Metric label="Recovery Status" value="Optimal" />

        <Metric label="Libido" value="Moderate ↑" />
        <Metric label="Focus Level" value="High" />

        <Metric label="Hormone Trend" value="Estrogen Rising" />
        <Metric label="Fertility Status" value="Approaching Window" />
      </div>

      {/* ================= UPCOMING ================= */}
      <h3 style={{ ...sectionTitle, marginTop: 16 }}>What’s Next</h3>

      <Info text="🌸 Ovulation window • Jan 26 – Jan 28" />
      <Info text="🩸 Next period • Feb 8" />
      <Info text="💪 Best workouts • HIIT & Strength" />
      <Info text="🥗 Nutrition focus • Protein & Iron" />
    </PageWrapper>
  );
}

/* ================= COMPONENTS ================= */

function Metric({ label, value }) {
  return (
    <div
      style={{
        ...card,
        padding: 12,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <span style={{ fontSize: 12, color: colors.muted }}>
        {label}
      </span>

      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "#fff",
          background: "#debabc",
          padding: "4px 8px",
          borderRadius: 12,
          textAlign: "right"
        }}
      >
        {value}
      </span>
    </div>
  );
}

function Info({ text }) {
  return (
    <div style={{ ...card, padding: 14 }}>
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  );
}

function PhaseIcon({ label }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "#dfb8bb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 600
      }}
    >
      {label[0]}
    </div>
  );
}

/* ================= LAYOUT ================= */

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12
};
