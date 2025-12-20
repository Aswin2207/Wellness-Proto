
import PageWrapper from "../pageWrapper";
import { card, sectionTitle, colors } from "../theme";

export default function Fertility() {
  return (
    <PageWrapper active="Fertility">
      <div
        style={{
          ...card,
          background: "linear-gradient(135deg,#F3C9DC,#FCE4EC)"
        }}
      >
        <h2>Fertility Status</h2>
        <p>Approaching fertile window</p>
        <strong>Ovulation in ~10 days</strong>
      </div>

      <h3 style={sectionTitle}>Fertile Window</h3>
      <Progress percent={60} label="Jan 26–28" />

      <h3 style={sectionTitle}>Body signals</h3>
      <Insight text="Estrogen levels rising" />
      <Insight text="Cervical mucus changes expected" />

      <h3 style={sectionTitle}>Recommendations</h3>
      <Insight text="Light cardio & yoga" />
      <Insight text="Increase hydration" />
    </PageWrapper>
  );
}

function Progress({ percent, label }) {
  return (
    <div style={card}>
      <p>{label}</p>
      <div
        style={{
          height: 8,
          background: colors.border,
          borderRadius: 8,
          marginTop: 8
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: colors.primary,
            borderRadius: 8
          }}
        />
      </div>
    </div>
  );
}

function Insight({ text }) {
  return (
    <div style={card}>
      <p>{text}</p>
    </div>
  );
}
