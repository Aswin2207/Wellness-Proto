import { useState } from "react";
import { container, card, title, subtitle, input, cta } from "../onboardingStyles";
import { Progress } from "../progress";


export default function LastPeriodStep({ onNext }) {
    const today = new Date().toISOString().split("T")[0];

    const [date, setDate] = useState(today);
    return (
        <div style={container}>
            <div style={card}>
                <h2 style={title}>When was your last period?</h2>
                <p style={subtitle}>This helps calculate your cycle</p>

                <Progress step={3} total={5} />

                <input type="date" style={input} value={date} onChange={(e) => setDate(e.target.value)} />

                <button style={cta} onClick={onNext}>
                    Next →
                </button>
            </div>
        </div>
    );
}
