import { container, card, title, subtitle, input,cta } from "../onboardingStyles";
import { Progress } from "../progress";


export default function LastPeriodStep({ onNext }) {
  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>When was your last period?</h2>
        <p style={subtitle}>This helps calculate your cycle</p>

        <Progress step={3} total={5} />

        <input type="date" style={input} />

        <button style={cta} onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
