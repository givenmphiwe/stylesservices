import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/styles-services-logo.png";
import "./styles/Training.css";
import DrinksImg from "../assets/Glass-wine.jpg";
import {
    FaBars,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
  import { FaMarkdown} from "react-icons/fa"

export const Training = () => {
  const navigate = useNavigate();

  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img className="Logo-img" src={Logo} alt="styles-service-logo.png" />

          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li onClick={() => navigate("Course")}>Courses</li>
            <li onClick={() => navigate("About")}>About</li>
            <li onClick={() => navigate("Service")}>services</li>
          </ul>

          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {/* {Mobile ? <ImCross /> : <FaBars />} */}
          </button>
        </div>
      </nav>

      <div className="container-2">
        <img className="Drink-img" src={DrinksImg} alt="" />
        <p className="Styles-text">SSG</p>
        <p className="hospitality-text">Hospitality Training</p>
        <p className="ContactUs-btn" onClick={() => navigate("/")}>
          Home
        </p>
      </div>

      
      <body className="wrapper">
            <h1>Staff Training</h1>

            <p>Lore ipsum dolor skdmewd ewfk kefm ewfoefmoe few foekwfm</p>

            <div className="content-box">
                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>

                <div className="card">
                    <FaMarkdown/>
                    <h2>Marketing Services</h2>
                    <p>Aliquam ut turpisa fekwokfm fvwefweewf</p>
                </div>
            </div>

            <footer className="footer-1">
          <div className="row">
            <div className="col">
              <img src=""/>
              <p>Subcribe Easy with ssg the world hospilitay</p>
            </div>

          <div className="col">
            <h3>Office</h3>
            <p>BLVD Road</p>
            <p>Rivinia AHS</p>
            <p className="email-id">EMAil.com</p>
            <h4>+27-714675197</h4>
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul>
              <li className="link-s"><a onClick={() => navigate("/")}>Home</a></li>
              <li className="link-s"><a onClick={() => navigate("Service")}>Services</a></li>
              <li className="link-s"><a onClick={() => navigate("About")}>About us</a></li>
              <li className="link-s"><a onClick={() => navigate("Contact")}>Contact us</a></li>
            </ul>
          </div>
          <div className="col">
            <h3>Social media</h3>
            <div className="social-icons">
              
                <a className="fab"><FaFacebook/></a>
                <a className="fab"><FaLinkedin/></a>
                <a className="fab"><FaInstagram/></a>
                <a className="fab"><FaTwitter/></a>
              
            </div>
          </div>
          </div>
          <hr/>
          <p className="copyright">Styles Services Group &copy; 2023 - All Rights Reserved</p>
        </footer>
        </body>
    </>
  );
};
