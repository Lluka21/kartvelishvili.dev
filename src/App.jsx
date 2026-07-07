import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function AppContent() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />
    </div>
  );
  console.log(darkMode);
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
