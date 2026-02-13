import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="about-heading"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        🧑‍💻 About Me
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hey! I’m <strong> Abhishek Choudhary</strong>, a Computer Science graduate and a <span style={{color:"red" , fontSize:"25px" , fontWeight:"500"}}>Full-Stack MERN Developer</span> who genuinely enjoys turning ideas into real, interactive web experiences. <br /><br />

        I work with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, building complete responsive and scalable web applications from intuitive front-end interfaces to efficient back-end systems. I focus on creating clean, user-friendly applications that not only look good but perform smoothly.<br /><br />

        I got into web development out of curiosity — wondering how websites actually worked. That curiosity slowly turned into a passion, and since then I’ve been building real-world full-stack projects that help me grow with every line of code. Along the way, I’ve also explored <strong>Generative AI</strong> integration to build smarter and more dynamic applications.<br /><br />

        When I’m not coding, you’ll find me exploring new technologies, improving my design and problem-solving skills, or finding better ways to make the web more efficient.<br /><br />

        Right now, I’m looking for an opportunity where I can contribute as a <b>MERN Stack Developer</b>, learn from experienced professionals, and build meaningful digital products.<br /><br />
      </motion.p>
    </motion.div>
  );
};
