import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/styles-services-logo.png";
import "./styles/Training.css";
import DrinksImg from "../assets/Glass-wine.jpg";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaMarkdown, FaWhatsapp } from "react-icons/fa";

export const Training = () => {
  const navigate = useNavigate();

  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img  onClick={() => navigate("/")} className="Logo-img" src={Logo} alt="styles-service-logo.png" />

          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li onClick={() => navigate("/Course")}>Courses</li>
            <li onClick={() => navigate("/About")}>About</li>
            <li onClick={() => navigate("/Service")}>services</li>
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
        <p className="Styles-text">SG</p>
        <p className="hospitality-text">Hospitality Training</p>
        <p className="ContactUs-btn" onClick={() => navigate("/Contact")}>
          Contact us
        </p>
      </div>

      <body className="wrapper">
        <h1>Staff Training</h1>

        <p>
          Be one the best in the respective fields with our well trained mentors
          and stuff, You are one of the best when trained by Styles Services Group{" "}
        </p>

        <div className="content-box">
          <div onClick={() => navigate("/Booktraining")} className="card">
            <FaMarkdown />
            <h2>Barman</h2>
            <p>
              Mix and serve alcoholic beverages based on customer requests.All
              these skills will be provided to you by Sg facilitators
            </p>
          </div>

          <div onClick={() => navigate("/Booktraining")} className="card">
            <FaMarkdown />
            <h2>Waiters/waitress</h2>
            <p>
              The duties and responsibilities of a Waiter/Waitress include
              welcoming and seating guests, taking guest orders, communicating
              them effectively to the kitchen and in addition, memorizing the
              menu and offering recommendations to upsell appetizers, desserts,
              or drinks
            </p>
          </div>

          <div onClick={() => navigate("/Booktraining")} className="card">
            <FaMarkdown />
            <h2>Health</h2>
            <p>
              Each of our nurses undergo a rigorous vetting process before being
              assigned to a workplace environment
            </p>
          </div>

          <div onClick={() => navigate("/Booktraining")} className="card">
            <FaMarkdown />
            <h2>Hygeine</h2>
            <p>
              Our qualifications range from Foundation courses at the start of
              your career. We are there along you until you are placed in workplace
            </p>
          </div>

          <div onClick={() => navigate("/Booktraining")} className="card">
            <FaMarkdown />
            <h2>HouseKeeping</h2>
            <p>
              Tasks like vacuuming, sweeping, emptying trash cans, dusting
              shelves, cleaning windows, and mopping floors.SG has great
              Mentors to teach and kickstart your career
            </p>
          </div>
        </div>

        <footer className="footer-1">
          <div className="row">
            <div className="col">
              <img src={Logo} alt="logo.png"/>
              <p>Styles Services Group</p>
              <p>Hospitality solutions</p>
            </div>

            <div className="col">
              <h3>Office</h3>
              <p>325 Rivonia Boulevard,</p>
              <p>Edenburg, Sandton</p>
              <p className="email-id">
                <FaEnvelope /> info@stylesservicesgr.com
              </p>
              <h4>
                <FaPhone /> +27 84 602 3144
              </h4>
            </div>
            <div className="col">
              <h3>Links</h3>
              <ul>
              <li className="link-s">
                <a onClick={() => navigate("/Service")}>What we do</a>
              </li>
              <li className="link-s">
                <a onClick={() => navigate("/About")}>Who we are?</a>
              </li>
                <li className="link-s">
                  <a onClick={() => navigate("/training")}>Training</a>
                </li>
                <li className="link-s">
                  <a onClick={() => navigate("/Contact")}>Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Social media</h3>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/stylesservicesgroup"
                  className="fab"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/stylesservicesgroup/"
                  className="fab"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/stylesservicesgroup/"
                  className="fab"
                >
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/styles_services" className="fab">
                  <FaTwitter />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+27%2084%20602%203144&text=Hi%20STYLES%20SERVICES%20GROUP%20(PTY)%20LTD,%20I%20contacted%20you%20through%20your%20website.%20I%20need" className="fab">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
          Styles Services Group &copy; 2023 - All Rights Reserved | Designed by <a href="">Page Financial Service</a>
        </p>
        </footer>
      </body>
    </>
  );
};
