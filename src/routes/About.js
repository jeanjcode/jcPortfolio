import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
// import PhotoImage from "../assets/sunshine.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        heading="About Me"
        text=" 👩 Jean Chan"
        subhead="I am a front-end web developer based in the UK, certified by the University of
        Birmingham. I initially worked in digital marketing, leading
        efforts to drive and sustain website traffic. Today, my main goal
        is to craft functional & visually appealing web applications that
        address real-world needs."
      />

      {/* <div className="photo-place">
        <img className="photo" src={PhotoImage} alt="Image" />
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
