import { useEffect, useRef, useState } from "react";
import PageWrapper from "../pageWrapper";
import { card, colors } from "../theme";

/* ================= DATA ================= */

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

/* ================= AI PAGE ================= */

export default function AI() {
  const sliderRef = useRef(null);
  const [openChat, setOpenChat] = useState(false);

  /* ---------- auto slide ---------- */
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % insights.length;
      el.scrollTo({
        left: index * el.clientWidth,
        behavior: "smooth"
      });
    }, 3500);

    const stop = () => clearInterval(interval);
    el.addEventListener("touchstart", stop, { once: true });

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper active="AI">
      {/* ================= HEADER ================= */}
      <div style={header}>
        <h2>🧠 AI Insights</h2>
        <p style={{ fontSize: 13, opacity: 0.9 }}>
          Personalized recommendations based on your cycle
        </p>
      </div>

      {/* ================= INSIGHT SLIDER ================= */}
      <div ref={sliderRef} style={slider}>
        {insights.map((item, i) => (
          <div key={i} style={slide}>
            <div style={slideHeader}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <strong>{item.title}</strong>
            </div>

            <p style={slideText}>{item.text}</p>

            <span
              style={{
                ...tag,
                color: item.tagColor,
                background: "#fff"
              }}
            >
              {item.tag}
            </span>

            <div style={progressTrack}>
              <div
                style={{
                  ...progressFill,
                  width: `${item.progress}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ================= CHAT FAB ================= */}
      <button style={chatFab} onClick={() => setOpenChat(true)}>
        💬
      </button>

      {/* ================= CHAT WINDOW ================= */}
      {openChat && (
        <div style={chatSheet}>
          <div style={chatHeader}>
            <strong>AI Assistant</strong>
            <span style={closeBtn} onClick={() => setOpenChat(false)}>
              ✕
            </span>
          </div>

          <div style={chatBody}>
            <ChatBubble from="ai" text="Hi 👋 Ask me anything about your cycle." />
            <ChatBubble
              from="ai"
              text="You can ask about fertility, mood, workouts or nutrition."
            />
          </div>

          <div style={chatInputRow}>
            <input
              placeholder="Ask your question…"
              style={chatInput}
            />
            <button style={sendBtn}>➤</button>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

/* ================= COMPONENTS ================= */

function ChatBubble({ from, text }) {
  return (
    <div
      style={{
        ...bubble,
        alignSelf: from === "ai" ? "flex-start" : "flex-end",
        background: from === "ai" ? "#f4f3f9" : "#debabc",
        color: from === "ai" ? "#000" : "#fff"
      }}
    >
      {text}
    </div>
  );
}

/* ================= STYLES ================= */

const header = {
  ...card,
  background: "rgb(225, 184, 190)",
  color: "#fff"
};

/* ----- Slider ----- */

const slider = {
  display: "flex",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  WebkitOverflowScrolling: "touch",
  marginTop: 16
};

const slide = {
  flex: "0 0 100%",
  scrollSnapAlign: "center",
  background: "rgb(225, 184, 190)",
  borderRadius: 20,
  padding: 16,
  marginRight: 12
};

const slideHeader = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8
};

const slideText = {
  fontSize: 13,
  lineHeight: 1.5
};

const tag = {
  display: "inline-block",
  marginTop: 8,
  padding: "4px 10px",
  borderRadius: 12,
  fontSize: 12,
  fontWeight: 600
};

const progressTrack = {
  height: 6,
  background: "rgb(225, 184, 190)",
  borderRadius: 6,
  marginTop: 12
};

const progressFill = {
  height: "100%",
  background: "rgb(225, 184, 190)",
  borderRadius: 6
};

/* ----- Chat ----- */

const chatFab = {
  position: "fixed",
  bottom: 90,
  right: 20,
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "rgb(225, 184, 190)",
  border: "none",
  fontSize: 24,
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
};

const chatSheet = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: "60vh",
  background: "rgb(244, 243, 249)",
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  boxShadow: "0 -10px 40px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column"
};

const chatHeader = {
  padding: 16,
  borderBottom: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between"
};

const closeBtn = {
  cursor: "pointer"
};

const chatBody = {
  flex: 1,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  overflowY: "auto"
};

const bubble = {
  maxWidth: "80%",
  padding: 10,
  borderRadius: 14,
  fontSize: 13
};

const chatInputRow = {
  display: "flex",
  padding: 12,
  borderTop: "1px solid #eee",
  gap: 8
};

const chatInput = {
  flex: 1,
  padding: 10,
  borderRadius: 14,
  border: "1px solid #ddd"
};

const sendBtn = {
  padding: "0 14px",
  borderRadius: 14,
  background: "#debabc",
  border: "none",
  color: "#fff",
  fontWeight: 600
};
