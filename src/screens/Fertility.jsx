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
  const baseY = 110;

  const phases = {
    seed: 70,
    bloom: 150,
    moon: 230,
    flow: 300
  };

  const seedPeak = { x: phases.seed, y: baseY - 42 };
  const bloomPeak = { x: phases.bloom, y: baseY - 55 };
  const moonPeak = { x: phases.moon, y: baseY - 28 };
  const flowPeak = { x: phases.flow, y: baseY - 18 };

  const seedSpan = 140;
  const bloomSpan = 160;
  const moonSpan = 120;
  const flowSpan = 100;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="seedWave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2a6a0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f2a6a0" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="bloomWave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6c1d6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f6c1d6" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="softWave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dcd6e8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#dcd6e8" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* ================= SEED ================= */}
      <path
        d={`
          M ${seedPeak.x - seedSpan / 2} ${baseY}
          C ${seedPeak.x - seedSpan / 4} ${baseY},
            ${seedPeak.x - seedSpan / 4} ${seedPeak.y},
            ${seedPeak.x} ${seedPeak.y}
          C ${seedPeak.x + seedSpan / 4} ${seedPeak.y},
            ${seedPeak.x + seedSpan / 4} ${baseY},
            ${seedPeak.x + seedSpan / 2} ${baseY}
          Z
        `}
        fill="url(#seedWave)"
      />

      {/* ================= BLOOM ================= */}
      <path
        d={`
          M ${bloomPeak.x - bloomSpan / 2} ${baseY}
          C ${bloomPeak.x - bloomSpan / 4} ${baseY},
            ${bloomPeak.x - bloomSpan / 4} ${bloomPeak.y},
            ${bloomPeak.x} ${bloomPeak.y}
          C ${bloomPeak.x + bloomSpan / 4} ${bloomPeak.y},
            ${bloomPeak.x + bloomSpan / 4} ${baseY},
            ${bloomPeak.x + bloomSpan / 2} ${baseY}
          Z
        `}
        fill="url(#bloomWave)"
      />

      {/* ================= MOON (SUBTLE) ================= */}
      <path
        d={`
          M ${moonPeak.x - moonSpan / 2} ${baseY}
          C ${moonPeak.x - moonSpan / 4} ${baseY},
            ${moonPeak.x - moonSpan / 4} ${moonPeak.y},
            ${moonPeak.x} ${moonPeak.y}
          C ${moonPeak.x + moonSpan / 4} ${moonPeak.y},
            ${moonPeak.x + moonSpan / 4} ${baseY},
            ${moonPeak.x + moonSpan / 2} ${baseY}
          Z
        `}
        fill="url(#softWave)"
      />

      {/* ================= FLOW (VERY SUBTLE) ================= */}
      <path
        d={`
          M ${flowPeak.x - flowSpan / 2} ${baseY}
          C ${flowPeak.x - flowSpan / 4} ${baseY},
            ${flowPeak.x - flowSpan / 4} ${flowPeak.y},
            ${flowPeak.x} ${flowPeak.y}
          C ${flowPeak.x + flowSpan / 4} ${flowPeak.y},
            ${flowPeak.x + flowSpan / 4} ${baseY},
            ${flowPeak.x + flowSpan / 2} ${baseY}
          Z
        `}
        fill="url(#softWave)"
        opacity="0.8"
      />

      {/* ================= CURRENT DAY ================= */}
      <circle cx={seedPeak.x} cy={seedPeak.y} r="11" fill="#e86a63" />
      <text x={seedPeak.x} y={seedPeak.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
        8
      </text>
      <text x={seedPeak.x} y={seedPeak.y + 26} textAnchor="middle" fontSize="9" fill="#e86a63">
        CURRENT DAY
      </text>

      {/* ================= OVULATION ================= */}
      <circle cx={bloomPeak.x} cy={bloomPeak.y} r="11" fill="#e89abf" />
      <text x={bloomPeak.x} y={bloomPeak.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
        14
      </text>
      <text x={bloomPeak.x} y={bloomPeak.y + 26} textAnchor="middle" fontSize="9" fill="#e89abf">
        OVULATION
      </text>

      {/* ================= X AXIS ================= */}
      <g fontSize="10" fill="#b0b0b0" fontWeight="600">
        <text x={phases.seed} y="150" textAnchor="middle">SEED</text>
        <text x={phases.bloom} y="150" textAnchor="middle">BLOOM</text>
        <text x={phases.moon} y="150" textAnchor="middle">MOON</text>
        <text x={phases.flow} y="150" textAnchor="middle">FLOW</text>
      </g>
    </svg>
  );
}






