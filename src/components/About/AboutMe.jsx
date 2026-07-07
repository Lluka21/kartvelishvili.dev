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
        <span className="name">Luka</span>
        <span className="surname">Kartvelishvili</span>
      </h1>

      <p className="aboutMe_info">
        Android Developer passionate about building clean, maintainable, and
        user-friendly mobile applications. Experienced in developing end-to-end
        projects with a focus on delivering high-quality solutions.
      </p>
    </div>
  );
}
