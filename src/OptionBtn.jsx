export default function OptionBtn({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "16px 12px",
        borderRadius: 16,
        border: selected ? "2px solid #E8A6C9" : "1px solid #E2DCE6",
        background: selected ? "#F9E3EF" : "#FFFFFF",
        color: "#3A2D40",
        fontSize: 15,
        fontWeight: 500,
        cursor: "pointer",
        textAlign: "center",
        width: "100%"
      }}
    >
      {label}
    </button>
  );
}