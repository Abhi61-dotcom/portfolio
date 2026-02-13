import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import { Home } from "./Pagess/Home/Home";
import { About } from "./Pagess/About/About";
import { Contact } from "./Pagess/Contact/Contact";
import { Skills } from "./Pagess/Skills/Skills";
import { Projects } from "./Pagess/Projects/Projects";
import { Education } from "./Pagess/Education/Education";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="middle">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
