

import { container, card, title, subtitle, colors,cta } from "../onboardingStyles";
import { Progress } from "../progress";

export default function DOBStep({ onNext }) {
  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Your date of birth</h2>
        <p style={subtitle}>
          We use this to personalize your cycle insights
        </p>

        <Progress step={2} total={5} />

        <input
          type="date"
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 14,
            border: `1px solid ${colors.border}`,
            marginTop: 20,
            fontSize: 15
          }}
        />

        <button style={cta} onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
