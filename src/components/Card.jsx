import { theme } from "../theme";

export default function Card({ children, style }) {
  return (
    <div
      style={{
        background: theme.card,
        borderRadius: theme.radius,
        padding: 16,
        boxShadow: theme.shadow,
        ...style
      }}
    >
      {children}
    </div>
  );
}