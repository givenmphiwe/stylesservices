import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import DrinksImg from "../assets/Glass-wine.jpg";
import Logo from "../assets/styles-services-logo.png";
import Drink from "../assets/Drink.jpg";

export const Home = () => {
  const navigate = useNavigate();

  const [Mobile, setMobile] = useState(false);

  return (
      <body>
        <nav className="navbar">
          <div className="container">
            <img
              className="Logo-img"
              src={Logo}
              alt="styles-service-logo.png"
            />

            <ul
              className={Mobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setMobile(false)}
            >
              <li>Training</li>
              <li>Courses</li>
              <li onClick={() => navigate("About")}>About-us</li>
              <li>services</li>
            </ul>

            <button
              className="mobile-menu-icon"
              onClick={() => setMobile(!Mobile)}
            >
              {Mobile ? <ImCross /> : <FaBars />}
            </button>
          </div>
        </nav>

        <div className="container-2">
          <img className="Drink-img" src={DrinksImg} alt="" />
          <p className="Styles-text">STYLES SERVICES GROUP</p>
          <p className="hospitality-text">Hospitality Solutions</p>
          <p className="ContactUs-btn" onClick={() => navigate("contact")}>
            Contact us
          </p>
        </div>

        <div className="container-1">
          <div className="wrapper">
            <img className="img-txt" src={Drink} alt="" />
            <div className="text-box">
              <h2>Align Image & Text Aside</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                waedso jkerne edfleke ceoew cjewfm ewo
              </p>
            </div>
          </div>
        </div>

        <h1 className="best-txt">
          SSG Rockstars are the cream of crop and have been specially trained in
          all aspects of Butler service. Our Clients rave about them.
        </h1>

        <div className="container-3">
          <div className="content-section">
            <div className="card">
              <img src={Drink} alt="drink.jpg" />
              <h2>Hotel Training</h2>
              <p>
                Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo
              </p>
            </div>

            <div className="card">
              <img src={Drink} alt="drink.jpg" />
              <h2>Courses</h2>
              <p>
                Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo
              </p>
            </div>

            <div className="card">
              <img src={Drink} alt="drink.jpg" />
              <h2>Our services</h2>
              <p>
                Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo
              </p>
            </div>

            <div className="card">
              <img src={Drink} alt="drink.jpg" />
              <h2>Card one</h2>
              <p>
                Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo
              </p>
            </div>
          </div>
        </div>

        <div className="bigimage">
          <div className="overlay">
            <h1>HEAdLINE TEXT</h1>
            <p>This is dope text</p>
          </div>
        </div>

        <div className="container-4">
          <div className="client-wrap">
            <h1>Our partners</h1>
            <hr />

            <div className="client-in">
              <ul>
                <li>
                  <img src={Drink} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>

      
    
  );
};
