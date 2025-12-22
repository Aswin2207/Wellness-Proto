import { useEffect, useState } from "react";
import PageWrapper from "../pageWrapper";

const mealsList = ["Breakfast", "Lunch", "Dinner"];

export default function Insights() {
  const [meals, setMeals] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("nutritionToday")) || {
        Breakfast: { calories: 0, protein: 0, carbs: 0, fat: 0 },
        Lunch: { calories: 0, protein: 0, carbs: 0, fat: 0 },
        Dinner: { calories: 0, protein: 0, carbs: 0, fat: 0 }
      }
    );
  });

  /* ---------- CALCULATIONS ---------- */
  const totals = mealsList.reduce(
    (acc, meal) => {
      acc.calories += meals[meal].calories;
      acc.protein += meals[meal].protein;
      acc.carbs += meals[meal].carbs;
      acc.fat += meals[meal].fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const score = Math.min(
    100,
    totals.protein * 2 + totals.carbs + totals.fat
  );

  /* ---------- SAVE DAILY HISTORY ---------- */
  useEffect(() => {
    localStorage.setItem("nutritionToday", JSON.stringify(meals));

    const history =
      JSON.parse(localStorage.getItem("nutritionHistory")) || [];

    const today = new Date().toDateString();
    const updated = history.filter((h) => h.date !== today);

    updated.push({ date: today, score });

    localStorage.setItem(
      "nutritionHistory",
      JSON.stringify(updated.slice(-7))
    );
  }, [meals, score]);

  return (
    <PageWrapper active="Insights">
      <h2>🍽️ Nutrition Dashboard</h2>
      <p style={muted}>Personalized for your cycle phase</p>

      {/* ================= MACRO RINGS ================= */}
      <div style={ringRow}>
        <Ring label="Protein" value={totals.protein} color="#E91E63" />
        <Ring label="Carbs" value={totals.carbs} color="#7B1FA2" />
        <Ring label="Fat" value={totals.fat} color="#F57C00" />
      </div>

      {/* ================= SCORE ================= */}
      <div style={{...card, backgroundColor: "rgb(192, 172, 197)", color: "#fff" }}>
        <p>Nutrition Score</p>
        <div style={scoreBar}>
          <div style={{ ...scoreFill, width: `${score}%` }} />
        </div>
        <strong>{score}%</strong>
      </div>

      {/* ================= MEALS ================= */}
      {mealsList.map((meal) => (
        <MealEditor
          key={meal}
          meal={meal}
          data={meals[meal]}
          onChange={(data) =>
            setMeals({ ...meals, [meal]: data })
          }
        />
      ))}

      {/* ================= WEEKLY HISTORY ================= */}
      <div style={card}>
        <h4>Weekly Nutrition Trend</h4>
        <WeeklyChart />
      </div>
    </PageWrapper>
  );
}

/* ================= COMPONENTS ================= */

function MealEditor({ meal, data, onChange }) {
  return (
    <div style={card}>
      <h4>{meal}</h4>
      <p style={aiText}>
        AI Suggestion: Focus on protein + iron rich foods
      </p>

      {["calories", "protein", "carbs", "fat"].map((key) => (
        <InputRow
          key={key}
          label={key}
          value={data[key]}
          onChange={(v) =>
            onChange({ ...data, [key]: Number(v) })
          }
        />
      ))}
    </div>
  );
}

function InputRow({ label, value, onChange }) {
  return (
    <div style={row}>
      <span>{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={input}
      />
    </div>
  );
}

function Ring({ label, value, color }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          ...ring,
          background: `conic-gradient(${color} ${value *
            3.6}deg,#EEE 0deg)`
        }}
      >
        <span>{value}g</span>
      </div>
      <p style={{ fontSize: 12 }}>{label}</p>
    </div>
  );
}

function WeeklyChart() {
  const data =
    JSON.parse(localStorage.getItem("nutritionHistory")) || [];

  return (
    <div style={chart}>
      {data.map((d, i) => (
        <div key={i} style={barWrap}>
          <div
            style={{
              ...bar,
              height: `${d.score}%`
            }}
          />
          <span style={day}>{d.date.slice(0, 3)}</span>
        </div>
      ))}
    </div>
  );
}

/* ================= STYLES ================= */

const card = {
backgroundColor: "rgb(192, 172, 197)", color: "#fff" ,
  borderRadius: 20,
  padding: 16,
  marginBottom: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const muted = { color: "#888", marginBottom: 12 };

const aiText = {
  fontSize: 12,
  color: "#E91E63",
  marginBottom: 8
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 8
};

const input = {
  width: 80,
  padding: 6,
  borderRadius: 8,
  border: "1px solid #DDD"
};

const ringRow = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: 16
};

const ring = {
  width: 80,
  height: 80,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700
};

const scoreBar = {
  height: 10,
  background: "#EEE",
  borderRadius: 10,
  marginTop: 8
};

const scoreFill = {
  height: "100%",
  borderRadius: 10,
  background: "linear-gradient(135deg,#E91E63,#F48FB1)"
};

const chart = {
  display: "flex",
  alignItems: "flex-end",
  gap: 8,
  height: 100
};

const barWrap = {
  flex: 1,
  textAlign: "center"
};

const bar = {
  width: "100%",
  background: "#F48FB1",
  borderRadius: 6
};

const day = {
  fontSize: 10,
  marginTop: 4
};
