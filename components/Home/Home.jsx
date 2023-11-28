import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Välkommen till vår matlagningssida</h1>
      <p>Här hittar du massor av spännande recept att prova på.</p>
      <img
        src="./helper/image/kantarellpaj-.jpeg"
        alt="En bild på kantarellpaj som är i en vit ugnsform"
      />
      
        <div className="buttons">
          <Link to="/recept">
          <button
            className="accessible-button"
            aria-label="Klicka för att se recept"
          >
            Se Recept
          </button>
          </Link>
          
          <button className="accessible-button" aria-label="Ladda upp fil">
            Ladda upp fil
          </button>
        </div>
      
    </div>
  );
};

export default Home;
