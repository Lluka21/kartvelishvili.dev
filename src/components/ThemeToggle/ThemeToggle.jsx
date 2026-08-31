import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      className={`theme-toggle ${darkMode ? "theme-toggle-active" : ""}`}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
    >
      <span className="toggle-icon">{darkMode ? "🌙" : "☀️"}</span>
    </button>
  );
}
