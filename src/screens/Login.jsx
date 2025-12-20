import Card from "../components/Card";
import { theme } from "../theme";

export default function Login({ onLogin }) {
  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
      }}
    >
      <Card style={{ width: "100%", maxWidth: 360 }}>
        {/* Logo / Title */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 40 }}>🌸</div>
        <h2 style={{
  color: theme.text,
  fontWeight: 600,
  letterSpacing: "-0.3px"
}}>
  Hello, Emma
</h2>
          <p style={{ color: theme.muted, fontSize: 14 }}>
            Your personal cycle companion
          </p>
        </div>

        {/* Email */}
        <div style={{ marginBottom: 12 }}>
          <label style={label}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            style={input}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 16 }}>
          <label style={label}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            style={input}
          />
        </div>

        {/* Login Button */}
        <button
          style={primaryBtn}
          onClick={onLogin}
        >
          Login
        </button>

        {/* Divider */}
        <div style={divider}>or</div>

        {/* Social Login */}
        <button style={secondaryBtn}>Continue with Google</button>
        <button style={secondaryBtn}>Continue with Apple</button>

        {/* Footer */}
        <p style={footer}>
          Don’t have an account? <span style={link}>Sign up</span>
        </p>
      </Card>
    </div>
  );
}

/* styles */
const label = {
  fontSize: 13,
  color: "#555",
  marginBottom: 4,
  display: "block"
};

const input = {
  width: "100%",
  padding: 12,
  borderRadius: 12,
  border: "1px solid #ddd",
  fontSize: 14
};

const primaryBtn = {
  width: "100%",
  padding: 12,
  borderRadius: 14,
  border: "none",
  background: theme.primary,
  color: "#fff",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  marginBottom: 12
};

const secondaryBtn = {
  width: "100%",
  padding: 12,
  borderRadius: 14,
  border: "1px solid #ddd",
  background: "#fff",
  fontSize: 14,
  cursor: "pointer",
  marginBottom: 8
};

const divider = {
  textAlign: "center",
  color: theme.muted,
  margin: "12px 0"
};

const footer = {
  marginTop: 12,
  fontSize: 13,
  textAlign: "center",
  color: theme.muted
};

const link = {
  color: theme.primary,
  fontWeight: 600,
  cursor: "pointer"
};