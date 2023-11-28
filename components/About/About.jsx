import React from "react";
import "./About.css";
import ContactFormWithPrompt from "../ContactForm/ContactForm";

const About = () => {
  return (
    <div className="about-container">
      <h1>Om Oss</h1>
      <h2>Vår matlagningssida</h2>
      <p>Vi är passionerade om matlagning och delar våra kunskaper med dig.</p>
      <a className="hemsida-link" href="https://www.example.com">
        Besök vår hemsida
      </a>
      <ContactFormWithPrompt />
    </div>
  );
};

export default About;
