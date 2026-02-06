import React from "react";
import "./Education.css";

export const Education = () => {
  return (
    <div className="edu-container">
      <div className="education">
        <div className="school">
          <h1>EDUCATION</h1>
          <ul>
            <li> <strong>Bachelor of Computer Application(BCA) </strong>-Gurugram University In Year 2025 with 65%.</li>
            <li><strong>12 <sup>th</sup> (HBSE) </strong>  Haryana Board - 2021 | 83%.</li>
            <li><strong>10 <sup>th</sup> (HBSE) </strong>  Haryana Board - 2029 | 70.4%.</li>
          </ul>
        </div>

        <div className="coaching">
          <h1> Professional Courses</h1>
          <ul>
            <li><strong>MERN Stack Development</strong> (2025 - Pursuing) – Ducat IT Training</li>
            <li><strong>C Programming</strong> (2023) – AIFA Institute sector-12</li>
            <li><strong>C++ Programming</strong> (2023) – AIFA Institute sector-12</li>
            <li><strong>Data Structure</strong> (2023) – AIFA Institute sector-12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
