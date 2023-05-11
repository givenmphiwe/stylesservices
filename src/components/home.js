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
    <>
      <nav className="navbar">
        <div className="container">
          <img className="Logo-img" src={Logo} alt="styles-service-logo.png" />

          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li>Training</li>
            <li>Courses</li>
            <li>About-us</li>
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
        <p className="ContactUs-btn">Contact us</p>
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
            <p>Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo</p>
          </div>

          <div className="card">
            <img src={Drink} alt="drink.jpg" />
            <h2>Courses</h2>
            <p>Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo</p>
          </div>

          <div className="card">
            <img src={Drink} alt="drink.jpg" />
            <h2>Our services</h2>
            <p>Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo</p>
          </div>

          <div className="card">
            <img src={Drink} alt="drink.jpg" />
            <h2>Card one</h2>
            <p>Lorem ipsum dolor sit waedso jkerne edfleke ceoew cjewfm ewo</p>
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

      <footer className="footer-container">
        <div className="footer">
          <div className="container-5">
            <div className="row">
              <div className="footer-col">
                <h4>Styles Services Group</h4>
                <ul>
                  <li>
                    <a>Our services</a>
                  </li>
                  <li>
                    <a>Courses</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Get-help</h4>
                <ul>
                  <li>
                    <a>Contant us</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Training</h4>
                <ul>
                  <li>
                    <a>Barman</a>
                  </li>
                  <li>
                    <a>Waiters</a>
                  </li>
                  <li>
                    <a>Housekeeping</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Follow us</h4>
                <div className="social-links">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

{
  /* <h1>Component 1</h1> BsFacebook Brand Logo Section Using With Simple HTML & CSS | Website Section Tutorial
    <button onClick={() => navigate('contact')}>Contact</button> CiFaceFrown */
}
