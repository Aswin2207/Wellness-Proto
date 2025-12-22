import { useState } from "react";
import PageWrapper from "../pageWrapper";

export default function Profile() {
  const [open, setOpen] = useState("mother");

  return (
    <PageWrapper active="Profile">
      {/* ================= HEADER CARD ================= */}
      <div style={headerCard}>
        <div style={logo}>🌙</div>
        <h2 style={{ margin: 8 }}>Her Solace</h2>
        <p style={{ fontSize: 12, opacity: 0.8 }}>
          Hormonal Intelligence for Every Stage
        </p>
      </div>

      {/* ================= MOTHER PROFILE ================= */}
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

      {/* ================= DAUGHTER PROFILE ================= */}
      <ProfileCard
        title="Daughter"
        subtitle="Lily (Age 13)"
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
      <div style={card}>
        <Setting label="Anonymous Mode" value="Enabled" />
        <Setting label="Notifications" value="On" />
        <Setting label="Privacy Mode" value="Enabled" />
      </div>
    </PageWrapper>
  );
}

/* ================= COMPONENTS ================= */

function ProfileCard({ title, subtitle, active, onClick, details }) {
  return (
    <div style={{ ...card, border: active ? "2px solid #E8A6C9" : "none",backgroundColor:"#e1b8be" }}>
      <div style={profileRow} onClick={onClick}>
        <div style={avatar}>{title[0]}</div>

        <div>
          <strong>{title}</strong>
          <p style={{ fontSize: 12, color: "#fff" }}>{subtitle}</p>
        </div>

        <span style={{ marginLeft: "auto" }}>
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

function Setting({ label, value }) {
  return (
    <div style={detailRow}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

/* ================= STYLES ================= */

const card = {
  background: "#fff",
  borderRadius: 20,
  padding: 16,
  marginBottom: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const headerCard = {
  ...card,
  textAlign: "center",
  background: "#c4aec3",
  color:"#fff"
};

const logo = {
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#E8A6C9,#C2185B)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: 24,
  margin: "0 auto"
};

const profileRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  cursor: "pointer",
  color:'#fff'
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
  borderTop: "1px solid #EEE",
  color:'#fff'
};

const detailRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 8
};
