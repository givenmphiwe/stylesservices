import React from "react";
import "./styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Housekeeping from "./assets/housekeeping.jpg";

export const HousekeepingIntro = () => {
  return (
    <div className="sect">
      <div className="containa">
        <div className="content-sect">
          <div className="titl">
            <h1>Housekeeping Training</h1>
          </div>

          <div className="contety">
            <h3>Lorem ipsum</h3>

            <p>Lorem ipsum</p>

            <div className="strt-btn">
              <a>Start</a>
            </div>
          </div>
          <div className="icons-medi">
            <a href="https://www.facebook.com/stylesservicesgroup">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/styles_services">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/stylesservicesgroup/">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="image-sec">
          <img src={Housekeeping} />
        </div>
      </div>
    </div>
  );
};