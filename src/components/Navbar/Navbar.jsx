import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";
import ReactSwitch from "react-switch";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

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
          <a href="https://github.com/Lluka21" target="blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/luka-kartvelishvili-8a467628a/"
            target="blank"
          >
            Linkedin
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
