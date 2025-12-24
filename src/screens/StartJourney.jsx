import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StartJourney() {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const [activeIndex, setActiveIndex] = useState(0);

  const [data, setData] = useState({
    ageGroup: "",
    dob: today,
    age: 25,
    cycleLength: 28,
    lastPeriod: today
  });

  const totalSteps = 6; // landing + 5 steps

  const next = () => swiperRef.current?.slideNext();
  const prev = () => swiperRef.current?.slidePrev();

  const finish = () => {
    localStorage.setItem("onboarding", JSON.stringify(data));
    navigate("/home");
  };

  return (
    <div style={page}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        speed={500}
        pagination={{ clickable: true }}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        className="onboarding-swiper"
      >
        {/* ---------- LANDING ---------- */}
        <SwiperSlide>
          <Card>
            <Progress value={activeIndex} total={totalSteps} />

            <div style={moonWrap}>
              <div style={moonRing} />
              <div style={moon}>🌙</div>
            </div>

            <h1 style={landingTitle}>Her Solace</h1>
            <Sub>
              A gentle space to understand your cycle & wellbeing
            </Sub>


            <button style={finishBtn} onClick={next}>
              Start Journey
            </button>
          </Card>
        </SwiperSlide>

        {/* ---------- STEP 1 AGE GROUP ---------- */}
        <SwiperSlide>
          <Card>
            <Progress value={activeIndex} total={totalSteps} />
            <Step>Step 1 of 5</Step>
            <Title>Select your age group</Title>

            <div style={chips}>
              {["18–24", "25–34", "35–44", "45+"].map((g) => (
                <button
                  key={g}
                  style={{
                    ...chip,
                    background:
                      data.ageGroup === g ? "#deb7ba" : "transparent",
                    color: data.ageGroup === g ? "#fff" : "#BE185D"
                  }}
                  onClick={() => setData({ ...data, ageGroup: g })}
                >
                  {g}
                </button>
              ))}
            </div>

            <ArrowRow>
              <span />
              <Fab onClick={next}>→</Fab>
            </ArrowRow>
          </Card>
        </SwiperSlide>

        {/* ---------- STEP 2 DOB ---------- */}
        <SwiperSlide>
          <Card>
            <Progress value={activeIndex} total={totalSteps} />
            <Step>Step 2 of 5</Step>
            <Title>Date of birth</Title>

            <input
              type="date"
              value={data.dob}
              onChange={(e) =>
                setData({ ...data, dob: e.target.value })
              }
              style={input}
            />

            <ArrowRow>
              <Fab onClick={prev}>←</Fab>
              <Fab onClick={next}>→</Fab>
            </ArrowRow>
          </Card>
        </SwiperSlide>

        {/* ---------- STEP 3 AGE ---------- */}
        <SwiperSlide>
          <Card>
            <Progress value={activeIndex} total={totalSteps} />
            <Step>Step 3 of 5</Step>
            <Title>Your exact age</Title>

            <div style={big}>{data.age}</div>
            <input
              type="range"
              min="13"
              max="55"
              value={data.age}
              onChange={(e) =>
                setData({ ...data, age: e.target.value })
              }
              style={range}
            />

            <ArrowRow>
              <Fab onClick={prev}>←</Fab>
              <Fab onClick={next}>→</Fab>
            </ArrowRow>
          </Card>
        </SwiperSlide>

        {/* ---------- STEP 4 CYCLE ---------- */}
        <SwiperSlide>
          <Card>
            <Progress value={activeIndex} total={totalSteps} />
            <Step>Step 4 of 5</Step>
            <Title>Cycle Length</Title>

            <div style={big}>
              {data.cycleLength} <span style={{ fontSize: 18 }}>days</span>
            </div>

            <input
              type="range"
              min="21"
              max="35"
              value={data.cycleLength}
              onChange={(e) =>
                setData({ ...data, cycleLength: e.target.value })
              }
              style={range}
            />

            <ArrowRow>
              <Fab onClick={prev}>←</Fab>
              <Fab onClick={next}>→</Fab>
            </ArrowRow>
          </Card>
        </SwiperSlide>

        {/* ---------- STEP 5 LAST PERIOD ---------- */}
        <SwiperSlide>
          <Card>
            <Progress value={activeIndex} total={totalSteps} />
            <Step>Step 5 of 5</Step>
            <Title>Last Period Date</Title>

            <input
              type="date"
              value={data.lastPeriod}
              onChange={(e) =>
                setData({ ...data, lastPeriod: e.target.value })
              }
              style={input}
            />

            <button style={finishBtn} onClick={finish}>
              Finish Setup
            </button>

            <button style={backText} onClick={prev}>
              ← Back
            </button>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

/* ================= NEW UI ================= */

const Progress = ({ value, total }) => (
  <div style={progressTrack}>
    <div
      style={{
        ...progressFill,
        width: `${(value / (total - 1)) * 100}%`
      }}
    />
  </div>
);

const landingTitle = {
  fontSize: 28,
  fontWeight: 800,
  marginTop: 12
};

const moonWrap = {
  position: "relative",
  width: 90,
  height: 90,
  margin: "0 auto"
};

const moonRing = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: "2px solid #deb7ba",
  animation: "spin 12s linear infinite"
};

const moon = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  background: "#deb7ba",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 28,
  margin: "auto",
  position: "absolute",
  inset: 0
};

/* ================= FIX ================= */

const range = {
  width: "100%",
  height: 6,
  borderRadius: 6,
  accentColor: "#deb7ba"
};

/* ================= PROGRESS BAR ================= */

const progressTrack = {
  width: "100%",
  height: 6,
  background: "#e6e2eb",
  borderRadius: 6,
  overflow: "hidden",
  marginBottom: 16
};

const progressFill = {
  height: "100%",
  background: "linear-gradient(90deg,#deb7ba,#cfa5aa)",
  transition: "width .3s ease"
};
const page = { minHeight: "100vh", background: "#e9e3ef", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif" }; const Card = ({ children }) => (<div style={card}>{children}</div>); const card = { width: "100%", maxWidth: 380, padding: 32, borderRadius: 32, background: "#f4f3f9", backdropFilter: "blur(14px)", boxShadow: "0 20px 40px rgba(0,0,0,0.12)", textAlign: "center" };
const Step = ({ children }) => (<p style={{ color: "#deb7ba", fontWeight: 600 }}>{children}</p>);
const Title = ({ children }) => (<h2 style={{ fontSize: 22, fontWeight: 700 }}>{children}</h2>);
const Sub = ({ children }) => (<p style={{ color: "#6B7280", marginBottom: 24 }}>{children}</p>);
const chips = { display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 24 };
const chip = { padding: "12px 18px", borderRadius: 999, border: "2px solid #deb7ba", fontWeight: 600, cursor: "pointer" };
const big = { fontSize: 48, fontWeight: 800, color: "#deb7ba", marginBottom: 12 };
const input = { width: "100%", padding: 16, borderRadius: 16, border: "1px solid #F9A8D4", marginTop: 16 }; const ArrowRow = ({ children }) => (<div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}> {children} </div>);
const Fab = ({ children, onClick }) => (<button onClick={onClick} style={fab}> {children} </button>);
const fab = { width: 48, height: 48, borderRadius: "50%", background: "#deb7ba", color: "#fff", border: "none", fontSize: 20 }; const finishBtn = { marginTop: 24, width: "100%", padding: 16, borderRadius: 20, background: "#deb7ba", color: "#fff", fontWeight: 700, border: "none" }; const backText = { marginTop: 12, background: "none", border: "none", color: "#6B7280" };
