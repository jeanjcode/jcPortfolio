import "./HeroImgStyles.css";
import React from "react";
// my background image
import IntroImage from "../assets/pink-sky.jpg";

import { Link } from "react-router-dom";

const IntroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImage} alt="Background img" />
      </div>
      <div className="content">
      {/* <br></br>
        <h1>Jean Chan <br></br> 
        <br></br> Front-End Web Developer</h1>
        <br></br>
        <br></br> */}

      <h2>Jean Chan </h2> 

     <h4>Front-End Web Developer </h4>



      </div>
      <br></br>
      {/* <div className="content">
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className=" btn btn-light">
          Contact
        </Link>
      </div> */}
    </div>
  );
};

export default IntroImg;
