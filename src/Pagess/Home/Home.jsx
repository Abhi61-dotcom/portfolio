import React from "react";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import "./Home.css";

export const Home = () => {
  // Animation variants
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

  const text = "Hi, I'm Abhishek Choudhary ";

  return (
    <>
      <div className="m-container">
        {/* Profile Image */}
        <motion.div
          className="profile_img"
          initial={{scale:0,opacity:0}}
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay:0.5 }}
          viewport={{ once: true }}
        >
          <img src={profile} alt="Abhishek Profile" />
        </motion.div>

        {/* Objective Section */}
        <div className="objective">
          {/* Animated Heading */}
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letter} className="letter">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I’m a computer Science graduate with strong skills in
            <span class="text-blue-400 font-semibold"> HTML</span>,{" "}
            <span class="text-blue-400 font-semibold"> CSS</span>,{" "}
            <span class="text-blue-400 font-semibold"> JavaScript</span>, and{" "}
            <span class="text-blue-400 font-semibold"> React.js. </span>.
            Passionate about building responsive, user-friendly web interfaces
            and eager to enhance expertise in modern front-end development.
            Motivated to contribute creativity and technical knowledge to
            real-world projects.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className="hire-btn"
            variants={bounce}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </>
  );
};
