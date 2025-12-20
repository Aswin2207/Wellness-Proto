import { container, card, title, subtitle, colors,cta } from "./onboardingStyles";

export function Progress({ step, total }) {
  return (
    <>
      <div
        style={{
          height: 4,
          background: "#E5E1EA",
          borderRadius: 4,
          overflow: "hidden",
          marginBottom: 12
        }}
      >
        <div
          style={{
            width: `${(step / total) * 100}%`,
            height: "100%",
            background: colors.primary
          }}
        />
      </div>

      <p style={{ textAlign: "center", fontSize: 12, color: colors.sub }}>
        Step {step} of {total}
      </p>
    </>
  );
}