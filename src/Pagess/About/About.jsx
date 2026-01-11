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
        Hey! I’m <strong>Abhishek Choudhary</strong>, a Computer Science graduate
        and a front-end developer who genuinely enjoys turning ideas into real,
        interactive web experiences.
        <br /><br />
        I work mostly with <strong>HTML</strong>, <strong>CSS</strong>,{" "}
        <strong>JavaScript</strong>, and <strong>React.js</strong>, and I love
        building clean, responsive websites that not only look good but feel good
        to use.
        <br /><br />
        I got into web development out of curiosity — wondering how websites
        actually worked. That curiosity slowly turned into a passion, and since
        then I’ve been creating projects that help me learn and grow with every
        line of code.
        <br /><br />
        When I’m not coding, you’ll find me exploring new tech, improving design
        skills, or figuring out better ways to make the web more user-friendly.
        <br /><br />
        Right now, I’m looking for an opportunity to work with a creative team
        where I can learn, contribute, and build meaningful products.
      </motion.p>
    </motion.div>
  );
};
