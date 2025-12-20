import { theme } from "../theme";

export default function Card({ children, style }) {
  return (
    <div
      style={{
        background: theme.surface,
        backdropFilter: "blur(12px)",
        borderRadius: theme.radius,
        padding: 16,
        boxShadow: theme.shadow,
        border: `1px solid ${theme.border}`,
        marginBottom: 12,
        ...style
      }}
    >
      {children}
    </div>
  );
}