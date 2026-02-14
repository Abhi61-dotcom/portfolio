import React, { useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/nodejs.png";
import mongoLogo from "../../assets/mongodb.png";
import jsLogo from "../../assets/js.png";
import expressLogo from "../../assets/express.png";

export const Home = () => {
  const navigate = useNavigate();

  // 🔥 Scroll Top Fix
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bounce = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 12, delay: 0.2 },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const text = "Hi, I'm Abhishek Choudhary";

  return (
    <div className="m-container">
      {/* Profile Image */}
      <motion.div
        className="profile_img"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={profile} alt="Abhishek Profile" />
      </motion.div>

      {/* Objective Section */}
      <div className="objective">
        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {text.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ display: "inline-block", marginRight: "8px" }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letter}
                  className="letter"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h2>


        <h3 className="role">MERN Stack Developer 🚀</h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I build modern, responsive web applications using React,
          Node.js, Express, and MongoDB. Passionate about clean UI,
          performance, and real-world problem-solving.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Currently seeking an internship or entry-level developer role
          where I can turn ideas into impactful web solutions.
        </motion.p>

        <div className="buttonss">
          <motion.button
            className="hire-btn"
            variants={bounce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
          >
            View Projects
          </motion.button>

          <motion.a
            href="/Abhishek Choudhary Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hire-btn outline-btn"
            variants={bounce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>



        </div>

        <p className="built">
          Built 5+ projects with hands-on MERN experience
        </p>
        <div className="mern">
          <img src={reactLogo} alt="React" />
          <img src={nodeLogo} alt="Node" />
          <img src={mongoLogo} alt="MongoDB" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={expressLogo} alt="Express" />
        </div>
      </div>
    </div>
  );
};
