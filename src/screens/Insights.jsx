import PageWrapper from "../pageWrapper";

export default function Insights() {
  return (
    <PageWrapper>
      <h2>Insights</h2>

      <div style={card}>
        <p>Energy Trend</p>
        <strong>Increasing ↑</strong>
      </div>

      <div style={card}>
        <p>Mood Prediction</p>
        <strong>Stable</strong>
      </div>

      <div style={card}>
        <p>Hormonal Phase</p>
        <strong>Follicular</strong>
      </div>
    </PageWrapper>
  );
}

const card = {
  background: "#fff",
  borderRadius: 20,
  padding: 16,
  marginBottom: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};
