import BottomNav from "./components/BottomNav";

export default function PageWrapper({ children, active }) {
  return (
    <>
      <div style={appContainer}>{children}</div>
      <BottomNav active={active} />
    </>
  );
}

const appContainer = {
  padding: 16,
  paddingBottom: 96, // space for bottom nav
  minHeight: "100vh",
  background: "#FFF4F7"
};