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
import CycleLength from "./screens/CycleLength";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
      <Route path="/" element={<StartJourney />} />
      <Route path="/home" element={<Home />} />
      <Route path="/fertility" element={<Fertility />} />
      <Route path="/ai" element={<AI />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}