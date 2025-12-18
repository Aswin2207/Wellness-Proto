import { theme } from "../theme";

const tabs = [
  { label: "Home", icon: "🏠" },
  { label: "Cycle", icon: "📅" },
  { label: "Fertility", icon: "❤️" },
  { label: "Insights", icon: "💬" },
  { label: "Profile", icon: "👤" }
];

export default function BottomNav({ active = "Home", onChange }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        maxWidth: 420,
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0 8px",
        background: "#fff",
        borderTop: "1px solid #eee",
        zIndex: 10
      }}
    >
      {tabs.map(tab => {
        const isActive = active === tab.label;

        return (
          <div
            key={tab.label}
            onClick={() => onChange?.(tab.label)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 11,
              color: isActive ? theme.primary : theme.muted,
              cursor: "pointer"
            }}
          >
            <div style={{ fontSize: 20, lineHeight: "20px" }}>
              {tab.icon}
            </div>
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}