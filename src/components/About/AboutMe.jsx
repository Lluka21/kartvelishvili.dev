import React from "react";
import "./AboutMe.css";
import androidImage from "../../assets/android_boy.png";

export default function AboutMe() {
  return (
    <div className="aboutMe_wrapper">
      <div className="aboutMe_imageSection">
        <h2 className="aboutMe_role">Android Developer</h2>
        <img src={androidImage} className="image" alt="Android Developer" />
      </div>

      <h1 className="aboutMe_text">
        <span>Luka</span>
        <span>Kartvelishvili</span>
      </h1>

      <p className="aboutMe_info">
        Android Developer, passionate about building clean, maintainable, and
        user-friendly mobile applications. Experienced in creating projects
        end-to-end and focused on delivering high-quality results.
      </p>
    </div>
  );
}
