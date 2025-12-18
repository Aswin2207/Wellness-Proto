import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

export default function Profile({onTab}) {
  return (
    <div style={container}>
      <Header title="My Profile" />

      <Card>
        <p>👤 Anonymous Mode Enabled</p>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <p>Cycle Length: 28 days</p>
        <p>Notifications: Enabled</p>
        <p>Privacy Mode: ON</p>
      </Card>

      <BottomNav active="Profile" onChange={onTab} />
    </div>
  );
}

const container = {
  background: "#FFF1F4",
  minHeight: "100vh",
  padding: 16,
  paddingBottom: 80,
  maxWidth: 420,
  margin: "0 auto"
};