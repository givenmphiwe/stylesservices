import React, { useState } from "react";
import DrinksImg from "../assets/Glass-wine.jpg";
import Logo from "../assets/styles-services-logo.png";
import { useNavigate } from "react-router-dom";
import "./styles/TrainingLandin.css";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

export const TrainingLandin = () => {
  const navigate = useNavigate();

  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <section className="sectionsss">
        <input type="checkbox" id="check" />
        <header>
          <h2>
            {" "}
            <a onClick={() => navigate("/")} className="log">
              SG
            </a>
          </h2>
          <div className="navigation">
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/About")}>About</a>
            <a onClick={() => navigate("/Course")}>Courses</a>
            <a onClick={() => navigate("/Contact")}>Contact</a>
          </div>
          <label className="label" for="check">
            <a className="menu-btn">
              <FaBars />
            </a>
            <a className="close-btn">
              <FaTimes />
            </a>
          </label>
        </header>

        <div className="conten">
          <div className="info">
            <h2>
              Like Nature
              <br />
              <span>Be Creative!</span>
            </h2>
            <p className="paragraph">
              We have Developed training assesments that will talk to you, show you your
              knowledge of the hospilitay industry.
              {" "}
            </p>
            <a onClick={() => navigate("/BarmanTraining")} className="info-btn">
              Barman
            </a>
            <a href="#" className="info-btn">
              Waiter/Waitress
            </a>
            <a href="#" className="info-btn">
              Housekeeping
            </a>
            <a href="#" className="info-btn">
              Health
            </a>
            <a href="#" className="info-btn">
              Hygeine
            </a>
          </div>
        </div>

        <div className="media-icons">
          <a href="https://www.facebook.com/stylesservicesgroup">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/styles_services">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/stylesservicesgroup/">
            <FaInstagram />
          </a>
        </div>
      </section>
    </>
  );
};
