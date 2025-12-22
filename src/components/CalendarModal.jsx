import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CalendarModal({ open, onClose, onSelect }) {
  if (!open) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <DayPicker
          mode="single"
          onSelect={(date) => {
            onSelect(date);
            onClose();
          }}
        />

        <button style={closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  zIndex: 200
};

const modal = {
  background: "#fff",
  width: "100%",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 16
};

const closeBtn = {
  width: "100%",
  padding: 12,
  marginTop: 12,
  borderRadius: 12,
  border: "none",
  background: "#E8A6C9",
  color: "#fff",
  fontSize: 16
};
