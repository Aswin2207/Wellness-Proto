import PageWrapper from "../pageWrapper";
import { card, sectionTitle, colors } from "../theme";

export default function Fertility() {
    return (
        <PageWrapper active="Fertility">
            {/* ================= DIGITAL TWIN ================= */}
            <div style={{ ...card, textAlign: "center", backgroundColor: "rgb(192, 172, 197)", color: "#fff" }}>
                <h3 style={{ color: "white", marginBottom: 8 }}>
                    🧬 Your Digital Twin
                </h3>

                {/* Avatar */}
                <div style={avatar}>🧬</div>

                {/* Status */}
                <span style={statusPill}>✓ Synced & Active</span>

                <p style={{ fontSize: 13, color: 'white', marginTop: 8 }}>
                    AI model processing your unique hormonal patterns
                </p>
            </div>

            {/* ================= INSIGHTS ================= */}
            <h3 style={sectionTitle}>AI Insights</h3>

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

const avatar = {
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#E91E63,#C2185B)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    color: "#fff",
    margin: "12px auto"
};

const statusPill = {
    display: "inline-block",
    color: "#fff",
    background: "#debabc",
    padding: "4px 10px",
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 600
};

const valuePill = {
    fontSize: 12,
    fontWeight: 600,
    color: "#fff",
    background: "#debabc",
    padding: "4px 10px",
    borderRadius: 12,
    textAlign: "right"
};
