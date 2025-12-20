import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* Onboarding steps */

import AgeStep from "./screens/AgeStep";
import DOBStep from "./screens/DOB";
import LastPeriodStep from "./screens/LastPeriod";

/* Main app screens */
import Home from "./screens/Home";
import Fertility from "./screens/Fertility";
import StartJourney from "./screens/StartJourney";
import AI from "./screens/AIChat";
import Profile from "./screens/Profile";
import Insights from "./screens/Insights";
import CycleLength from "./screens/Cyclelength";

export default function App() {
  // 🔹 onboarding control
  const [step, setStep] = useState(0);
  const [onboarded, setOnboarded] = useState(false);

  /* ---------- ONBOARDING FLOW ---------- */
  if (!onboarded) {
    switch (step) {
      case 0:
        return <StartJourney onNext={() => setStep(1)} />;
      case 1:
        return <AgeStep onNext={() => setStep(2)} />;
      case 2:
        return <DOBStep onNext={() => setStep(3)} />;
      case 3:
        return <LastPeriodStep onNext={() => setStep(4)} />;
      case 4:
        return (
          <CycleLength
            onNext={() => {
              setOnboarded(true); // ✅ ENTER MAIN APP
            }}
          />
        );
      default:
        return null;
    }
  }

  /* ---------- MAIN APP (BOTTOM TABS) ---------- */
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/fertility" element={<Fertility />} />
      <Route path="/ai" element={<AI/>} />
      <Route path="/insights" element={<Insights/>} />
       <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
}