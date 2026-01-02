import PageWrapper from "../pageWrapper";
import { card, sectionTitle, colors } from "../theme";

export default function Fertility() {
    return (
        <PageWrapper active="Fertility">
            {/* ================= DIGITAL TWIN ================= */}
       
<div
  style={{
    ...card,
    background: "#f6f6f6",
    color: "#000",
    padding: 16
  }}
>
  <h3 style={{ fontWeight: 700, marginBottom: 6 }}>
     Discover cycle trends
  </h3>


 <CycleTrendChart
  cycleLength={28}
  bleedStart={10}
  bleedEnd={15}
  blossomStart={23}
  blossomEnd={26}
/>


</div>

            {/* ================= INSIGHTS ================= */}
            <h3 style={sectionTitle}>Cycle Trends</h3>

            <InsightRow label="Next Period" value="Feb 8 (20 days)" />
            <InsightRow label="Ovulation Window" value="Jan 26–28" />
            <InsightRow label="Cycle Regularity" value="92% • Consistent" />
            <InsightRow label="Predicted Mood" value="Stable" />
            <InsightRow label="PMS Alert" value="Feb 5–7" />
            <InsightRow label="Confidence Score" value="95%" />
        </PageWrapper>
    );
}

/* ================= COMPONENTS ================= */

function InsightRow({ label, value }) {
    return (
        <div
            style={{
                ...card,
                padding: 12,
                background:"rgb(244, 243, 249)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <span style={{ fontSize: 13 }}>{label}</span>
            <span style={valuePill}>{value}</span>
        </div>
    );
}

/* ================= STYLES ================= */



const valuePill = {
    fontSize: 12,
    fontWeight: 600,
    color: "#fff",
    background: "#debabc",
    padding: "4px 10px",
    borderRadius: 12,
    textAlign: "right"
};


function CycleTrendChart() {
  const width = 320;
  const height = 160;

  const bandTop = 72;
  const bandHeight = 40;
  const indicatorY = bandTop - 14;

  // Phase layout (order fixed)
  const phases = [
    { label: "FLOW",  x: 0,   w: 80,  color: "#E8F5E9" },
    { label: "SEED",  x: 80,  w: 80,  color: "#C8E6C9" },
    { label: "BLOOM", x: 160, w: 80,  color: "#FCE4EC" },
    { label: "MOON",  x: 240, w: 80,  color: "#F8BBD0" }
  ];

  // Marker positions (explicit, per requirement)
  const seed = phases.find(p => p.label === "SEED");
  const bloom = phases.find(p => p.label === "BLOOM");

  const day8X = seed.x + seed.w / 2;   // middle of SEED
  const day14X = bloom.x;              // start of BLOOM

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* ================= CONTINUOUS BAND ================= */}
      {phases.map(p => (
        <rect
          key={p.label}
          x={p.x}
          y={bandTop}
          width={p.w}
          height={bandHeight}
          fill={p.color}
        />
      ))}

      {/* ================= DAY 8 — TODAY (SEED) ================= */}
      <line
        x1={day8X}
        x2={day8X}
        y1={bandTop}
        y2={bandTop + bandHeight}
        stroke="#81C784"
        strokeDasharray="4"
      />
      <circle cx={day8X} cy={indicatorY} r="10" fill="#81C784" />
      <text
        x={day8X}
        y={indicatorY + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#fff"
      >
        8
      </text>
      <text
        x={day8X}
        y={indicatorY - 12}
        textAnchor="middle"
        fontSize="9"
        fill="#81C784"
      >
        Today
      </text>

      {/* ================= DAY 14 — OVULATION (START OF BLOOM) ================= */}
      <line
        x1={day14X}
        x2={day14X}
        y1={bandTop}
        y2={bandTop + bandHeight}
        stroke="#B39DDB"
        strokeDasharray="4"
      />
      <circle cx={day14X} cy={indicatorY} r="10" fill="#B39DDB" />
      <text
        x={day14X}
        y={indicatorY + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#fff"
      >
        14
      </text>
      <text
        x={day14X}
        y={indicatorY - 12}
        textAnchor="middle"
        fontSize="9"
        fill="#B39DDB"
      >
        Ovulation
      </text>

      {/* ================= X AXIS LABELS ================= */}
      <g fontSize="10" fill="#B0B0B0" fontWeight="600">
        {phases.map(p => (
          <text
            key={p.label}
            x={p.x + p.w / 2}
            y="145"
            textAnchor="middle"
          >
            {p.label}
          </text>
        ))}
      </g>
    </svg>
  );
}









