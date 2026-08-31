import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";
import ReactSwitch from "react-switch";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <nav>
          <div className="navbar-links">
            <a>About</a>
            <a>Projects</a>
            <a>Contact Me</a>
          </div>
        </nav>

        <div className="navbar-right">
          <span>EN/GE</span>
          <span>GitHub</span>
          <span>LinkedIn</span>
          <ReactSwitch checked={darkMode} onChange={setDarkMode} />
        </div>
      </div>
    </div>
  );
}
