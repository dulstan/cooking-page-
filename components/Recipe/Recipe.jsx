import React from "react";

import "./Recipe.css";

const Recipe = () => {
 

  return (
    <div className="recipe-container">
      <h1>Recept</h1>
      <h2>Kantarell Paj</h2>
      <div className="recipe-content">
        <div className="recipe-video">
          <video controls>
            <source src="./helper/video/kantarelvideo.MP4" type="video/mp4" />
            <track
              label="Swedish"
              kind="subtitles"
              srcLang="sv"
              src="./components/Recipe/undertexter.vtt"
              default
            />
          </video>
        </div>
        <div className="recipe-text">
          <p className="styled-text">
            <strong>Pajskal</strong> <br />
            150g smör <br />
            210g vetemjöl
            <br />
            1/2tsk salt
            <br />
            2msk kallt vatten
            <br />
            <strong>Fyllning:</strong> <br />
            600g kantareller
            <br />
            1 gullök
            <br />
            2msk smör
            <br />
            1tsk salt
            <br />
            150g riven ost
            <br />
            <strong>Äggstanning:</strong> <br />
            3 ägg
            <br />
            2dl vispgrädde <br />
            1dl mjölk
            <br />
            1tsk kajennpeppar
            <br />
            1tsk salt{" "}
          </p>
        </div>
      </div>
      <button className="accessible-button">Add to Favorites</button>
    </div>
  );
};

export default Recipe;
