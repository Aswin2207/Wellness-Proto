import {
  IoHomeOutline,
  IoFlowerOutline,
  IoSparklesOutline,
  IoNutritionOutline,
  IoPersonOutline
} from "react-icons/io5";

import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

 const tabs = [
  { label: "Home", path: "/home", icon: IoHomeOutline },
  { label: "Hormone Pattern", path: "/fertility", icon: IoFlowerOutline },
  { label: "AI Insights", path: "/ai", icon: IoSparklesOutline },
  { label: "Diet Chart", path: "/insights", icon: IoNutritionOutline },
  { label: "Profile", path: "/profile", icon: IoPersonOutline }
];


  return (
    <div style={nav}>
      {tabs.map((tab) => {
        const active = location.pathname === tab.path;
          const Icon = tab.icon;

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
              <Icon size={22} />
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