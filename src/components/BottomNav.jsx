import { theme } from "../theme";

const tabs = [
  { label: "Home", icon: "🏠" },
  { label: "Cycle", icon: "📅" },
  { label: "Fertility", icon: "🌙" },
  { label: "Insights", icon: "💬" },
  { label: "Profile", icon: "👤" }
];

import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Home", path: "/home", icon: "🏠" },
    { label: "Fertility", path: "/fertility", icon: "🌸" },
    { label: "AI", path: "/ai", icon: "🤖" },
     { label: "Insights",path: "/insights", icon: "💬" },
    { label: "Profile",path: "/profile", icon: "👤" }
  ];

  return (
    <div style={nav}>
      {tabs.map((tab) => {
        const active = location.pathname === tab.path;

        return (
          <div
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={{
              ...item,
              color: active ? "#E8A6C9" : "#7C6B78"
            }}
          >
            <span style={{ fontSize: 22, lineHeight: "22px" }}>
              {tab.icon}
            </span>
            <span style={{ fontSize: 11, marginTop: 4 }}>
              {tab.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

const nav = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: 64,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "rgba(255,255,255,0.95)",
  backdropFilter: "blur(12px)",
  borderTop: "1px solid #EADCE4",
  zIndex: 100,
  width: "100vw"
};

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  minWidth: 64,
  userSelect: "none"
};