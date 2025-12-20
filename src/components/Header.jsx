import { theme } from "../theme";


export default function Header({ title }) {
  return (
    <div style={{ marginBottom: 16 }}>
    <h2 style={{
  color: theme.text,
  fontWeight: 600,
  letterSpacing: "-0.3px"
}}>
  Hello, Emma
</h2>
    </div>
  );
}