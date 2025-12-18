import Card from "../components/Card";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { theme } from "../theme";

export default function Chat({onTab}) {
  return (
    <div style={container}>
      <Header title="🌙 Luna AI" />

      <Card style={bubbleUser}>
        Why am I so tired before my period?
      </Card>

      <Card style={bubbleAI}>
        Fatigue before your period is due to
        a drop in progesterone levels. Totally normal 💕
      </Card>

      <div style={inputBar}>
        <input placeholder="Ask Luna anything…" style={input} />
        <button style={send}>Send</button>
      </div>

           <BottomNav active="Insights" onChange={onTab} />
    </div>
  );
}

const container = {
  background: theme.bg,
  minHeight: "100vh",
  padding: 16,
  paddingBottom: 120,
  maxWidth: 420,
  margin: "0 auto"
};

const bubbleUser = {
  marginBottom: 12,
  background: "#fff",
  alignSelf: "flex-end"
};

const bubbleAI = {
  marginBottom: 12,
  background: theme.secondary
};

const inputBar = {
  position: "fixed",
  bottom: 60,
  maxWidth: 420,
  width: "100%",
  display: "flex",
  gap: 8,
  padding: 16
};

const input = {
  flex: 1,
  padding: 10,
  borderRadius: 12,
  border: "1px solid #ccc"
};

const send = {
  background: theme.primary,
  color: "#fff",
  border: "none",
  borderRadius: 12,
  padding: "10px 16px"
};