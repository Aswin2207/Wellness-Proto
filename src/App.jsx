import { useState } from "react";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Calendar from "./screens/Calendar";
import Fertility from "./screens/Fertility";
import Chat from "./screens/AIChat";
import Profile from "./screens/Profile";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [screen, setScreen] = useState("Home");

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  switch (screen) {
    case "Cycle": return <Calendar onTab={setScreen} />;
    case "Fertility": return <Fertility onTab={setScreen} />;
    case "Insights": return <Chat onTab={setScreen} />;
    case "Profile": return <Profile onTab={setScreen} />;
    default: return <Home onTab={setScreen} />;
  }
}