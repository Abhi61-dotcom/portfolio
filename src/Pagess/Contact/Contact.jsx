import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import "./Contact.css";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (res.data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

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

            <div className="socials">
              <a
                href="https://github.com/Abhi61-dotcom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abhishekchoudhary-3k/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="send-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-msg"
              >
                Message Sent Successfully ✅
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};
