import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

import css from "../../assets/css.png";
import bootstrap from "../../assets/bootstrap.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import word from "../../assets/word.png";
import excel from "../../assets/excel.png";
import powerpoint from "../../assets/powerpoint.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Skills = () => {
  const skills = [
    { name: "HTML 5", img: html },
    { name: "CSS 3", img: css },
    { name: "Bootstrap", img: bootstrap },
    { name: "JavaScript", img: js },
    { name: "React JavaScript", img: react },
    { name: "Node Js", img: nodejs },
    { name: "Express Js", img: express },
    { name: "Mongo Db", img: mongodb },
    { name: "Word", img: word },
    { name: "PowerPoint", img: powerpoint },
    { name: "Excel", img: excel },
  ];

  return (
    <div className="skillmain">
      <div className="head">
        <h1>My Skills</h1>
      </div>

      <motion.div
        className="skillcontainer"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-box"
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
            }}
          >
            <motion.img
              src={skill.img}
              alt={skill.name}

              /* floating animation */
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              whileTap={{ scale: 0.9 }}
              drag
              dragElastic={0.15}
              dragConstraints={{ top: -40, bottom: 40, left: -40, right: 40 }}
            />
            <h4>{skill.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
