import { useState } from "react";
import OptionBtn from "../OptionBtn";
import {
  container,
  card,
  title,
  subtitle,
  cta
} from "../onboardingStyles";
import { Progress } from "../progress";

export default function CycleLength({ onNext }) {
  const [length, setLength] = useState(null);

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Your cycle length?</h2>
        <p style={subtitle}>Average number of days</p>

          <Progress step={4} total={5} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {["21–25", "26–30", "31–35", "35+"].map((val) => (
            <OptionBtn
              key={val}
              label={val}
              selected={length === val}
              onClick={() => setLength(val)}
            />
          ))}
        </div>

        <button style={cta} disabled={!length} onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}