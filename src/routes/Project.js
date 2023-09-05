import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="Projects" text />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
