import { useEffect, useRef, useState } from "react";
import PageWrapper from "../pageWrapper";
import { colors } from "../theme";

/* ================= HOME ================= */

export default function Home() {
  const sliderRef = useRef(null);

  // cycle data (later can come from onboarding)
  const cycleLength = 28;
  const cycleDay = 8;
  const ovulationDay = 14;
  const daysToOvulation = ovulationDay - cycleDay;

  /* ---------- auto slider ---------- */
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let scroll = 0;
    const interval = setInterval(() => {
      scroll += 1;
      if (scroll >= el.scrollWidth - el.clientWidth) scroll = 0;
      el.scrollTo({ left: scroll, behavior: "smooth" });
    }, 40);

    const stop = () => clearInterval(interval);
    el.addEventListener("touchstart", stop, { once: true });

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper active="Home">
      {/* ================= HERO ================= */}
      <div style={heroCard}>
        <div style={heroTop}>
          <CycleRing day={cycleDay} total={cycleLength} />
          <OvulationCountdown days={daysToOvulation} />
        </div>

        <h2 style={heroTitle}>Follicular Phase</h2>
        <p style={heroSub}>
          Day {cycleDay} of {cycleLength} • Energy rising • Focus & strength peak
        </p>

        <div style={phaseRow}>
          <Phase label="Seed" />
          <Phase label="Bloom" active />
          <Phase label="Moon" />
          <Phase label="Flow" />
        </div>
      </div>

      {/* ================= KEY METRICS ================= */}
      <h3 style={section}>Today</h3>

      <div style={metricGrid}>
        <Metric label="Energy" value="High • 85%" />
        <Metric label="Mood" value="😊 Energized" />
        <Metric label="Sleep" value="7.5 hrs" />
        <Metric label="Hydration" value="2.1 L" />
      </div>

      {/* ================= HEALTH SLIDER ================= */}
      <h3 style={section}>Health Signals</h3>

      <div style={slider} ref={sliderRef}>
        <MiniMetric label="Heart Rate" value="62 bpm" />
        <MiniMetric label="Body Temp" value="36.4°C" />
        <MiniMetric label="Stress" value="Low" />
        <MiniMetric label="Recovery" value="Optimal" />
        <MiniMetric label="Focus" value="High" />
        <MiniMetric label="Libido" value="Moderate ↑" />
      </div>

      {/* ================= WHAT'S NEXT ================= */}
      <h3 style={section}>What’s Next</h3>

      <div style={nextList}>
        <NextCard icon="🌸" title="Ovulation Window" subtitle="In 6 days" />
        <NextCard icon="💪" title="Best Workouts" subtitle="HIIT & Strength" />
        <NextCard icon="🥗" title="Nutrition Focus" subtitle="Protein & Iron" />
      </div>
    </PageWrapper>
  );
}

/* ================= COMPONENTS ================= */

function Metric({ label, value }) {
  return (
    <div style={metricCard}>
      <p style={metricLabel}>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

function MiniMetric({ label, value }) {
  return (
    <div style={miniCard}>
      <p style={miniLabel}>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

function Phase({ label, active }) {
  return (
    <div
      style={{
        ...phase,
        background: active ? "#fff" : "rgba(255,255,255,0.25)",
        color: active ? "#8f6aa8" : "#fff",
        animation: active ? "pulse 2.5s infinite" : "none"
      }}
    >
      {label}
    </div>
  );
}

function NextCard({ icon, title, subtitle }) {
  return (
    <div style={nextCard}>
      <div style={nextIcon}>{icon}</div>
      <div>
        <strong>{title}</strong>
        <p style={{ fontSize: 12, opacity: 0.8 }}>{subtitle}</p>
      </div>
    </div>
  );
}

/* ================= CYCLE RING ================= */

function CycleRing({ day, total }) {
  const radius = 30;
  const stroke = 5;
  const normalized = radius - stroke * 2;
  const circumference = normalized * 2 * Math.PI;
  const progress = day / total;
  const offset = circumference - progress * circumference;

  return (
    <svg width={70} height={70}>
      <circle
        stroke="rgba(255,255,255,0.3)"
        fill="transparent"
        strokeWidth={stroke}
        r={normalized}
        cx={35}
        cy={35}
      />
      <circle
        stroke="#fff"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 1s ease"
        }}
        r={normalized}
        cx={35}
        cy={35}
      />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fill="#fff"
        fontSize="12"
        fontWeight="700"
      >
        {day}/{total}
      </text>
    </svg>
  );
}

/* ================= OVULATION COUNTDOWN ================= */

function OvulationCountdown({ days }) {
  return (
    <div style={ovulationCard}>
      <p style={{ fontSize: 12, opacity: 0.85 }}>Ovulation in</p>
      <div style={ovulationPulse}>{days}</div>
      <p style={{ fontSize: 11 }}>days</p>
    </div>
  );
}

/* ================= STYLES ================= */

const heroCard = {
  background: "rgb(225, 184, 190)",
  borderRadius: 24,
  padding: 20,
  color: "#fff",
  marginBottom: 20
};

const heroTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const heroTitle = {
  marginTop: 12,
  fontSize: 22,
  fontWeight: 800
};

const heroSub = {
  fontSize: 13,
  marginTop: 6,
  opacity: 0.95
};

const phaseRow = {
  display: "flex",
  gap: 8,
  marginTop: 14
};

const phase = {
  padding: "6px 12px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600
};

const section = {
  fontSize: 16,
  fontWeight: 700,
  marginBottom: 10
};

const metricGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
  marginBottom: 20
};

const metricCard = {
  background: "rgb(225, 184, 190)",
  borderRadius: 18,
  padding: 14,
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
};

const metricLabel = {
  fontSize: 12,
  color: colors.muted
};

const slider = {
  display: "flex",
  gap: 12,
  overflowX: "auto",
  paddingBottom: 8,
  marginBottom: 20
};

const miniCard = {
  minWidth: 140,
  background: "#f4f3f9",
  borderRadius: 16,
  padding: 12,
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)"
};

const miniLabel = {
  fontSize: 12,
  color: colors.muted
};

const nextList = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  marginBottom: 40
};

const nextCard = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  background: "rgb(225, 184, 190)",
  padding: 14,
  borderRadius: 18,
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
};

const nextIcon = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "#e5d8ec",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 18
};

const ovulationCard = {
  textAlign: "center",
  padding: 8
};

const ovulationPulse = {
  fontSize: 22,
  fontWeight: 800,
  animation: "pulse 2s infinite"
};

/* ================= ANIMATIONS ================= */

const style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
`;
document.head.appendChild(style);
