import { useState } from "react";
import PageWrapper from "../pageWrapper";
import { card, sectionTitle, colors } from "../theme";

const insights = [
    {
        icon: "🏋️",
        title: "Exercise Optimization",
        text:
            "Your estrogen is rising during this follicular phase. Perfect time for strength training and HIIT workouts.",
        tag: "High Intensity Recommended",
        progress: 75,
        tagColor: "#2E7D32"
    },
    {
        icon: "🥗",
        title: "Nutrition Guidance",
        text:
            "Increase protein and iron-rich foods. Focus on lean meats, leafy greens, and complex carbs.",
        tag: "Protein Focus",
        progress: 65,
        tagColor: "#1565C0"
    },
    {
        icon: "🧠",
        title: "Cognitive Performance",
        text:
            "Rising estrogen enhances verbal skills and memory. Ideal time for presentations or learning.",
        tag: "Peak Performance",
        progress: 80,
        tagColor: "#6A1B9A"
    },
    {
        icon: "😴",
        title: "Sleep Pattern",
        text:
            "Your sleep quality is excellent. Maintain routine. Minor changes may occur post-ovulation.",
        tag: "Optimal",
        progress: 85,
        tagColor: "#2E7D32"
    },
    {
        icon: "💡",
        title: "Symptom Forecast",
        text:
            "Low symptom burden expected for the next 7 days. Mild bloating possible around ovulation.",
        tag: "Minimal Symptoms",
        progress: 40,
        tagColor: "#EF6C00"
    },
    {
        icon: "🌸",
        title: "Fertility Status",
        text:
            "Approaching fertile window. Ovulation predicted in ~10 days with 95% confidence.",
        tag: "Approaching Ovulation",
        progress: 60,
        tagColor: "#C2185B"
    }
];

export default function AI() {
    const [index, setIndex] = useState(0);
    const insight = insights[index];

    return (
        <PageWrapper active="AI">
            {/* ================= HEADER ================= */}
            <div style={{
                ...card, background: "#c0acc5",
                color: "#fff"
            }}>
                <h2>🧠 AI-Generated Insights & Recommendations</h2>
                <p style={{ color: colors.muted, fontSize: 13 }}>
                    Personalized guidance based on your cycle & hormonal patterns
                </p>
            </div>

            {/* ================= SLIDER ================= */}
            <div style={{
                ...card, marginTop: 16, background: "#c0acc5",
                color: "#fff"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 20 }}>{insight.icon}</span>
                    <h3 style={{ margin: 0 }}>{insight.title}</h3>
                </div>

                <p style={{ fontSize: 13, marginTop: 8 }}>
                    {insight.text}
                </p>

                {/* Tag */}
                <span
                    style={{
                        display: "inline-block",
                        marginTop: 8,
                        padding: "4px 10px",
                        borderRadius: 12,
                        fontSize: 12,
                        fontWeight: 600,
                        background: "#E8F5E9",
                        color: insight.tagColor
                    }}
                >
                    {insight.tag}
                </span>

                {/* Progress */}
                <div
                    style={{
                        height: 6,
                        background: colors.border,
                        borderRadius: 6,
                        marginTop: 12
                    }}
                >
                    <div
                        style={{
                            width: `${insight.progress}%`,
                            height: "100%",
                            background: colors.primary,
                            borderRadius: 6
                        }}
                    />
                </div>
            </div>

            {/* ================= SLIDER CONTROLS ================= */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 12
                }}
            >
                <button
                    style={navBtn}
                    disabled={index === 0}
                    onClick={() => setIndex(index - 1)}
                >
                    ← Prev
                </button>

                <span style={{ fontSize: 12, color: colors.muted }}>
                    {index + 1} / {insights.length}
                </span>

                <button
                    style={navBtn}
                    disabled={index === insights.length - 1}
                    onClick={() => setIndex(index + 1)}
                >
                    Next →
                </button>
            </div>

            {/* ================= AI CHAT ================= */}
            <div style={{ ...card, marginTop: 20 }}>
                <p style={{ fontSize: 13, color: colors.muted }}>
                    Ask your AI anything
                </p>
                <input
                    placeholder="Ask about your cycle, mood, or fertility…"
                    style={{
                        width: "100%",
                        marginTop: 8,
                        padding: 12,
                        borderRadius: 12,
                        border: `1px solid ${colors.border}`
                    }}
                />
            </div>
        </PageWrapper>
    );
}

/* ================= STYLES ================= */

const navBtn = {
    padding: "6px 12px",
    borderRadius: 12,
    border: "none",
    color: "fff",
    background: "rgb(222, 186, 188)",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer"
};
