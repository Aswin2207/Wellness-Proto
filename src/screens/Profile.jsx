import { useState } from "react";
import PageWrapper from "../pageWrapper";

export default function Profile() {
  const [open, setOpen] = useState("mother");

  return (
    <PageWrapper active="Profile">
      {/* ================= HEADER ================= */}
      <div style={headerCard}>
        <div style={logo}><img style={{height:"60px"}} src="well_logo.jpeg"/></div>
        <h2 style={{ marginTop: 8 }}>Her Solace</h2>
        <p style={{ fontSize: 12, opacity: 0.85 }}>
          Hormonal Intelligence for Every Stage
        </p>
      </div>

      {/* ================= PROFILES ================= */}
      <ProfileCard
        title="Sarah"
        subtitle="Self"
        active={open === "mother"}
        onClick={() => setOpen(open === "mother" ? null : "mother")}
        details={{
          Age: "32 years",
          "Cycle Length": "28 days",
          "Last Period": "15 days ago",
          "Cycle Status": "Regular"
        }}
      />

      <ProfileCard
        title="Lily"
        subtitle="Daughter • Age 13"
        active={open === "daughter"}
        onClick={() => setOpen(open === "daughter" ? null : "daughter")}
        details={{
          Age: "13 years",
          "Cycle Stage": "Menarche",
          Tracking: "Education mode",
          Status: "Monitoring"
        }}
      />

      {/* ================= SETTINGS ================= */}
      <div style={settingsCard}>
        <h4 style={{ marginBottom: 12 }}>Settings</h4>
        <Toggle label="Anonymous Mode" />
        <Toggle label="Notifications" defaultOn />
        <Toggle label="Privacy Mode" />
      </div>
    </PageWrapper>
  );
}

/* ================= COMPONENTS ================= */

function ProfileCard({ title, subtitle, active, onClick, details }) {
  return (
    <div
      style={{
        ...card,
        background: "#e1b8be",
        color: "#fff",
        boxShadow: active
          ? "0 18px 40px rgba(0,0,0,0.18)"
          : "0 8px 20px rgba(0,0,0,0.1)",
        transform: active ? "scale(1.01)" : "scale(1)",
        transition: "all .25s ease"
      }}
    >
      <div style={profileRow} onClick={onClick}>
        <div style={avatar}>{title[0]}</div>

        <div>
          <strong>{title}</strong>
          <p style={{ fontSize: 12, opacity: 0.9 }}>{subtitle}</p>
        </div>

        <span style={{ marginLeft: "auto", fontSize: 14 }}>
          {active ? "▲" : "▼"}
        </span>
      </div>

      {active && (
        <div style={detailsBox}>
          {Object.entries(details).map(([k, v]) => (
            <Detail key={k} label={k} value={v} />
          ))}
        </div>
      )}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div style={detailRow}>
      <span style={{ fontSize: 13 }}>{label}</span>
      <strong style={{ fontSize: 13 }}>{value}</strong>
    </div>
  );
}

function Toggle({ label, defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div style={toggleRow} onClick={() => setOn(!on)}>
      <span>{label}</span>

      <div
        style={{
          ...toggleTrack,
          background: on ? "#C2185B" : "#DDD"
        }}
      >
        <div
          style={{
            ...toggleThumb,
            transform: on ? "translateX(18px)" : "translateX(0)"
          }}
        />
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const card = {
  background: "#fff",
  borderRadius: 20,
  padding: 16,
  marginBottom: 16
};

const headerCard = {
  ...card,
  textAlign: "center",
  background: "rgb(225, 184, 190)",
  color: "#fff"
};

const logo = {
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#E8A6C9,#C2185B)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
  margin: "0 auto"
};

const profileRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  cursor: "pointer"
};

const avatar = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "#F3C9DC",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  color: "#C2185B"
};

const detailsBox = {
  marginTop: 12,
  paddingTop: 12,
  borderTop: "1px solid rgba(255,255,255,0.3)",
  animation: "fadeSlide .25s ease"
};

const detailRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 8
};

const settingsCard = {
  ...card,
  background: "#f4f3f9"
};

/* ================= TOGGLES ================= */

const toggleRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 0",
  cursor: "pointer"
};

const toggleTrack = {
  width: 36,
  height: 18,
  borderRadius: 999,
  position: "relative",
  transition: "background .2s ease"
};

const toggleThumb = {
  width: 14,
  height: 14,
  borderRadius: "50%",
  background: "#fff",
  position: "absolute",
  top: 2,
  left: 2,
  transition: "transform .2s ease"
};

/* ================= ANIMATION ================= */

const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
