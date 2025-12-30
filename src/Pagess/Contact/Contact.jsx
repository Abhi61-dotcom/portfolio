import React from 'react'
import "./Contact.css"

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contract">
        <h1>Have an idea or project in mind? I’d love to hear from you.</h1>
      </div>

      <div className="myinfo">
        <h2>Abhishek Choudhary</h2>
        <h3>
          📩{" "}
          <a
            href="mailto:jaatabhishek61@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
          >
            jaatabhishek61@gmail.com
          </a>
        </h3>
        <h3>📞{" "}
          <a href="tel:+917217798130">+91 72177 98130</a>
           </h3>
      </div>
    </div>
  )
}
