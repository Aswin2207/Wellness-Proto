import { useEffect, useState } from "react";
import PageWrapper from "../pageWrapper";

/* ================= MOCK CYCLE PHASE ================= */
const cyclePhase = "Follicular";

/* ================= MEAL SUGGESTIONS ================= */
const MEALS = {
  Breakfast: {
    icon: "🌿",
    suggestion: "Oatmeal with berries & nuts",
    macros: "Carbs: 30g • Protein: 15g • Fat: 10g"
  },
  Lunch: {
    icon: "🥗",
    suggestion: "Baked salmon & veggies",
    macros: "Carbs: 25g • Protein: 30g • Fat: 15g"
  },
  Dinner: {
    icon: "🍗",
    suggestion: "Grilled chicken & greens",
    macros: "Carbs: 20g • Protein: 35g • Fat: 12g"
  }
};

export default function Insights() {
  const [inputs, setInputs] = useState({
    Breakfast: "",
    Lunch: "",
    Dinner: ""
  });

  const [hydration, setHydration] = useState(5);
  const [score, setScore] = useState(0);

  /* ================= SCORE CALC ================= */
  useEffect(() => {
    let base = 40;
    Object.values(inputs).forEach((v) => {
      if (v.length > 3) base += 15;
    });
    base += hydration * 2;
    setScore(Math.min(100, base));
  }, [inputs, hydration]);

  return (
    <PageWrapper active="Insights">
      {/* ================= HEADER ================= */}
      <div style={header}>
        <div>
          <h3>Today’s Plan</h3>
          <p style={muted}>Cycle Phase: {cyclePhase}</p>
        </div>
        <span style={date}>Aug 14, 2024</span>
      </div>

      {/* ================= SCORE ================= */}
      <div style={scoreCard}>
        <p>XI Diet Score</p>
        <strong>{score}% Achieved</strong>
        <div style={bar}>
          <div style={{ ...barFill, width: `${score}%` }} />
        </div>
      </div>

      {/* ================= MEALS ================= */}
      <h4 style={section}>What did you eat today?</h4>

      {Object.entries(MEALS).map(([meal, data]) => (
        <div key={meal} style={mealCard}>
          <div style={mealHeader}>
            <span style={mealIcon}>{data.icon}</span>
            <strong>{meal}</strong>
          </div>

          <p style={suggestion}>{data.suggestion}</p>
          <p style={macros}>{data.macros}</p>

          <input
            placeholder={`e.g. ${data.suggestion}`}
            value={inputs[meal]}
            onChange={(e) =>
              setInputs({ ...inputs, [meal]: e.target.value })
            }
            style={input}
          />
        </div>
      ))}

      {/* ================= HYDRATION ================= */}
      <div style={hydrationCard}>
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ fontSize: 22 }}>💧</span>
          <div>
            <strong>Hydration Tips</strong>
            <p style={muted}>
              Drink 8 glasses daily. Carry a reusable bottle.
            </p>
          </div>
        </div>

        <div style={waterRow}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              onClick={() => setHydration(i + 1)}
              style={{
                ...water,
                background: i < hydration ? "rgb(194, 24, 91)" : "rgb(244, 243, 249)"
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= MONTHLY ================= */}
      <div style={monthly}>
        <h4>Monthly Nutrition Overview</h4>
        <div style={monthRow}>
          {["W1", "W2", "W3", "W4"].map((w, i) => (
            <div key={w} style={week}>
              <div
                style={{
                  ...weekBar,
                  height: `${60 + i * 10}%`
                }}
              />
              <span style={{ fontSize: 11 }}>{w}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <button style={cta}>Submit & Get Score</button>
    </PageWrapper>
  );
}

/* ================= STYLES ================= */

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const date = { fontSize: 12, opacity: 0.7 };
const muted = { fontSize: 12, opacity: 0.7 };

const scoreCard = {
  background: "rgb(225, 184, 190)",
  borderRadius: 22,
  padding: 16,
  marginTop: 12,
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
};

const bar = {
  height: 10,
  background: "rgb(244, 243, 249)",
  borderRadius: 10,
  marginTop: 8,
  overflow: "hidden"
};

const barFill = {
  height: "100%",
  background: "rgb(194, 24, 91)",
  transition: "width .6s ease"
};

const section = { marginTop: 20 };

const mealCard = {
  background: "rgb(225, 184, 190)",
  borderRadius: 22,
  padding: 16,
  marginTop: 12,
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
};

const mealHeader = {
  display: "flex",
  alignItems: "center",
  gap: 10
};

const mealIcon = {
  fontSize: 22,
  animation: "pulse 2s infinite"
};

const suggestion = {
  fontSize: 13,
  marginTop: 6
};

const macros = {
  fontSize: 11,
  opacity: 0.7
};

const input = {
  width: "100%",
  marginTop: 10,
  padding: 12,
  borderRadius: 14,
  border: "1px solid #ddd",
  background:"rgb(244, 243, 249)"
};

const hydrationCard = {
  background: "rgb(225, 184, 190)",
  borderRadius: 22,
  padding: 16,
  marginTop: 16
};

const waterRow = {
  display: "flex",
  gap: 6,
  marginTop: 10
};

const water = {
  width: 22,
  height: 36,
  borderRadius: 6
};

const monthly = {
  background: "rgb(225, 184, 190)",
  borderRadius: 22,
  padding: 16,
  marginTop: 16
};

const monthRow = {
  display: "flex",
  gap: 12,
  marginTop: 10,
  alignItems: "flex-end"
};

const week = {
  flex: 1,
  textAlign: "center"
};

const weekBar = {
  width: "100%",
  background: "rgb(194, 24, 91)",
  borderRadius: 10,
  transition: "height .5s ease"
};

const cta = {
  marginTop: 20,
  width: "100%",
  padding: 14,
  borderRadius: 18,
  background: "rgb(194, 24, 91)",
  color: "#fff",
  fontWeight: 700,
  border: "none"
};
