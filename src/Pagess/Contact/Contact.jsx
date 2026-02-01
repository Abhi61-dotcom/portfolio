import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-page">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1 className="gradient-heading">Let's work together</h1>
          <p>
            Have a project in mind or just want to connect?
            Feel free to drop me a message.
          </p>

          <div className="info-box">
            <h2>Abhishek Choudhary</h2>

            <p>
              📩{" "}
              <a href="mailto:jaatabhishek61@gmail.com">
                jaatabhishek61@gmail.com
              </a>
            </p>

            <p>
              📞{" "}
              <a href="tel:+917217798130">
                +91 72177 98130
              </a>
            </p>

            {/* SOCIAL LINKS */}
            <div className="socials">
              <a
                href="https://github.com/Abhi61-dotcom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              {/* <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a> */}
            </div>

            <a
              href="/Updated RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2>Contact Me</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
