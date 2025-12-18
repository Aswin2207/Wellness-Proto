import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { theme } from "../theme";

export default function Fertility({onTab}) {
  return (
    <div style={container}>
      <Header title="Fertility" />

      <Card style={center}>
        <h3>Ovulation In</h3>
        <h1 style={{ color: theme.primary }}>3 Days</h1>
        <div style={{ fontSize: 24 }}>❤️ ❤️ ❤️</div>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <h4>Fertile Window</h4>
        <p>April 11 – April 16</p>
        <p style={{ color: theme.muted }}>
          Your most fertile days.
        </p>
      </Card>

          <BottomNav active="Fertility" onChange={onTab} />
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

const center = {
  textAlign: "center",
  padding: 24
};