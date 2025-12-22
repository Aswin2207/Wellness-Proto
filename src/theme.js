export const theme = {
  /* backgrounds */
  bg: "rgba(178, 155, 175)",
  surface: "rgb(247, 244, 248)",

  /* primary accents */
  primary: "#E6C97A",     // moon gold
  secondary: "#E7B8C8",   // blush
  tertiary: "#D7C8DC",    // lavender

  /* text */
  text: "#3E3347",
  muted: "#7A6A85",
  subtle: "#9A8DA3",

  /* UI */
  border: "rgba(255,255,255,0.35)",
  shadow: "0 12px 30px rgba(120,90,140,0.15)",
  radius: 20
};

export const page = {
  padding: 16,
  paddingBottom: 80,
  background: "#FFF5F8",
  minHeight: "100vh"
};

export const hero = {
  background: "linear-gradient(135deg,#E91E63,#F48FB1)",
  color: "#fff",
  borderRadius: 20,
  padding: 20,
  textAlign: "center"
};

export const heroPink = {
  ...hero,
  background: "linear-gradient(135deg,#F48FB1,#FCE4EC)"
};
export const colors = {
  bg: "#FFF4F7",
  card: "#FFFFFF",
  primary: "#E8A6C9",
  primaryDark: "#D98BB3",
  text: "#2E1F2F",
  muted: "black",
  border: "#EADCE4"
};

export const card = {
  background: colors.card,
  borderRadius: 20,
  padding: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  marginBottom: 16
};

export const sectionTitle = {
  fontSize: 16,
  fontWeight: 600,
  marginBottom: 12,
  color: colors.text
};

export const pill = {
  padding: "6px 12px",
  borderRadius: 999,
  background: "#F6D6E5",
  fontSize: 12,
  fontWeight: 500
};