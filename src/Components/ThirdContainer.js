import React from "react";
import "./ThirdContainer.css";

function ThirdContainer() {
  return (
    <div className="thirdContainer">
      <div className="thirdContainer__container">
        <img
          className="thirdContainer__mainImage"
          src="https://www.myskillsme.com/images/best-business/video.jpg"
          alt=""
        />
        <img
          className="thirdContainer__dots1"
          src="https://www.myskillsme.com/images/contact/05.png"
          alt=""
        />
        <img
          className="thirdContainer__dots2"
          src="https://www.myskillsme.com/images/contact/05.png"
          alt=""
        />
        <img
          className="thirdContainer__triangle"
          src="https://www.myskillsme.com/images/contact/04.png"
          alt=""
        />
        <div className="rectangle4"></div>
        <div className="rectangle5"></div>
        <div className="rectangle6"></div>
        <h1>We believe the possibility of Self-Taught Coders</h1>
        <button>Sign Up Now</button>
      </div>
    </div>
  );
}

export default ThirdContainer;
