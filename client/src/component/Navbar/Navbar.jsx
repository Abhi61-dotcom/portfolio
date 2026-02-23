import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";

export const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        {/* <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1>My Portfolio</h1>
        </motion.div> */}

        <motion.div
        className="left"
        initial={{y:-100 , opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{duration:0.8 , ease:"easeOut" }}
        >
          <h1>Portfolio</h1>
        </motion.div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
