import React from "react";
import "./Skills.css";
import css from "../../assets/css.png";
import word from "../../assets/word.png";
import excel from "../../assets/excel.png";
import powerpoint from "../../assets/powerpoint.png";
import bootstrap from "../../assets/bootstrap.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";

export const Skills = () => {
  const skills = [
    { name: "HTML 5", img: html },
    { name: "CSS 3", img: css },
    { name: "Bootstrap", img: bootstrap },
    { name: "JavaScript", img: js },
    { name: "React JavaScript", img: react },
    { name: "Word", img: word },
    { name: "Powerpoint", img: powerpoint },
    { name: "Excel", img: excel },
  ];

  return (
    <div className="skillmain">
      <div className="head">
        <h1>My Skills</h1>
      </div>
      <div className="skillcontainer">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <h4>{skill.name}</h4>
            <img src={skill.img} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
