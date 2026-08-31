import React from "react";
import "./AboutMe.css";
import androidImage from "../../assets/android_boy.png";
import DetailedInfo from "./DetailedInfo/DetailedInfo";
import PersonalProjects from "./PersonalProjects/PersonalProjects";

export default function AboutMe() {
  return (
    <div className="aboutMe_wrapper">
      <div className="aboutMe_imageSection">
        <h2 className="aboutMe_role">Android Developer</h2>
        <img src={androidImage} className="image" alt="Android Developer" />
      </div>
      <div className="my_information">
        <DetailedInfo />
        <PersonalProjects />
      </div>
    </div>
  );
}
