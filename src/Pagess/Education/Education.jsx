import React from "react";
import "./Education.css";

export const Education = () => {
  return (
    <div className="edu-container">
      <div className="education">
        <div className="school">
          <h1>EDUCATIONAL QUALIFICATION :</h1>
          <ul>
            <li>BCA from Gurugram University In Year 2025 with 65%.</li>
            <li>12 <sup>th</sup> from Haryana Board (HBSE) In Year 2021 with 83%.</li>
            <li>10 <sup>th</sup> from Haryana Board (HBSE) In Year 2019 with 70.4%.</li>
          </ul>
        </div>

        <div className="coaching">
          <h1>Courses</h1>
          <ul>
            <li>MERN FullStack (2025) (Pursuing) – DUCAT IT Training</li>
            <li>C language (2023) – AIFA Institute sector-12</li>
            <li>C++ language (2023) – AIFA Institute sector-12</li>
            <li>Data Structure (2023) – AIFA Institute sector-12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
