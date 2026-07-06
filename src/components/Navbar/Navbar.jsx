import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#3DDC84",
        borderBottom: "2px solid #c5c3c3",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 16px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          <a>About</a>
          <a>Apps</a>
          <a>Contact</a>
        </nav>

        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          <span>EN/GE</span>
          <span>GitHub</span>
          <span>LinkedIn</span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "8px 12px",
              borderRadius: "20px",
              border: "1px solid #3DDC84",
              backgroundColor: "#66e7a0",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </div>
  );
}
