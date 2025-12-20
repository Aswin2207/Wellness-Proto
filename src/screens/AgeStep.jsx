import React from "react";
import { container, card, title, subtitle, colors } from "../onboardingStyles";
import { Progress } from "../progress";


const ages = ["18–24", "25–29", "30–34", "35–39", "40–44", "45+"];

export default function AgeStep({ onNext }) {
  const [selected, setSelected] = React.useState(null);

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>What is your age?</h2>
        <p style={subtitle}>
          This helps us provide age-appropriate recommendations
        </p>

        <Progress step={1} total={5} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginTop: 20
          }}
        >
          {ages.map(age => (
            <button
              key={age}
              onClick={() => setSelected(age)}
              style={{
                padding: "16px 0",
                borderRadius: 14,
                border: `1px solid ${
                  selected === age ? colors.primary : colors.border
                }`,
                background:
                  selected === age ? colors.primarySoft : "transparent",
                color: colors.text,
                fontSize: 15,
                cursor: "pointer"
              }}
            >
              {age}
            </button>
          ))}
        </div>

        <button
          disabled={!selected}
          onClick={onNext}
          style={{
            marginTop: 28,
            width: "100%",
            padding: "14px",
            borderRadius: 14,
            background: colors.primary,
            border: "none",
            color: "#fff",
            fontSize: 16,
            opacity: selected ? 1 : 0.5
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}