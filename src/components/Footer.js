import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaRegEnvelopeOpen,
  FaPhone,
  // FaGithub,
  // FaLinkedin,
  // FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          {/* <div className="location">
            <FaHome size={20} style={{ color: "#ffff", marginRight: "2rem" }} />
            <p>West Midlands</p>
          </div> */}
          
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />
              07786060305
            </h4>
          </div>

          <div className="email">
            <h4>
              <a href="mailto:jeancodes21@gmail.com">
                <FaRegEnvelopeOpen
                  size={20}
                  style={{ color: "#ffff", marginRight: "2rem" }}
                />
              </a>
              jeancodes21@gmail.com
            </h4>
          </div>
        </div>

        

        {/* <div className="right"> */}
          {/* <h4>Copyright...</h4> */}
          {/* <p>
            Contact me on any of my socials or email for any more information
          </p> */}

          <div className="social">
            {/* <Link to="https://www.github.com/jeanjcode" target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#ffff", marginRight: "1rem" }}
              />
            </Link>
            
            <Link to="https://www.linkedin.com">
              <FaLinkedin
                size={30}
                style={{ color: "#ffff", marginRight: "1rem" }}
              />
            </Link> */}
         
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

