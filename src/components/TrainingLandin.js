import React from "react";

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
            <a onClick={() => navigate("/Barmanintro")} className="info-btn">
              Barman
            </a>
            <a onClick={() => navigate("/Waiterintro")} className="info-btn">
              Waiter/Waitress
            </a>
            <a onClick={() => navigate("/Housekeepingintro")}  className="info-btn">
              Housekeeping
            </a>
            <a onClick={() => navigate("/Healthintro")}  className="info-btn">
              Health
            </a>
            <a onClick={() => navigate("/Hygeineintro")}  className="info-btn">
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
