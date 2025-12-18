import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { theme } from "../theme";

export default function Calendar({onTab}) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={container}>
      <Header title="April 2024" />

      <Card>
        <div style={grid}>
          {days.map(day => (
            <div
              key={day}
              style={{
                ...cell,
                background: day === 25 ? theme.primary : "transparent",
                color: day === 25 ? "#fff" : theme.text
              }}
            >
              {day}
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <h4>April 10 Details</h4>
        <p>Period: Medium Flow</p>
        <p>Symptoms: Cramps, Headache</p>
        <p>Note: Feeling tired</p>
      </Card>

    
    <BottomNav active="Cycle" onChange={onTab} />
    </div>
  );
}

const container = {
  background: theme.bg,
  minHeight: "100vh",
  padding: 16,
  paddingBottom: 80,
  maxWidth: 420,
  margin: "0 auto"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(7,1fr)",
  gap: 8,
  textAlign: "center"
};

const cell = {
  padding: 10,
  borderRadius: 10,
  fontSize: 14
};