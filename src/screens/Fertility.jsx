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

function CycleTrendChart({
  cycleLength = 28
}) {
  const width = 300;
  const height = 120;

  // Phase centers aligned with X labels
  const phases = {
    bleed: 4,     // center of BLEED
    seed: 9,
    bloom: 14,    // center of BLOOM
    shift: 20,
    reflect: 25
  };

  const x = d => (d / cycleLength) * width;
  const y = d => height - (d / cycleLength) * height;

  // One smooth curve with peaks centered on BLEED & BLOOM
  const areaPath = `
    M ${x(1)} ${y(2)}
    C ${x(phases.bleed - 2)} ${y(3)},
      ${x(phases.bleed)} ${y(8)},
      ${x(phases.bleed + 2)} ${y(9)}
    C ${x(phases.seed)} ${y(10)},
      ${x(phases.bloom - 2)} ${y(14)},
      ${x(phases.bloom)} ${y(16)}
    C ${x(phases.bloom + 2)} ${y(14)},
      ${x(phases.shift)} ${y(8)},
      ${x(phases.reflect)} ${y(4)}
    L ${width} ${height}
    L 0 ${height}
    Z
  `;

  return (
    <svg width="100%" height="170" viewBox={`0 0 ${width} 150`}>
      <defs>
        {/* Neutral */}
        <linearGradient id="neutral" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b39ddb" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#b39ddb" stopOpacity="0.1" />
        </linearGradient>

        {/* Bleed */}
        <linearGradient id="bleed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity="0.75" />
          <stop offset="100%" stopColor="red" stopOpacity="0.15" />
        </linearGradient>

        {/* Blossom */}
        <linearGradient id="blossom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f48fb1" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#f48fb1" stopOpacity="0.15" />
        </linearGradient>

        {/* Clip BLEED */}
        <clipPath id="bleedClip">
          <rect
            x={x(phases.bleed - 3)}
            y="0"
            width={x(6) - x(1)}
            height={height}
          />
        </clipPath>

        {/* Clip BLOOM */}
        <clipPath id="bloomClip">
          <rect
            x={x(phases.bloom - 3)}
            y="0"
            width={x(17) - x(11)}
            height={height}
          />
        </clipPath>
      </defs>

      {/* Neutral base curve */}
      <path d={areaPath} fill="url(#neutral)" />

      {/* Bleed rise (aligned over BLEED label) */}
      <path
        d={areaPath}
        fill="url(#bleed)"
        clipPath="url(#bleedClip)"
      />

      {/* Blossom rise (aligned over BLOOM label) */}
      <path
        d={areaPath}
        fill="url(#blossom)"
        clipPath="url(#bloomClip)"
      />

      {/* Y-axis (days) */}
      <g fontSize="10" fill="#999">
        <text x="0" y="12">{cycleLength}</text>
        <text x="0" y={height - 4}>1</text>
      </g>

      {/* X-axis labels */}
      <g fontSize="10" fill="#999">
        <text x={x(phases.bleed)} y="145" textAnchor="middle">BLEED</text>
        <text x={x(phases.seed)} y="145" textAnchor="middle">SEED</text>
        <text x={x(phases.bloom)} y="145" textAnchor="middle">BLOOM</text>
        <text x={x(phases.shift)} y="145" textAnchor="middle">SHIFT</text>
        <text x={x(phases.reflect)} y="145" textAnchor="middle">REFLECT</text>
      </g>
    </svg>
  );
}




