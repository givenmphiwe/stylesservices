import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/styles-services-logo.png";
import { FaMarkdown, FaWhatsapp } from "react-icons/fa";

export const Placement = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bigimage">
        <div className="overlay">
          <h1>Placement of staff</h1>
          <p></p>
          <p>
            To deliver high-quality service and training for the tourism &
            hospilitay businesses that are flexible, cost effective and
            scalable.<br/>To provide services to
            <b> B&B, Restaurants, Lodge, Hotel, Resort.</b>etc
            our core purpose is to make people healthier and enhance and protect
            their lives
            </p>
          <p>
            Speak to us if you are in need of staff. We have well trained
            candidates to give the best service to your customers.
          </p>
          <p>
            Email us- <FaEnvelope /> info@stylesservicesgr.com
          </p>
          <p>
            Call us - <FaPhone /> +27 84 602 3144
          </p>
        </div>
      </div>

      <footer className="footer-1">
        <div className="row">
          <div className="col">
            <img src={Logo} />
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
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="link-s">
                <a onClick={() => navigate("/Service")}>What we do</a>
              </li>
              <li className="link-s">
                <a onClick={() => navigate("/About")}>Who we are?</a>
              </li>
              <li className="link-s">
                <a onClick={() => navigate("/Training")}>Training</a>
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
              <a
                href="https://api.whatsapp.com/send?phone=+27%2084%20602%203144&text=Hi%20STYLES%20SERVICES%20GROUP%20(PTY)%20LTD,%20I%20contacted%20you%20through%20your%20website.%20I%20need"
                className="fab"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Styles Services Group &copy; 2023 - All Rights Reserved | Designed by{" "}
          <a href="https://pagefinancialservice.com/">Page Financial Service</a>
        </p>
      </footer>
    </>
  );
};
